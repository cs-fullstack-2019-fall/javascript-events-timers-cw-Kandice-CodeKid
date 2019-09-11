// ### Exercise 2:
// Create a simple form with a textarea, a hidden message with the text ```Start typing```, and a button that says ```Allow Typing```. When the page initially displays, the textarea should be disabled, and the message hidden. When the User clicks the button, display the hidden message, and enable the textarea so you can type into it. Clicking the button a second time should hide the hidden message and disable the textarea. Each press of the button should toggle the behavior.

let textBox =document.getElementById('text_area');
let button = document.getElementById('allow');
let can_type = false;
button.addEventListener("click", function (e) {
    // alert('button clicked');

    if (can_type!==true)
    {
        textBox.removeAttribute('disabled');
        e.preventDefault()
    }
    else if (can_type===false)
    {
        textBox.setAttribute('disabled','');
    }

   //
});
