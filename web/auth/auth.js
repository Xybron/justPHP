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
    data: { userData },

    success: function (response) {
      console.log(response);
    },
    error: function (XMLHttpRequest, textStatus, errorThrown) {
      console.log(textStatus);
      console.log(errorThrown);
    },
  });
}

// Handles signing in user
function loginUser() {
  const userData = {
    email: $("#signin-email").val(),
    password: $("#signin-pwd").val(),
  };

  // Make a request to the php server, sending the user data to be processed
  const request = $.ajax({
    url: "https://phpauth.herokuapp.com/auth/mailS.php",
    type: "post",
    data: { userData },

    success: function (response) {
      console.log(response);
    },
    error: function (XMLHttpRequest, textStatus, errorThrown) {
      console.log(textStatus);
      console.log(errorThrown);
    },
  });
}

// Display an error message once the process fails
function showErrorMessage() {}

// Display a success message once process is successfully completed
function showSuccessMessage() {}
