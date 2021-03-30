//This constant variable gets the shirt color, the color select
const colorSelect = document.querySelector("#color");
const colorTheme = colorSelect.children;

//This variable gets the shirt design and disables the color
const designSelect = document.querySelector("#design");
colorSelect.disabled = true;

//This const grabs the field and hides it when the page loads
//This const grabs the select element
const otherField = document.getElementById('other-job-role');
const titleSelect = document.getElementById('title');
otherField.hidden = true;

//Form validation variables for the last section
const emailAddress = document.querySelector('#email');
const cardNumber = document.querySelector('cc-num');
const zipCode = document.querySelector('zip');
const cvv = document.querySelector('cvv');
const formElement = document.forms[0];
const nameField = document.getElementById("name");
const nameFieldValue = nameField.value;
nameField.focus();

//This handler is going to be a click handler for the select element
titleSelect.addEventListener('change', (e) => {
 if (e.target.value === 'other'){
    otherField.style.display = 'block';
    } else {
    otherField.style.display = 'none';
    }
})

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
// let paymentSelected = payment.children[2].selected;

bitcoin.hidden = true;
payPal.hidden = true;

// payment.children[1].selected = true;
// payment.setAttribute('selected', 'selected').children[1];
//paymentSelected.setAttribute('selected', '');
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

function nameValidator () {

    // return /^[a-zA-Z ]+$/.test(nameField);
    // e.preventDefault();
}


const emailValidator = (emailAddress) => {
 return /^[^@]+@[^@.]+\.[a-z]+$/i.test(emailAddress);
}

formElement.addEventListener('submit', () => {
    nameValidator();
    // emailValidator();
    e.preventDefault();

})













