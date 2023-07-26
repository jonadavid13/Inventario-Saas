<?php

$host = "localhost";
$user = "root";
$pass = "";
$db = "inventario_saas";

$conn = mysqli_connect($host, $user, $pass, $db);

if(!$conn){
    die(mysqli_error($conn));
}
// else {
//     echo 'Conectado';
// }

?>