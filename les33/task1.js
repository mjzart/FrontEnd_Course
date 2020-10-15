// const num1 = Number(document.querySelectorAll('[type="text"]')[0].value);
// const num2 = Number(document.querySelectorAll('[type="text"]')[1].value);
const div = document.getElementsByClassName("result")[0];
const form = document.querySelectorAll('form')[0]

let result;

 form.addEventListener('submit', event => {
    event.preventDefault();
    const num1 = Number(document.querySelectorAll('[type="text"]')[0].value);
    const num2 = Number(document.querySelectorAll('[type="text"]')[1].value);
    const select = document.querySelectorAll('select')[0]
    switch (select.value) {
        case "multiply":
            result  = num1*num2;
            break;
        case "add":
            result  = num1+num2;
            break;
        default:
            result = 'Choise something!'
            break;
    }
    
    div.innerHTML = result;
})