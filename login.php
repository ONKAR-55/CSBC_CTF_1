<?php
session_start();

// Load server-side secret (salt + stored hash)
require_once 'config.php'; // must define $salt and $hash

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('Location: index.php');
    exit;
}

$pw = isset($_POST['password']) ? $_POST['password'] : '';

if ($pw === '') {
    echo '<p>Empty password. <a href="index.php">Back</a></p>';
    exit;
}

// Server-side check: md5(salt + password)
// Note: For real production use password_hash/password_verify, but for this CTF we intentionally use a fast hash.
$check = md5($salt . $pw);

// Use hash_equals to avoid timing attacks (good practice)
if (hash_equals($hash, $check)) {
    $_SESSION['fv_logged'] = true;
    header('Location: secret.php');
    exit;
} else {
    // keep message generic
    echo '<p>Incorrect password. <a href="index.php">Back</a></p>';
    exit;
}
?>
