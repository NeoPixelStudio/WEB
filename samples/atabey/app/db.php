<?php
$db = new mysqli('localhost','root', 'atabey', 'atabey');

if ($db->connect_error) {
    echo $error -> $db->connect_error;
}
?>