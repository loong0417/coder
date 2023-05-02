<?php
header('content-type:text/html;charset=utf-8');
$username = $_GET['user'];
$users = array('kaivon','学辉','陈学辉');
echo $username;

if( in_array( $username , $users ) ){
	echo '用户名已经被注册了！';
}else{
	echo '用户名可以注册';
}
