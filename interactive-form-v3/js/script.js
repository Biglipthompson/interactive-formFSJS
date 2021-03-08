// This grabs the focus field and adds focus to it on load
const nameField = document.getElementById("name");
nameField.focus();



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
//This constant variable gets the shirt color
const shirtColor = document.getElementById('color');
//This variable gets the shirt design and disables the color
const designSelect = document.getElementById('design');
shirtColor.disabled = true;
const currentTarget = event.target.value;
const dataAttribute = document.getElementById('color').getAttribute('data-theme');

//This handler enabled the shirt color when the select field is clicked
designSelect.addEventListener('change', (event) => {
    shirtColor.disabled = false;
        for (i = 0; i < shirtColor.children.length; i++ ){
             currentTarget = event.target.value;
             dataAttribute = document.getElementById('color').getAttribute('data-theme');
             console.log(dataAttribute);

}})

// I was last watching the youtube video in the open tab about showing 
// and hiding selections and input fields based on clicks