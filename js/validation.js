// var form = document.getElementsByClassName("form");

// form.submit(function(evt) {
//   evt.preventDefault();
//   //   alert("Coming soon...");
// });

var email = document.getElementById("email");

email.addEventListener(
  "invalid",
  function() {
    if (email.validity.valueMissing) {
      email.setCustomValidity("Privaloma užpildyti šį lauką.");
    }
  },
  false
);

email.addEventListener(
  "input",
  function(e) {
    if (!email.validity.valid) {
      email.setCustomValidity(
        "Netinkamas elektroninio pašto adreso formatas. Pavyzdys: adresas@svetaine.lt"
      );
    }
  },
  false
);

// const signUpForm = document.getElementsByClassName("form");
// const emailField = document.getElementById("email");
// const okButton = document.getElementById("submit-button");

// emailField.addEventListener("keyup", function(event) {
//   isValidEmail = emailField.checkValidity();

//   if (isValidEmail) {
//     okButton.disabled = false;
//   } else {
//     okButton.disabled = true;
//   }
// });

// okButton.addEventListener("click", function(event) {
//   signUpForm.submit();
// });
