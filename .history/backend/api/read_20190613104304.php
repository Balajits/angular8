<?php
/**
 * Returns the list of policies.
 */
require 'database.php';

$policies = [];
$sql = "SELECT id, number, amount, mark3, mark4, mark5 FROM policies";

if($result = mysqli_query($con,$sql))
{
  $i = 0;
  while($row = mysqli_fetch_assoc($result))
  {
    $policies[$i]['id']    = $row['id'];
    $policies[$i]['number'] = $row['number'];
    $policies[$i]['amount'] = $row['amount'];
    $policies[$i]['mark3'] = $row['mark3'];
    $policies[$i]['mark4'] = $row['mark4'];
    $policies[$i]['mark5'] = $row['mark5'];
    $i++;
  }

  echo json_encode($policies);
}
else
{
  http_response_code(404);
}