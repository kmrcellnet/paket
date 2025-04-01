<?php
$apiKey = "5MaqJxWAtyaewIDz3W0BeT2tO91Bux1ytkH49Gpc"; // Ganti dengan API Key Tripay Anda
$baseURL = "https://kmrcell.store/e-wallet/"; // URL lokasi folder ikon

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, "https://tripay.co.id/api/merchant/payment-channel");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch, CURLOPT_HTTPHEADER, ["Authorization: Bearer " . $apiKey]);

$response = curl_exec($ch);
curl_close($ch);

$data = json_decode($response, true);

// Ubah ikon default ke ikon yang ada di folder e-wallet
if ($data["success"]) {
    foreach ($data["data"] as $key => $payment) {
        $customIcon = $baseURL . strtolower($payment["code"]) . ".png";
        $data["data"][$key]["icon"] = $customIcon;
    }
}

echo json_encode($data);
?>
