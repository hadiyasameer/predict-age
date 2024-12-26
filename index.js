const form = document.getElementById("feedbackform");
const button = document.getElementById("button");
let urname = document.getElementById("name");
let email = document.getElementById("email");
let nameValidate = document.getElementById("nameval");
let emailValidate = document.getElementById("emailval");
let thankstext = document.getElementById("thanks");
form.addEventListener('submit', function validate(event) {
    event.preventDefault();

    let isValid = true;

    if (name.value.trim() === "") {
        nameValidate.textContent = "*Name is required";
        name.focus();
        isValid = false;
    }
    else {
        console.log(name.value)
        nameValidate.textContent = "";
    }
    if (email.value.trim() === "") {
        emailValidate.textContent = "*Valid email is required!";
        email.focus();
        isValid = false;
    }
    else {
        let emailRegex = /^[^@]+@[^@]+\.[^@]+$/
        if (!emailRegex.test(email.value.trim())) {
            emailvalidate.textContent = "*Valid email is required!";
            email.focus();
            isValid = false;
        }
        else {
            console.log(email.value)
            emailValidate.textContent = "";
        }
    }

    // if (isValid) {
    //     // thankstext.innerHTML = name.value + ", Your Predicted age is" + age;
    //     name.value = "";
    //     email.value = "";
    // }
})

form.addEventListener('submit', async function fetchData() {
    const name = document.getElementById("name").value.toLowerCase();
    const agelabel = document.getElementById("age");

    try {

        const yourResponse = await fetch('https://api.agify.io?name=' + name);
        const ages = await yourResponse.json();
        const urage = ages.age;
        agelabel.innerHTML = name + ", Your Predicted age is " + urage;
        console.log(urage);
        urname.value="";
        email.value = "";
        return urage;
    }
    catch {
        thankstext.innerHTML = "ERROR!"
        console.log("error")
    }

})