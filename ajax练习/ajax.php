<?php  
    $uname = $_GET['username'];
    $pwd = $_GET['password'];
    if ($uname == 'yuhang' && $pwd == 'dsb') {
        echo 1;
    }else {
        echo 'hello sb';
    }

?>