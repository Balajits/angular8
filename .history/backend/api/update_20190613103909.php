<?php
require 'database.php';

// Get the posted data.
$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata))
{
  // Extract the data.
  $request = json_decode($postdata);

  // Validate.
  if ((int)$request->id < 1 || trim($request->number) == '' || (float)$request->amount < 0) {
    return http_response_code(400);
  }

  // Sanitize.
  $id    = mysqli_real_escape_string($con, (int)$request->id);
  $number = mysqli_real_escape_string($con, trim($request->number));
  $amount = mysqli_real_escape_string($con, (float)$request->amount);
  $mark3 = mysqli_real_escape_string($con, (float)$request->mark3);
  $mark4 = mysqli_real_escape_string($con, (float)$request->mark4);
  $mark5 = mysqli_real_escape_string($con, (float)$request->mark5);

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