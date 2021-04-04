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
    let activityCost =  parseInt(e.target.getAttribute('data-cost'));
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
const activityDiv = document.querySelector('#activities-box')
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

//Name validator
function nameValidator ()  {
    const nameFieldValue = nameField.value;
    console.log("Name value is :", `"${nameFieldValue}"`);
    const nameIsValid = /^[a-zA-Z]+ ?[a-zA-Z]*? ?[a-zA-Z]*?$/.test(nameFieldValue);
    console.log("Name validation is :", `"${nameIsValid}"`);
    return nameIsValid;
}

//Email Validator
function emailValidator ()  {
    const emailValue = emailAddress.value;
    const emailIsValid = /^[^@]+@[^@.]+\.[a-z]+$/i.test(emailValue);
    console.log(`Email validation test on "${emailValue}" evaluates to ${emailIsValid}`);
    return emailIsValid;
}

//Activity validator
function activityValidator () {
    let activityIsValid = totalCost > 0;
    console.log (`${activityIsValid}`)
    return activityIsValid;
}

// Credit Card validator
function creditCardValidator () {
    const creditCardValue = creditCard.value;
    const creditCardValid = /^\d{13,16}$/.test(creditCardValue);
    console.log (`${creditCardValid}`)
    return creditCardValid;
}

// Zip code function
function zipValidator () {
    const zipCodeValue = zipCode.value;
    const zipCodeValid = /^\d{5}$/.test(zipCodeValue);
    console.log("Name validation is :", `"${zipCodeValid}"`);
    return zipCodeValid;
}

function cvvValidator () {
    const cvvValue = cvv.value;
    const cvvNumberValid = /^\d{3}$/.test(cvvValue);
    console.log(`credit card validation test on "${cvvValue}" evaluates to ${cvvNumberValid}`)
    return cvvNumberValid;
}

//Submit form listener
formElement.addEventListener('submit', (e)  => {
e.preventDefault();
if (!nameValidator()) {
        e.preventDefault();
        nameField.parentElement.classList.add('not-valid');
        nameField.parentElement.classList.remove('valid');
        nameField.parentElement.lastElementChild.style.display = "inline";
        //console.log("Please enter a valid name.");
} else {
        nameField.parentElement.classList.add('valid');
        nameField.parentElement.classList.remove('not-valid');
        nameField.parentElement.lastElementChild.style.display = "none";
}

if (!emailValidator()) {
        e.preventDefault();
        emailAddress.parentElement.classList.add('not-valid');
        emailAddress.parentElement.classList.remove('valid');
        emailAddress.parentElement.lastElementChild.style.display = "inline";
        //console.log("Please enter a valid email address.");
} else {
        emailAddress.parentElement.classList.add('valid');
        emailAddress.parentElement.classList.remove('not-valid');
        emailAddress.parentElement.lastElementChild.style.display = "none";
}

if (!activityValidator()) {
    e.preventDefault();
    activityDiv.parentElement.classList.add('not-valid');
    activityDiv.parentElement.classList.remove('valid');
    activityDiv.parentElement.lastElementChild.style.display = "inline";
    //console.log("Please enter a valid email address.");
} else {
    activityDiv.parentElement.classList.add('valid');
    activityDiv.parentElement.classList.remove('not-valid');
    activityDiv.parentElement.lastElementChild.style.display = "none";
}

if (payment[1].selected){
if (!creditCardValidator){
        e.preventDefault();
        creditCardValid.parentElement.classList.add('not-valid');
        creditCardValid.parentElement.classList.remove('valid');
        creditCardValid.parentElement.lastElementChild.style.display = "inline";
        //console.log("Please enter a valid name.");
} else {
        creditCard.parentElement.classList.add('valid');
        creditCard.parentElement.classList.remove('not-valid');
        creditCard.parentElement.lastElementChild.style.display = "none";
}}

if (payment[1].selected){
if (!zipValidator) {
    e.preventDefault();
    zipCode.parentElement.classList.add('not-valid');
    zipCode.parentElement.classList.remove('valid');
    zipCode.parentElement.lastElementChild.style.display = "inline";
    //console.log("Please enter a valid name.");
} else {
    zipCode.parentElement.classList.add('valid');
    zipCode.parentElement.classList.remove('not-valid');
    zipCode.parentElement.lastElementChild.style.display = "none";
}}

if (payment[1].selected) {
if (!cvvValidator) {
    e.preventDefault();
    cvv.parentElement.classList.add('not-valid');
    cvv.parentElement.classList.remove('valid');
    cvv.parentElement.lastElementChild.style.display = "inline";
    //console.log("Please enter a valid name.");
} else {
    cvv.parentElement.classList.add('valid');
    cvv.parentElement.classList.remove('not-valid');
    cvv.parentElement.lastElementChild.style.display = "none";
}}
console.log('submit handler is functional');
});



// accessibility section 
const checkboxes = document.querySelectorAll("input[type = checkbox]");
for (let i = 0; i < checkboxes.length ; i++) {
    checkboxes[i].addEventListener('focus', () => {
    checkboxes[i].parentElement.classList.add('focus');
    });
checkboxes[i].addEventListener('blur', () => {
    checkboxes[i].parentElement.classList.remove('focus');
    });
}
