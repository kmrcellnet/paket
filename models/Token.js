const mongoose = require('mongoose');

const TokenSchema = new mongoose.Schema({
    user: String,
    nomorMeter: String,
    jumlah: Number,
    token: String,
    status: { type: String, default: 'pending' }, // pending, sukses
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Token', TokenSchema);

