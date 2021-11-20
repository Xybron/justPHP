
$(document).ready(function(){
    // Handles sign up
    $("#signup_form").submit(function(event){
        event.preventDefault();
        let userData = {
            name : $("#signup-name").val(),
            email : $("#signup-email").val(),
            password : $("#signup-pwd").val(),
            password2 : $("#signup-pwd2").val(),
        }

        const request = $.ajax({
            url: "../mailS.php",
            type: "post",
            data: {userData : {name : "1"}}
        });

        console.log(userData)
        console.log(request)
        // $(".form-message").load("mailS.php",{
        //     name: name,
        //     email: email,
        //     password: password,
        //     password2: password2,
        //     submit: submit
        // });
    });

    $("#signin_form").submit(function(event){
        event.preventDefault();
        var email = $("#signin-email").val();
        var  password = $("#signin-pwd").val();
        var submit = $("#signin-submit").val();
        $(".signin-message").load("mail1.php",{
            email: email,
            password: password,
            submit: submit
        });
    });

    
    

    

});


 


// Button event listeners
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
    container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
    container.classList.remove("right-panel-active");
});
