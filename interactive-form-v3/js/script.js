// This grabs the focus field and adds focus to it on load
const nameField = document.getElementById("name");
nameField.focus();



//This constant variable gets the shirt color, the color select
const shirtColor = document.getElementById('color');
const colorTheme = shirtColor.children;

//This variable gets the shirt design and disables the color
const designSelect = document.getElementById('design');
shirtColor.disabled = true;


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

//This handler enabled the shirt color when the select field is clicked
designSelect.addEventListener('change', (e) => {

    shirtColor.disabled = false;

    colorTheme[0].textContent = 'Choose a color?';
    color.value = 'Choose a color?';

for (let i = 0; i < colorTheme; i++ ){
    const themeSelect = e.target.value;
    const dataAttribute = colorTheme[i].getAttribute('data-theme');

    //if the event target equals the data theme

    if ( themeSelect === dataAttribute ){
 
        color.Theme[i].hidden = false;
        color.Theme[i].selected = true;

        } else if ( themeSelect !== dataAttribute) {

        colorTheme[i].hidden = true;
        colorTheme[i].selected = false;

        }
    }
});

