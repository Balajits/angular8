<?php
require 'database.php';

// Get the posted data.
$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata))
{
  // Extract the data.
  $request = json_decode($postdata);

  

  // Update.
  $sql = "UPDATE `policies` SET `number`='$number',`amount`='$amount',`mark3`='$mark3',`mark4`='$mark4',`mark5`='$mark5' WHERE `id` = '{$id}' LIMIT 1";

  if(mysqli_query($con, $sql))
  {
    http_response_code(204);
  }
  else
  {
    return http_response_code(422);
  }
}
?>
