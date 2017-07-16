<?php
header("Content-Type:application/json;charset=utf-8");
require("0_init.php");

$sql = "SELECT * FROM gm_product";
$result = mysqli_query($conn,$sql);
$row = mysqli_fetch_all($result,MYSQLI_ASSOC);
echo json_encode($row);
