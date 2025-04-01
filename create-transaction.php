<?php
header("Content-Type: application/json");

// API Key Tripay (Ganti dengan API Key kamu)
$apiKey = '5MaqJxWAtyaewIDz3W0BeT2tO91Bux1ytkH49Gpc'; 
$privateKey = 'woeJk-0EMKx-ICjyW-mc8r5-WSmM5';

// Ambil data JSON dari request
$data = json_decode(file_get_contents("php://input"), true);

// Pastikan data yang dibutuhkan ada
if (!isset($data['method'], $data['amount'], $data['customer_name'], $data['customer_phone'], $data['order_items'])) {
    echo json_encode(["success" => false, "message" => "Data tidak lengkap"]);
    exit;
}

// Buat return URL dengan parameter produk, harga, dan nomor HP
$return_url = "https://kmrcell.store/payment-success.html?" . http_build_query([
    "product" => $data['order_items'][0]['name'],
    "price"   => $data['amount'],
    "phone"   => $data['customer_phone']
]);

// Buat payload untuk Tripay
$payload = [
    'method'        => $data['method'], // DANA, OVO, QRIS, dll.
    'merchant_ref'  => 'INV-' . time(), // Nomor unik transaksi
    'amount'        => $data['amount'],
    'customer_name' => $data['customer_name'],
    'customer_phone'=> $data['customer_phone'],
    'order_items'   => $data['order_items'],
    'callback_url'  => "https://kmrcell.store/webhook.php", // Webhook untuk update status
    'return_url'    => $return_url // Redirect ke halaman sukses dengan detail transaksi
];

// Kirim request ke API Tripay
$curl = curl_init();
curl_setopt_array($curl, [
    CURLOPT_URL => "https://tripay.co.id/api/transaction/create",
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_HTTPHEADER => [
        "Authorization: Bearer $apiKey",
        "Content-Type: application/json"
    ],
    CURLOPT_POST => true,
    CURLOPT_POSTFIELDS => json_encode($payload)
]);

$response = curl_exec($curl);
curl_close($curl);

// Kembalikan respons ke JavaScript
echo $response;
?>
