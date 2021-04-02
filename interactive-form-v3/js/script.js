//Shirt color variable
const colorSelect = document.querySelector("#color");
//Color theme variable
const colorTheme = colorSelect.children;

//Shirt design variable and disableds it on page load
const designSelect = document.querySelector("#design");
colorSelect.disabled = true;

//This const grabs the field and hides it when the page loads
const otherField = document.getElementById('other-job-role');
otherField.hidden = true;

//This const grabs the title select element
const titleSelect = document.getElementById('title');

//Job title select handler
titleSelect.addEventListener('change', (e) => {
 if (e.target.value === 'other'){
    otherField.style.display = 'block';
    } else {
    otherField.style.display = 'none';
    }
})

//Design select event listener
designSelect.addEventListener('change', (e) => {
    const jsPuns = document.querySelectorAll('[data-theme="js puns"]');
    const heartJS = document.querySelectorAll('[data-theme="heart js"]');
    const colorSelect = document.querySelector("#color");
    colorTheme[0].textContent = 'Choose a color?';
    colorSelect.disabled = false;

    if (e.target.value === "js puns") {
    for (let i = 0; i < jsPuns.length; i++) {
        colorTheme[0].textContent = 'Choose a JS color?';
        colorSelect.style.display = "block";
        jsPuns[i].hidden = false;
        heartJS[i].selected = false;
        heartJS[i].hidden = true;
    }
    } else if (e.target.value === "heart js") {
    for (let i = 0; i < heartJS.length; i++) {
        colorTheme[0].textContent = 'Choose a Heart color?';
        colorSelect.style.display = "block";
        heartJS[i].hidden = false;
        jsPuns[i].hidden = true;
        jsPuns[i].selected = false;
        }
    }
});

//Fieldset variable
const registerForAct = document.querySelector('#activities');
//Item cost variable
const itemCost = document.querySelector('#activities-cost');
//This will be the total cost variable
let totalCost = 0;
//Event listener that checks and adds prices to the total price.
registerForAct.addEventListener('change', (e) => {
    const activityCost =  parseInt(e.target.getAttribute('data-cost'));
    if (e.target.checked){
        totalCost += activityCost;
    }
    else {
        totalCost -= activityCost;
    }
    itemCost.innerHTML = `Total: ${totalCost}`;
});

//Payment Options
const payment =  document.querySelector('#payment');
const creditCard = document.querySelector('#credit-card');
const payPal = document.querySelector('#paypal');
const bitcoin = document.querySelector('#bitcoin');
bitcoin.hidden = true;
payPal.hidden = true;
//Form validation variables 
const emailAddress = document.querySelector('#email');
const cardNumber = document.querySelector('#cc-num');
const zipCode = document.querySelector('#zip');
const cvv = document.querySelector('#cvv');
const formElement = document.querySelector('form');
const nameField = document.getElementById("name");
nameField.focus();

//Payment option listeners and conditionals
 payment.addEventListener('change', (e) => {
    bitcoin.hidden = false;
    payPal.hidden = false;
    if (e.target.value == 'credit-card'){
        creditCard.hidden = false;
        payPal.hidden = true;
        bitcoin.hidden = true;
    }
    else if (e.target.value == 'paypal') {
        payPal.hidden = false;
        creditCard.hidden = true;
        bitcoin.hidden = true; 
    }
    else if ( e.target.value == 'bitcoin'){
        bitcoin.hidden = false;
        payPal.hidden = true;
        creditCard.hidden = true;
    }
});

//Function validation for PASS
function validationPass(element) {
    element.parentElement.className.add("valid");
    element.parentElement.className.remove("not-valid");
    element.parentElement.lastElementChild.hidden = true;
    console.log("You Pass!");
  }
  
//function validation for FAIL
  function validationFail(element) {
    element.parentElement.className.add("not-valid");
    element.parentElement.className.remove("valid");
    element.parentElement.lastElementChild.hidden = false;
    console.log("You Fail!");
  }

//Name validator
function nameValidator ()  {
    const nameFieldValue = nameField.value;
    console.log("Name value is :", `"${nameFieldValue}"`);
    const nameIsValid = /^[a-zA-Z]+ ?[a-zA-Z]*? ?[a-zA-Z]*?$/.test(nameFieldValue);
    console.log("Name validation test on" `${nameFieldValue}` `${nameIsValid}`);
    if (nameIsValid) {
        validationPass(nameField);
    } else {
        validationFail(nameField);
    }
    return nameIsValid;
}

//Email Validator
function emailValidator ()  {
    const emailValue = emailAddress.value;
    const emailIsValid = /^[^@]+@[^@.]+\.[a-z]+$/i.test(emailValue);
    console.log(`Email validation test on "${emailValue}" evaluates to ${emailIsValid}`);

    if (emailIsValid){
        validationPass(emailAddress);
    } else {
        validationFail(emailAddress);
    }
    return emailIsValid;
}

//Activity validator
function activitiyValidator () {
    let activityIsValid = activityCost > 0;
    if (activityIsValid) {
        registerForAct.classList.add("valid");
        registerForAct.classList.remove("not-valid");
        registerForAct.lastElementChild.hidden = true;
      } else {
        registerForAct.classList.add("not-valid");
        registerForAct.classList.remove("valid");
        registerForAct.lastElementChild.hidden = false;
      }
    return activityIsValid;
}

// Credit Card validator
function creditCardValidator () {
    if (!creditCard.hidden) {
     const creditCardValue = creditCard.value;
     const creditCardValid = /^\d{13,16}$/.test(creditCardValue);
     if (creditCardValid) {
            validationPass (cardNumber)
        } else {
            validationFail(cardNumber);
        }
        return cardNumber;
    }
}
// Zip code function
function zipValidator () {
    if (!creditCard.hidden) {
        const zipCodeValue = zipCode.value;
        const zipCodeValid = /^\d{5}$/.test(zipCodeValue);
        console.log(
        `credit card validation test on "${zipCodeValue}" evaluates to ${zipCodeValid}`
    );
    if (zipCodeValid) {
        validationPass(zipCode);
        } else {
        validationFail(zipCode);
        }
        return zipCodeValid;
    }
}

function cvvValidator () {
    if (!creditCard.hidden) {
    const cvvValue = cvv.value;
    const cvvNumberValid = /^\d{3}$/.test(cvvValue);
    console.log(
        `credit card validation test on "${cvvValue}" evaluates to ${cvvNumberValid}`
      );
      if (cvvNumberValid) {
        validationPass(cvv);
      } else {
        validationFail(cvv);
      }
      return cvvNumberValid;
    }
}

//Submit form listener
formElement.addEventListener('submit', ()  => {
    if (!nameValidator()) {
        e.preventDefault();
    }
    if (!emailValidator())
        e.preventDefault();

    if (!activitiyValidator) {
    e.preventDefault();
    } 

    if (!creditCardValidator)
    e.preventDefault();

    if (!zipValidator) {
    e.preventDefault();
    }

    if (!cvvValidator) {
    e.preventDefault();
    }
console.log('submit handler is functional');
});

// accessibility section 
const checkboxes = document.querySelectorAll("input[type = checkbox]");
for (let i = 0; i < checkboxes.length ; i+= 1) {
    checkboxes[i].addEventListener('focus', () => {
        checkboxes[i].parentElement.classList.add('focus');
    });
checkboxes[i].addEventListener('blur', () => {
    checkboxes[i].parentElement.classList.remove('focus');
    });
}
