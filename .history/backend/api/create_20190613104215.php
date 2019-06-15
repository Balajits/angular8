<?php
require 'database.php';

// Get the posted data.
$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata))
{
  // Extract the data.
  $request = json_decode($postdata);


  /* Validate.
  if(trim($request->number) === '' || (float)$request->amount < 0)
  {
    return http_response_code(400);
  }
  

   Sanitize.
  $number = mysqli_real_escape_string($con, (int)$request->number);
  $amount = mysqli_real_escape_string($con, (int)$request->amount);
  $mark3 = mysqli_real_escape_string($con, (int)$request->mark3);
  $mark4 = mysqli_real_escape_string($con, (int)$request->mark4);
  $mark5 = mysqli_real_escape_string($con, (int)$request->mark5);


  */ Create.
  $sql = "INSERT INTO `policies`(`id`,`number`,`amount`,`mark3`,`mark4`,`mark5`) VALUES (null,'{$number}','{$amount}','{$mark3}''{$mark4}''{$mark5}')";

  if(mysqli_query($con,$sql))
  {
    http_response_code(201);
    $policy = [
      'number' => $number,
      'amount' => $amount,
      'mark3' => $mark3,
      'mark4' => $mark4,
      'mark5' => $mark5,
      'id'    => mysqli_insert_id($con)
    ];
    echo json_encode($policy);
  }
  else
  {
    http_response_code(422);
  }
}