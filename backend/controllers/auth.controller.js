const User = require("../models/User");
const bcrypt = require("bcrypt");

exports.register = async (req, res) => {
    try {
        const { email, password } = req.body;

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "Usuario ya existe" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await User.create({
            email,
            password: hashedPassword
        });

        res.status(201).json({
            id: user._id,
            email: user.email
        });

    } catch (error) {
        res.status(500).json({ message: "Error en registro" });
    }
};

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "Credenciales inválidas" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Credenciales inválidas" });
        }

        res.json({
            message: "Login exitoso",
            id: user._id,
            email: user.email
        });

    } catch (error) {
        res.status(500).json({ message: "Error en login" });
    }
};