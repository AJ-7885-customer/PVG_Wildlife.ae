<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <title>Ras Al Khor Wildlife Sanctuary | Live Webcam Page</title>
    <meta http-equiv="Content-Type" content="text/html" charset="utf-8" />
    <link href="../css/style.css" rel="stylesheet" type="text/css"/>
</head>
<body >
    <div id="wrapper">
    <?php include('../includes/header.php');?>                            
    <div id="content"> <!--Content Begins -->
    	<div id="content-title">Live Webcam</div>
        <div id="content-text">

            <center>
                         <img src="../images/bg-LiveCam.png" border="0" usemap="#Map" />
  <map name="Map" id="Map">
  	<area shape="circle" coords="357,165,7" href="webcam2.php" target="_self" alt="Camera 02" />
	<area shape="circle" coords="375,152,7" href="webcam1.php" target="_self" alt="Camera 01" />
  </map>  </center>

      </div> <!--EOF Content-text -->
    </div>  <!--EOF Content -->
	<div id="navigation" ><!--Nagigation Begins -->
	<?php include('../includes/menu.php');?>
  	<div id="navigation-left"> 
	<div id="navigation-letf-title"><font class="top_title" >Live Webcam</font></div><!--EOF navigation-left-title-->
 	<div id="navigation-letf-text">
                                                <p>RAKWS has installed a network of cameras throughout the sanctuary. These cameras will enable you to virtually visit the sanctuary from the comfort of your own computer.</p>
                                                <table border="0" cellpadding="0" cellspacing="0">
                                                    <tr>
                                                        <td colspan="5" height="25" valign="top">
                                                            Choose a Camera:
                                                        </td>
                                                    </tr>
                                                    <tr >
                                                        <th style="padding:5px; font-size:13px; color:#FFFFFF;" bgcolor="#0b263d">
                                                            <a href="webcam1.php" onfocus="this.blur();">Camera 1 </a>
                                                        </th>
                                                        <td style="padding:3px;" valign="middle" bgcolor="#0b263d">
                                                            <img src="../images/arrow.gif" width="8" height="10" border="0" />
                                                        </td>
                                                        <td>&nbsp;&nbsp;&nbsp;&nbsp;</td>
                                                        <th style="padding:5px; font-size:13px; color:#FFFFFF;" bgcolor="#0b263d">
                                                            <a href="webcam2.php" onfocus="this.blur();">Camera 2 </a>
                                                        </th>
                                                        <td style="padding:3px;" valign="middle" bgcolor="#0b263d">
                                                            <img src="../images/arrow.gif" width="8" height="10" border="0" />
                                                        </td>
                                                    </tr>
                                                </table>
      </div><!--EOF navigation-left-text-->
    </div><!--EOF navigation-left-->
	<div id="navigation-right">
   	    <br/><br/><br/><br/><center><img class="logo" src="../images/wildlifeAE_logo.png" width="200" height="52" alt="Logo"  align="bottom"/></center>
	</div><!--EOF navigation-right-->
	</div>
	<!--EOF Nagigation -->
	<?php include('../includes/footer.php');?>
     </div> <!-- End #wrapper -->
     <?php include('../includes/analytics.php');?>
    </body>
</html>