<?php


$con =mysqli_connect('127.0.0.1','root','','a');


if (mysqli_connect_errno()){
echo "Failed to connect to MySQL: ".mysqli_connect_error();
}



session_start();



if (isset($_POST['Email'])) {

	
	$Email_Address = $_POST['Email'];
        
        
	$Password = ($_POST['Password']);

	
	$sql = "SELECT * FROM b WHERE c='$Email_Address' AND e='$Password'";

	
	$re = mysqli_query($con, $sql);

	
	if (mysqli_num_rows($re)) 
                
                {
                echo "<p>Welcome</p>";
		
		$_SESSION['c'] = $Email_Address;
        echo '<a href="../login/login.html">Login Page</a>';
        echo"\n";
    echo '<a href="../login/signup.html">Signup Page</a>';

		
         	}

                else
                {
		
		echo "Error : Invalid Login Credentials";
	        }
}
?>





