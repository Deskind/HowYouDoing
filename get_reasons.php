<?php
if(isset($_POST['reason_list'])){
foreach ($_POST['reason_list'] as $reason){
    echo $reason."<br>";
}

echo 'Thank you for participation!!!<br>';

echo '<a href="index.html"><strong>Back to main page!</strong></a>';
}else {
    echo 'No reasons!!!';
}