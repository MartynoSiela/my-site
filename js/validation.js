// var form = document.getElementsByClassName("form");

// form.submit(function(evt) {
//   evt.preventDefault();
//   //   alert("Coming soon...");
// });

var email = document.getElementById("email");
var psw = document.getElementById("password");
var pswRepeat = document.getElementById("password-repeat");
var consent = document.getElementById("consent");

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

psw.addEventListener(
  "invalid",
  function() {
    if (psw.validity.valueMissing) {
      psw.setCustomValidity("Privaloma užpildyti šį lauką.");
    }
  },
  false
);

psw.addEventListener(
  "input",
  function(e) {
    if (!psw.validity.valid) {
      psw.setCustomValidity(
        "Slaptažodis turi būti: bent 8 simbolių ilgio, turėti bent po vieną iš skaičių, didžiųjų ir mažųjų raidžių."
      );
    }
  },
  false
);

pswRepeat.addEventListener(
  "invalid",
  function() {
    if (pswRepeat.validity.valueMissing) {
      pswRepeat.setCustomValidity("Privaloma užpildyti šį lauką.");
    }
  },
  false
);

pswRepeat.addEventListener(
  "input",
  function(e) {
    if (!pswRepeat.validity.valid) {
      pswRepeat.setCustomValidity(
        "Slaptažodis turi būti: bent 8 simbolių ilgio, turėti bent po vieną iš skaičių, didžiųjų ir mažųjų raidžių."
      );
    }
  },
  false
);

consent.addEventListener(
  "invalid",
  function() {
    if (consent.validity.valueMissing) {
      consent.setCustomValidity(
        "Privaloma pažymėti, kad sutinkate su taisyklėmis."
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
