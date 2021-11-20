// if (isset($_POST['userData'])){
//     $uu = $_POST['userData'];
//     echo $uu;
//     $name = $_POST['name'];
//     $email = $_POST['email'];
//     $password = $_POST['password'];
//     $password2 = $_POST['password2'];

//     $errorEmpty = false;
//     $errorEmail = false;
//     $errorName = false;
//     $errorPassword =false;
//     $errorValid =false;


    

//     if (empty($name) ||empty($email) || empty($password) || empty($password2) ){
//         echo "<span class='form-error'> Fill in all fields!</span>";
//         $errorEmpty = true;
//     }
//     elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)){
//         echo "<span class='form-error'>Enter Valid Email!</span>";
//         $errorEmail =true;
//     }
//     elseif ($password2 != $password){
//         echo "<span class='form-error'>Password does not match!</span>";
//     }
//     else {
         
//         $errorEmpty = false;
//         $errorEmail = false;
//         $errorPassword =false;
//     }

//     if(empty($name)){
//         $errorName = true;
//     }
//     else{
//         $errorName = false;
//     }

//     if(empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)){
//         $errorEmail = true;
//     }
//     else{
//         $errorEmail = false;
//     }

//     if(empty($password)){
//         $errorPassword = true;
//         $errorPassword2 = true;
//     }
//     elseif($password2 != $password){
//         $errorPassword = true;
//         $errorPassword2 = true;
//     }
//     else{
//         $errorPassword = false;
//         $errorPassword2 = false;
//     }

//     if(!$errorPassword && !$errorPassword2 && !$errorEmpty  && !$errorEmail && !is_numeric($name))
// 		{
//             echo "<span class='form-success'> Sign In Successful!</span>";
//             $errorValid = false;
// 			//save to database
// 			$user_id = random_num(20);
// 			$query = "insert into login_db (user_id,user_name,user_email,password) values ('$user_id','$name','$email','$password')";

// 			mysqli_query($con, $query);

// 			// header("Location:./login_signup_page.php");
//             echo "<script>
//             const signInButton = document.getElementById('signIn');
//             signInButton.click();
//             </script>
//             ";
           
// 			die;
// 		}else
// 		{
//             if(is_numeric($name)){
//                 $errorValid =true;
//                 echo "<span class='form-error'>Please enter valid information</span>";
//             }
           
// 		}

    
   
// }
//     else {
//         echo "There was an error!"; 
//     }

// ?>

// <script>
    

//     var errorEmpty = "<?php echo $errorEmpty; ?>";
//     var errorEmail = "<?php echo $errorEmail; ?>";
//     var errorName = "<?php echo $errorName; ?>";
//     var errorPassword = "<?php echo $errorPassword; ?>";
//     var errorValid = "<?php echo $errorValid; ?>";
  
//     if (errorEmpty){
//         $('#signup-name').addClass('input-error');
//         $('#signup-email').addClass('input-error');
//         $('#signup-pwd').addClass('input-error');
//         $('#signup-pwd2').addClass('input-error');
//     }
//     else{
//         $('#signup-name').removeClass('input-error');
//         $("#signup-email").removeClass("input-error");
//         $("#signup-pwd").removeClass("input-error");
//         $('#signup-pwd2').removeClass('input-error');
//     }

//     if (errorEmail){
//         $("#signup-email").addClass("input-error");
//     }
//     else{
//         $("#signup-email").removeClass("input-error");
//     }

//     if (errorPassword){
//         $('#signup-pwd').addClass('input-error');
//         $('#signup-pwd2').addClass('input-error');
//     }
//     else{
//         $("#signup-pwd").removeClass("input-error");
//         $('#signup-pwd2').removeClass('input-error');
//     }

//     if (errorName){
//         $("#signup-name").addClass("input-error");
//     }
//     else{
//         $("#signup-name").removeClass("input-error");
//     }

//     if (errorValid){
//         $("#signup-name").addClass("input-error");
//     }
//     else{
//         $("#signup-name").removeClass("input-error");
//     }

//     if (!errorEmpty && !errorEmail && !errorPassword && !errorValid){
//         $("#signup-name").val("");
//         $("#signup-pwd").val("");
//         $("#signup-email").val("");
//         $("#signup-pwd2").val("");
//     }


// </script>