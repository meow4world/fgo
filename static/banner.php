<?php
	$data = file_get_contents("http://api.umowang.com/guides/banners/fgo");
	echo $_GET['callback'].'('.$data.')';
?>