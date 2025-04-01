<?php
// Baca data JSON yang dikirim oleh Tripay
$json = file_get_contents("php://input");
$data = json_decode($json, true);

// Catat data webhook untuk debugging
$logFile = "tripay_webhook.log";
$logEntry = date("Y-m-d H:i:s") . " - " . json_encode($data) . "\n";
file_put_contents($logFile, $logEntry, FILE_APPEND);

// Proses notifikasi jika data valid
if ($data && isset($data["merchant_ref"]) && isset($data["status"])) {
    $merchantRef = $data["merchant_ref"];
    $status = $data["status"];
    // Contoh: Simpan status transaksi ke file (atau update database)
    $statusLog = "Ref: $merchantRef - Status: $status\n";
    file_put_contents("status_transaksi.txt", $statusLog, FILE_APPEND);
}

// Kirim respons ke Tripay
http_response_code(200);
echo json_encode(["success" => true, "message" => "Webhook received"]);
?>
