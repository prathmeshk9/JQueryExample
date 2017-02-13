<?php
 	header("Access-Control-Allow-Origin: *");
	$data = array(
		array('id' => '1','first_name' => 'krishna'),
		array('id' => '2','first_name' => 'Ram'),
		array('id' => '3','first_name' => 'Seeta'),
		array('id' => '4','first_name' => 'RamKrishna'),
		array('id' => '5','first_name' => 'Govind')
	);
	
	$array_dat = array('names'=>$data);
 
	echo json_encode($array_dat);
?>