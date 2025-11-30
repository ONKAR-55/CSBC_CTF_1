<?php
session_start();
header("Content-Type: application/json");

require_once "config.php";

$data = json_decode(file_get_contents("php://input"), true);
$password = trim($data["password"] ?? "");

if ($password === "") {
    echo json_encode(["status" => "error", "message" => "Empty"]);
    exit;
}

$check = md5($salt . $password);

if (hash_equals($hash, $check)) {
    $_SESSION["logged_in"] = true;
    echo json_encode(["status" => "ok"]);
} else {
    echo json_encode(["status" => "fail"]);
}
?>
