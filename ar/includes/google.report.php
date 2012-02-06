<?php
//By Google Analytics report by www.MavajSunCo.com
define('ga_email','photintdxb@gmail.com');
define('ga_password','la$foto$');
define('ga_profile_id','54126478');

require 'gapi.class.php';

$ga = new gapi(ga_email,ga_password);

$ga->requestReportData(ga_profile_id,array('browser','browserVersion'),array('pageviews','visits'));
?><?php // echo $ga->getTotalResults() ?><?php //echo $ga->getVisits() ?>
<table>
<tr>
  <th>عدد الزيارات</th>
  <td><?php echo $ga->getPageviews() ?>
</tr>
</table>