<?php
$transaksiData = file_exists("transaksi.json") ? json_decode(file_get_contents("transaksi.json"), true) : [];
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
            <?php foreach ($transaksiData as $index => $row): ?>
                <tr>
                    <td><?= $index + 1 ?></td>
                    <td><?= htmlspecialchars($row['nomor_hp']) ?></td>
                    <td><?= htmlspecialchars($row['produk']) ?></td>
                    <td>Rp<?= number_format($row['harga'], 0, ',', '.') ?></td>
                    <td><?= htmlspecialchars($row['status']) ?></td>
                    <td><?= htmlspecialchars($row['waktu']) ?></td>
                </tr>
            <?php endforeach; ?>
        </table>
        <a href="index.html">Kembali</a>
    </div>
</body>
</html>