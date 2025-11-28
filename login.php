<?php
session_start();
require_once 'config.php'; // loads $salt and $hash

if($_SERVER['REQUEST_METHOD'] !== 'POST'){
    header('Location: index.php');
    exit;
}

$pw = isset($_POST['password']) ? $_POST['password'] : '';

if($pw === ''){
    echo '<p>Empty password. <a href="index.php">Back</a></p>';
    exit;
}

// Server-side check: MD5(salt + password)
$check = md5($salt . $pw);

if(hash_equals($hash, $check)){
    // success
    $_SESSION['fv_logged'] = true;
    header('Location: secret.php');
    exit;
} else {
    // intentionally verbose but not leaking
    echo '<p>Incorrect password. Try again.</p>';
    echo '<p><a href="index.php">Back</a></p>';
    // optional: log attempt (disabled for CTF)
}
