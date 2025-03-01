<?php
include "db.php";
?>
<!DOCTYPE html>
<html lang="id">
<head>
    <title>Riwayat Transaksi</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <h2>Riwayat Transaksi</h2>
        <table border="1">
            <tr>
                <th>No</th>
                <th>Nomor HP</th>
                <th>Produk</th>
                <th>Harga</th>
                <th>Status</th>
                <th>Waktu</th>
            </tr>
            <?php
            $result = $conn->query("SELECT * FROM transaksi ORDER BY id DESC");
            while ($row = $result->fetch_assoc()) {
                echo "<tr>
                        <td>{$row['id']}</td>
                        <td>{$row['nomor_hp']}</td>
                        <td>{$row['produk']}</td>
                        <td>Rp" . number_format($row['harga'], 0, ',', '.') . "</td>
                        <td>{$row['status']}</td>
                        <td>{$row['created_at']}</td>
                      </tr>";
            }
            ?>
        </table>
        <a href="index.php">Kembali</a>
    </div>
</body>
</html>
