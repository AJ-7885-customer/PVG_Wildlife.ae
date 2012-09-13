<?php
//By Google Analytics report by www.MavajSunCo.com
define('ga_email','photintdxb@gmail.com');
define('ga_password','foto$la$');
define('ga_profile_id','54126478');

require 'gapi.class.php';

$ga = new gapi(ga_email,ga_password);

$ga->requestReportData(ga_profile_id,array('browser','browserVersion'),array('pageviews','visits'));
?><?php // echo $ga->getTotalResults() ?><?php //echo $ga->getVisits() ?>
<table>
<tr>
  <th>Number of Visits</th>
  <td><?php echo $ga->getPageviews() ?>
</tr>
</table>