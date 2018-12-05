var email = document.getElementById("email");
var psw = document.getElementById("password");
var pswRepeat = document.getElementById("password-repeat");
var consent = document.getElementById("consent");
var sex = document.getElementById("sex");
var userName = document.getElementById("name");
var surname = document.getElementById("surname");
var street = document.getElementById("street");
var house = document.getElementById("house");
var postal = document.getElementById("postal");
var city = document.getElementById("city");
var country = document.getElementById("country");
var phone = document.getElementById("phone");
var info = document.getElementById("info");

var emailEmptyMessage = "Privaloma užpildyti šį lauką.";
var passwordEmptyMessage = "Privaloma įvesti slaptažodį.";
var consentEmptyMessage = "Privaloma pažymėti, kad sutinkate su taisyklėmis.";
var sexEmptyMessage = "Privaloma pasirinkti lytį.";
var userNameEmptyMessage = "Privaloma įvesti savo vardą.";
var surnameEmptyMessage = "Privaloma įvesti savo pavardę.";
var streetEmptyMessage = "Privaloma įvesti gatvės pavadinimą.";
var houseEmptyMessage = "Privaloma įvesti namo numerį.";
var postalEmptyMessage = "Privaloma įvesti pašto kodą.";
var cityEmptyMessage = "Privaloma įvesti miestą.";
var countryEmptyMessage = "Privaloma pasirinkti šalį.";
var phoneEmptyMessage = "Privaloma įvesti telefono numerį.";

var emailWrongMessage =
  "Netinkamas elektroninio pašto adreso formatas. Pavyzdys: adresas@svetaine.lt";
var passwordWrongMessage =
  "Slaptažodis turi būti: bent 8 simbolių ilgio, turėti bent po vieną iš skaičių, didžiųjų ir mažųjų raidžių.";
var userNameWrongMessage = "Vardui galima naudoti tik raides.";
var surnameWrongMessage = "Pavardei galima naudoti tik raides.";
var postalWrongMessage = "Pašto kodą sudaro bent 5 skaitmenys.";
var phoneWrongMessage =
  "Prašome įvesti telefono numerį pagal pateiktą formatą: +37060012345";

function validateWrong(element, messageWrong) {
  element.addEventListener(
    "input",
    function(e) {
      if (!element.validity.valid) {
        element.setCustomValidity(messageWrong);
      }
    },
    false
  );
}

function validateMissing(element, messageEmpty) {
  element.addEventListener(
    "invalid",
    function() {
      if (element.validity.valueMissing) {
        element.setCustomValidity(messageEmpty);
      }
    },
    false
  );
}

function validatePasswordMatch() {
  validate(pswRepeat, passwordEmptyMessage, passwordWrongMessage);
  pswRepeat.addEventListener("input", function(e) {
    if (psw.value != pswRepeat.value) {
      pswRepeat.setCustomValidity("Slaptažodžiai nesutampa");
    }
  });
}

function validate(element, messageEmpty, messageWrong) {
  validateMissing(element, messageEmpty);
  validateWrong(element, messageWrong);
}

validate(email, emailEmptyMessage, emailWrongMessage);
validate(psw, passwordEmptyMessage, passwordWrongMessage);
// validate(pswRepeat, passwordEmptyMessage, passwordWrongMessage);
validatePasswordMatch();
validateMissing(consent, consentEmptyMessage);
validateMissing(sex, sexEmptyMessage);
validate(userName, userNameEmptyMessage, userNameWrongMessage);
validate(surname, surnameEmptyMessage, surnameWrongMessage);
validateMissing(street, streetEmptyMessage);
validateMissing(house, houseEmptyMessage);
validate(postal, postalEmptyMessage, postalWrongMessage);
validateMissing(country, countryEmptyMessage);
validateMissing(city, cityEmptyMessage);
validate(phone, phoneEmptyMessage, phoneWrongMessage);

function submitFunction() {
  let alert_string = "";
  alert_string = alert_string + "elektroninis paštas: " + email.value + "\n";
  alert_string = alert_string + "lytis :" + sex.value + "\n";
  alert_string = alert_string + "vardas :" + userName.value + "\n";
  alert_string = alert_string + "pavardė :" + surname.value + "\n";
  alert_string = alert_string + "gatvė :" + street.value + "\n";
  alert_string = alert_string + "namo numeris :" + house.value + "\n";
  alert_string = alert_string + "pašto kodas :" + postal.value + "\n";
  alert_string = alert_string + "miestas :" + city.value + "\n";
  alert_string = alert_string + "šalis :" + country.value + "\n";
  alert_string = alert_string + "telefono numeris :" + phone.value + "\n";
  alert_string = alert_string + "papildoma informacija :" + info.value + "\n";
  alert(alert_string);
}

shit = document.getElementById("output");
shit = $("#output");
