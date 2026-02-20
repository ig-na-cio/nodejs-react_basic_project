const Message = require("../models/Message");
const User = require("../models/User");

exports.sendMessage = async (req, res) => {
    try {
        const { title, text, senderId, recipientId } = req.body;

        // Crear mensaje
        const message = await Message.create({
            title,
            text,
            sender: senderId,
            recipient: recipientId
        });

        // Agregar mensaje al sender
        await User.findByIdAndUpdate(senderId, {
            $push: { messages: message._id }
        });

        // Agregar mensaje al recipient
        await User.findByIdAndUpdate(recipientId, {
            $push: { messages: message._id }
        });

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