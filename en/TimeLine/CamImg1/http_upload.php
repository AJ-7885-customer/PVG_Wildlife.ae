<html>
<header>
</header>
<script type="text/javascript">

  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-27824381-2']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();

</script>
<body>
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
</body>
</html>