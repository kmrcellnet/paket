<?php
$apiKey = "5MaqJxWAtyaewIDz3W0BeT2tO91Bux1ytkH49Gpc";
$privateKey = "woeJk-0EMKx-ICjyW-mc8r5-WSmM5";
$merchantCode = "T38233";

$data = json_decode(file_get_contents("php://input"), true);

if (!isset($data["name"], $data["price"], $data["provider"], $data["method"], $data["nomor_hp"])) {
    echo json_encode(["success" => false, "message" => "Data tidak lengkap"]);
    exit;
}

$merchantRef = "INV-" . time();
$amount = $data["price"];

$payload = [
    "method" => $data["method"],
    "merchant_ref" => $merchantRef,
    "amount" => $amount,
    "customer_name" => "Pelanggan Kmrcell",
    "customer_email" => "user@example.com",
    "customer_phone" => $data["nomor_hp"],
    "order_items" => [
        [
            "sku" => $data["provider"],
            "name" => $data["name"],
            "price" => $amount,
            "quantity" => 1
        ]
    ],
    "callback_url" => "https://kmrcell.store/webhook.php",
    "return_url" => "https://kmrcell.store/payment-success.html",
    "expired_time" => time() + (24 * 60 * 60),
    "signature" => hash_hmac("sha256", $merchantCode . $merchantRef . $amount, $privateKey)
];

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, "https://tripay.co.id/api/transaction/create");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($payload));
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    "Authorization: Bearer " . $apiKey,
    "Content-Type: application/json"
]);

$response = curl_exec($ch);
curl_close($ch);

echo $response;
?>
