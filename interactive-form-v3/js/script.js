// This grabs the focus field and adds focus to it on load
const nameField = document.getElementById("name");
nameField.focus();

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

bitcoin.hidden = true;
payPal.hidden = true;











