const Message = require("../models/Message");
const User = require("../models/User");

exports.sendMessage = async (req, res) => {
    try {
        const { title, text, senderEmail, recipientEmail } = req.body;
        // Crear mensaje
        const message = await Message.create({
            title,
            text,
            sender: senderEmail,
            recipient: recipientEmail
        });
        console.log("Mensaje recibido asi:")
        console.log(message)

        // Buscar sender por Email
        const sender = await User.findOne({ email: senderEmail });
        if (!sender) {
            return res.status(404).json({ message: "Sender no encontrado" });
        }
        const senderId = sender._id;

        // Agregar mensaje al sender
        await User.findByIdAndUpdate(senderId, {
            $push: { messages: message._id }
        });

        // Buscar recipient por email
        const recipient = await User.findOne({ email: recipientEmail });
        if (!recipient) {
            return res.status(404).json({ message: "Recipient no encontrado" });
        }
        const recipientId = recipient._id;
        
        if (!recipientId.equals(senderId)) {
            // Agregar mensaje al recipient
            await User.findByIdAndUpdate(recipientId, {
                $push: { messages: message._id }
            });
        }
        res.status(201).json(message);

    } catch (error) {
        res.status(500).json({ message: "Error enviando mensaje", error });
    }
};

exports.getUserMessages = async (req, res) => {
    try {
        const { userId } = req.params;

        const user = await User.findById(userId)
            .populate("messages");

        res.json(user.messages);

    } catch (error) {
        res.status(500).json({ message: "Error obteniendo mensajes" });
    }
};

exports.deleteMessage = async (req, res) => {
    try {
        const { messageId, userId } = req.params;

        // Eliminar referencia del mensaje en el usuario
        await User.findByIdAndUpdate(userId, {
            $pull: { messages: messageId }
        });

        // Si es el ultimo usuario con el mensaje, eliminar el mensaje
        const usersWithMessage = await User.find({ messages: messageId });
        if (usersWithMessage.length === 0) {
            await Message.findByIdAndDelete(messageId);
        }

        res.json({ message: "Mensaje eliminado" });

    } catch (error) {
        res.status(500).json({ message: "Error eliminando mensaje" });
    }
};