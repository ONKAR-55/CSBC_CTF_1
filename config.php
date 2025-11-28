<?php
// config.php - server-side config (normal files would be protected)
// Intentionally simple for the CTF. Instructor can change values.

$salt = 'FUTURE_2025_';
$hash = 'a48b2cf3c2ec21cf71c7f13dca5e52a5'; // md5($salt . '!W@n+F1@9')

// instructor note: do not store plaintext passwords in production.
?>