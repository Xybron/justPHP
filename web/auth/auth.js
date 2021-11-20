// Handles user registration
function registerUser() {
  // Clear the fields off their error styles if there are any
  clearFieldErrors();

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
      // Check if the response is successful
      if (response.success) {
        // Display success message
        showSuccessMessage();

        // Wait a while and reload the page
        setTimeout(() => {
          location.reload();
        }, 500);

        return;
      }

      // else, execute error condition
      // Display an error message
      showErrorMessage();

      // Show the fields that have errors on them
      showFormError(["name", "email"]);
    },
    error: function (XMLHttpRequest, textStatus, errorThrown) {
      console.log(textStatus);
      console.log(errorThrown);

      // Display an error message
      showErrorMessage({ message: "Oops, something went wrong!" });
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
function showErrorMessage(
  tag = "#signup-message",
  message = "Kindly enter the correct values!"
) {
  // Add a failure style
  $(tag).addClass("form-error");

  // Insert message in html dom
  $(tag).html(message);
}

// Display a success message once process is successfully completed
function showSuccessMessage(
  tag = "#signup-message",
  message = "Successfully created an account!"
) {
  // Add a success style
  $(tag).addClass("form-success");

  // Insert message in html dom
  $(tag).html(message);
}

/**
 *
 * @param [*] formFields An array of field basic names. Eg. ['name', 'email']
 */
function showFormError(formFields) {
  // Holds Ids of the fields. This is added so that they can easily be changed if necessary without disrupting the flow of data
  const fieldIds = {
    name: "#signup-name",
    email: "#signup-email",
    password: "#signup-pwd",
    password2: "#signup-pwd2",
  };

  // Show the error state of each field present and reference the dom id
  formFields.forEach((field) => {
    $(fieldIds[field]).addClass("input-error");
  });
}

// Clears error styles from fields
function clearFieldErrors() {
  // Remove error class from each field
  ["#signup-name", "#signup-email", "#signup-pwd", "#signup-pwd2"].forEach(
    (field) => {
      $(field).removeClass("input-error");
    }
  );
}
