const Token = require('../models/Token');

// Generate token listrik (simulasi)
const generateToken = (jumlah) => {
    return Math.random().toString().slice(2, 2 + jumlah);
};

// Pembelian token listrik
exports.beliToken = async (req, res) => {
    try {
        const { user, nomorMeter, jumlah } = req.body;
        if (!user || !nomorMeter || !jumlah) {
            return res.status(400).json({ message: "Semua data harus diisi" });
        }

        const token = generateToken(20);
        const newToken = new Token({ user, nomorMeter, jumlah, token, status: 'sukses' });
        await newToken.save();

        res.status(201).json({ message: "Token berhasil dibeli", token });
    } catch (error) {
        res.status(500).json({ message: "Terjadi kesalahan", error });
    }
};

// Mendapatkan daftar token yang dibeli
exports.getTokens = async (req, res) => {
    try {
        const tokens = await Token.find().sort({ createdAt: -1 });
        res.json(tokens);
    } catch (error) {
        res.status(500).json({ message: "Terjadi kesalahan", error });
    }
};

