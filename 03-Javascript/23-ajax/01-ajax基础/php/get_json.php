<?php
header('content-type:text/html;charset=utf-8');
$username = $_GET['user'];

$users = array('kaivon','学辉','陈学辉');
if( in_array( $username , $users ) ){
	echo '{"code": 1, "msg": "用户名已经被注册了！"}';
}else{
	echo '{"code": 0, "msg": "用户名可以注册！"}';
}
?>