// This grabs the focus field and adds focus to it on load
const nameField = document.getElementById("name");
nameField.focus();

//This constant variable gets the shirt color, the color select
const shirtColor = document.getElementById('color');
const colorTheme = shirtColor.children;

//This variable gets the shirt design and disables the color
const designSelect = document.getElementById('design');
shirtColor.disabled = true;

const dataAttribute = document.getElementById('color').getAttribute('data-theme');

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
    let dataAttribute = document.getElementById('color').getAttribute('data-theme');
    let themeSelect = e.target.value;
    colorTheme[0].textContent = 'Choose a color?';
    color.value = 'Choose a color?';

    for (i = 0; i < colorTheme.children; i++ ){
        //if the event target equals the data theme
    if ( themeSelect === dataAttribute ){
            dataAttribute = document.getElementById('color').getAttribute('data-theme');
            color.Theme[i].hidden = true;
            } else if( themeSelect !== dataAttribute ){
            colorTheme[i].hidden = false;
        }
    }
})

// I was last watching the youtube video in the open tab about showing 
// and hiding selections and input fields based on clicks