<?php
session_start();
if(!isset($_SESSION['fv_logged']) || $_SESSION['fv_logged'] !== true){
    header('Location: index.php');
    exit;
}
?>
<!doctype html>
<html>
<head><meta charset="utf-8"><title>Your Future</title></head>
<body>
  <h1>Your Future Awaits</h1>
  <p>Congratulations. You have revealed the future.</p>
  <pre>FLAG: flag{future_is_revealed_2025}</pre>
</body>
</html>
