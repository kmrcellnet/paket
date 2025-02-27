const errorHandler = (err, req, res, next) => {
    res.status(500).json({ message: err.message || "Terjadi kesalahan pada server" });
};

module.exports = errorHandler;

