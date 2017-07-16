<?php
header("Content-Type:text/plian");
@$uname = $_REQUEST["uname"] or die("uname require");
@$upwd = $_REQUEST["upwd"] or die("upwd require");
require("0_init.php");
$sql = "INSERT INTO gm_user VALUES(NULL,'$uname','$upwd')";
$result = mysqli_query($conn,$sql);