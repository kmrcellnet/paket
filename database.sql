CREATE DATABASE topup_db;

USE topup_db;

CREATE TABLE transaksi (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nomor_hp VARCHAR(15) NOT NULL,
    produk VARCHAR(50) NOT NULL,
    harga INT NOT NULL,
    status ENUM('pending', 'sukses', 'gagal') DEFAULT 'pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
