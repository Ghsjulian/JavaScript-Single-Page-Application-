<?php
$file = $_FILES['photo']['name'];
echo $_FILES['photo']['tmp_name'];
/*
$valid_extension = array("jpg","png","jpeg");
if (in_array($extension,$valid_extension)) {
$new_name = $session.rand().".".$extension;
$path = "images/".$new_name;
move_uploaded_file($_FILES['photo']['tmp_name'],$path)
*/

?>