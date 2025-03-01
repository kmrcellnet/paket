<?php
$data = json_decode(file_get_contents("php://input"), true);

$nomor_hp = $data["nomor_hp"];
list($produk, $harga) = explode("|", $data["produk"]);

$transaksi = [
    "nomor_hp" => $nomor_hp,
    "produk" => $produk,
    "harga" => $harga,
    "status" => "pending",
    "waktu" => date("Y-m-d H:i:s")
];

$file = 'transaksi.json';
$transaksiData = file_exists($file) ? json_decode(file_get_contents($file), true) : [];
$transaksiData[] = $transaksi;
file_put_contents($file, json_encode($transaksiData, JSON_PRETTY_PRINT));

echo json_encode(["message" => "Top-up berhasil! Tunggu beberapa saat."]);
?>