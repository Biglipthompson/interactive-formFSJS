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

const payment =  document.querySelector('#payment');
const creditCard = document.querySelector('#credit-card');
const payPal = document.querySelector('#paypal');
const bitcoin = document.querySelector('#bitcoin');
bitcoin.hidden = true;
payPal.hidden = true;


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

//Form validation variables 
const emailAddress = document.querySelector('#email');
const cardNumber = document.querySelector('cc-num');
const zipCode = document.querySelector('zip');
const cvv = document.querySelector('cvv');
const formElement = document.querySelector('form');
const nameField = document.getElementById("name");
nameField.focus();

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
const nameValidator = () => {
    const nameFieldValue = nameField.value;
    console.log("Name value is :", `"${nameFieldValue}"`);

    const nameIsValid = /^[a-zA-Z]+ ?[a-zA-Z]*? ?[a-zA-Z]*?$/.test(nameFieldValue);

    console.log("Name validation test on" `${nameFieldValue}` `${nameIsValid}`);

    if (nameIsValid) {
        validationPass(nameFieldValue);
    } else {
        validationFail(nameFieldValue);
    }
    return nameIsValid;
}

//Email Validator
const emailValidator = () => {
    const emailValue = emailAddress.value;

    console.log("email address value is :" `${emailValue}`);

    const emailIsValid = /^[^@]+@[^@.]+\.[a-z]+$/i.test(emailValue);

    console.log(`Email validation test on "${emailValue}" evaluates to ${emailIsValid}`);

    if (emailIsValid){
        validationPass(emailValue);
    } else {
        validationFail(emailValue)
    }
    return emailIsValid;
}

//Activity validator
const activitiyValidator = () => {
    let activityIsValid = activityCost > 0;
    console.log("activity section is valid" `${activityIsValid}`)
    return activityIsValid;
}

//Submit form listener
formElement.addEventListener('submit', ()  => {
    nameValidator();
    emailValidator();
    activityIsValid();
    e.preventDefault();
})













