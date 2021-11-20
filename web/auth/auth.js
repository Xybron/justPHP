$(document).ready(function () {
  $("#signin_form").submit(function (event) {
    event.preventDefault();
    var email = $("#signin-email").val();
    var password = $("#signin-pwd").val();
    var submit = $("#signin-submit").val();
    $(".signin-message").load("mail1.php", {
      email: email,
      password: password,
      submit: submit,
    });
  });
});

// Handles user registration
function registerUser() {
  // Get the user's data from the form
  let userData = {
    name: $("#signup-name").val(),
    email: $("#signup-email").val(),
    password: $("#signup-pwd").val(),
    password2: $("#signup-pwd2").val(),
  };

  // Make a request to the php server, sending the user data to be processed
  const request = $.ajax({
    url: "https://phpauth.herokuapp.com/auth/mailS.php",
    type: "post",
    data: userData,
    dataType: "jsonp",
    success: function (response) {
      console.log(response);
    },
    error: function (XMLHttpRequest, textStatus, errorThrown) {
      console.log(textStatus);
      console.log(errorThrown);
    },
  });
}
