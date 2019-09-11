// ### Exercise 1:
// Create a simple form with a single ```checkbox``` and the message ```DON'T CLICK THIS CHECKBOX!```. When the User tries to click checkbox, display a message, ```I TOLD YOU NOT TO CLICK THIS!!!``

let ckbx = document.getElementById('check1');
let no1 = document.getElementById('no1');

ckbx.addEventListener('click',function (e)
{
    // ckbx.setAttribute('disabled');
    no1.innerText="I TOLD YOU NOT TO CLICK THIS!!!";
    e.preventDefault();
});