const yoda = document.querySelector("#checkbox_yoda");
const trooper = document.querySelector("#checkbox_trooper");
const vader = document.querySelector("#checkbox_vader");
const form = document.querySelector("form");

function choiceValidation() {
    if (yoda.checked == true) {
        return false
    } else if (trooper.checked == true || vader.checked == true) {
        return true
    }
}

function formValidation(e) {
    let result = choiceValidation();
    if (result == true) {
        e.preventDefault();
        alert("ok! imperial march");
    }
}

form.addEventListener("submit", formValidation);