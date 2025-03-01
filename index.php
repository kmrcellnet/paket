<?php include "db.php"; ?>
<!DOCTYPE html>
<html lang="id">
<head>
    <title>Top-Up Pulsa</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <h2>Top-Up Pulsa & Paket Data</h2>
        <form action="proses.php" method="post">
            <label>Nomor HP:</label>
            <input type="text" name="nomor_hp" required>

            <label>Pilih Produk:</label>
            <select name="produk">
                <option value="Pulsa 10K|10000">Pulsa 10K - Rp10.000</option>
                <option value="Pulsa 20K|20000">Pulsa 20K - Rp20.000</option>
                <option value="Data 5GB|25000">Paket Data 5GB - Rp25.000</option>
            </select>

            <button type="submit">Top-Up Sekarang</button>
        </form>

        <a href="transaksi.php">Lihat Riwayat Transaksi</a>
    </div>
</body>
</html>
