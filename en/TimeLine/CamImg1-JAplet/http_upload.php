<?php
$uploaddir = $_SERVER["DOCUMENT_ROOT"] . '/TimeDelay/CamImg1/';
$headers = apache_request_headers();
$strData = $headers['Content-Disposition']; 
$arrayFilename = explode('"', $strData) ;
$myFile =$arrayFilename[1]; 
$fh = fopen($uploaddir.$myFile, 'w') or die("can't open file");
$data = file_get_contents("php://input"); 
fwrite($fh, "$data\t\n");
fclose($fh);
?>