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

// I was last watching the youtube video in the open tab about showing 
// and hiding selections and input fields based on clicks