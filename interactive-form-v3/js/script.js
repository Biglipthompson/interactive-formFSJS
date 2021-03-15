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
        jsPuns[i].style.display = "block";
        heartJS[i].style.display = "none";
    }
    } else if (e.target.value === "heart js") {
    for (let i = 0; i < heartJS.length; i++) {
        colorTheme[0].textContent = 'Choose a Heart color?';
        colorSelect.style.display = "block";
        heartJS[i].style.display = "block";
        jsPuns[i].style.display = "none";
    }
    }
});


















//     colorSelect.disabled = false;
//     colorTheme[0].textContent = 'Choose a color?';
//     color.value = 'Choose a color?';
//     const jsPuns = document.querySelectorAll('[value="js puns"]');
//     const heartJs = document.querySelectorAll('[value="heart js"]')
//     const jsPunsColor = document.querySelectorAll('[data-theme="js puns"]');
//     const heartJsColor = document.querySelectorAll('[data-theme="heart js"]')

//     if(e.target.value === jsPuns){
//         for (let i = 0; i < jsPunsColor.length; i++ ){
//                 jsPunsColor[i].style.display = 'block';
//                 heartJsColor[i].style.display = 'none';
//                 colorSelect.style.display = 'none';
//         }
//     }
    
//     if(e.target.value === heartJs){
//         for (let i = 0; i < heartJsColor.length; i++ ){
//                 heartJsColor[i].style.display = 'block';
//                 jsPunsColor[i].style.display = 'none';
//                 colorSelect.style.display = 'none';
//         }
//     }
// });


    // const themeSelect = e.target.value;
    // const dataAttribute = getAttribute('data-theme').colorTheme[i];
    // if ( themeSelect === dataAttribute ){
    //     color.Theme[i].hidden = false;
    //     color.Theme[i].selected = true;
    //     } else if ( themeSelect !== dataAttribute) {
    //     colorTheme[i].hidden = true;
    //     colorTheme[i].selected = false;
    //     }



