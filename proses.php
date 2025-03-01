<?php
include "db.php";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nomor_hp = $_POST["nomor_hp"];
    list($produk, $harga) = explode("|", $_POST["produk"]);

    // Simpan transaksi ke database
    $sql = "INSERT INTO transaksi (nomor_hp, produk, harga, status) VALUES ('$nomor_hp', '$produk', '$harga', 'pending')";
    if ($conn->query($sql) === TRUE) {
        echo "<script>alert('Top-up berhasil! Tunggu beberapa saat.'); window.location='transaksi.php';</script>";
    } else {
        echo "<script>alert('Terjadi kesalahan.'); window.history.back();</script>";
    }
}

$conn->close();
?>
