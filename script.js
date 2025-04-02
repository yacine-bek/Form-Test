function validateForm(event) {
    event.preventDefault();
    const name = document.getElementById("name").value.trim();
    const age = document.getElementById("age").value.trim();
    const password = document.getElementById("password").value.trim();
    const confirmation = document.getElementById("confirmation").value.trim();

    valide = true;
    if (name === "") {
        document.getElementById("error-n").style.color = "red";
        document.getElementById("error-n").innerText = "* Name is required";
        document.getElementById("name").style.borderBottomColor = "#c96363";
        valid =  false;
    }

    if (password === "") {
        document.getElementById("error-p").style.color = "red";
        document.getElementById("error-p").innerText = "* Password is required";
        document.getElementById("password").style.borderBottomColor = "#c96363";
        valide = false;
    }

    if (password !== "" && password.length < 6) {
        document.getElementById("error-p").style.color = "red";
        document.getElementById("error-p").innerText = "* Password should be atleast 6 characters";
        document.getElementById("password").style.borderBottomColor = "#c96363";
        return false;
    }

    if (confirmation === "") {
        document.getElementById("error-c").style.color = "red";
        document.getElementById("error-c").innerText = "* Password confirmation is required";
        document.getElementById("confirmation").style.borderBottomColor = "#c96363";
        valide = false;
    }

    if (confirmation !== "" && confirmation !== password) {
        document.getElementById("error-c").style.color = "red";
        document.getElementById("error-c").innerText = "* Confirmation must be similar as the password";
        document.getElementById("confirmation").style.borderBottomColor = "#c96363";
        valide = false;
    }

    if (isNaN(age)) {
        document.getElementById("error-a").style.color = "red";
        document.getElementById("error-a").innerText = "* Age must be a number";
        document.getElementById("age").style.borderBottomColor = "#c96363";
        valide = false;
    }

    if (valide) {
        document.getElementById("form").submit();
    }
}










//optional....
function testPassword(idPass, idConf) {
    const password = document.getElementById("password").value.trim();
    const confirmation = document.getElementById("confirmation").value.trim();
    if (password.length >= 6) {
        document.getElementById(idPass).innerText = "✔";
        document.getElementById(idPass).style.color = "#4fb365";
        if (confirmation === password) {
            document.getElementById(idConf).innerText = "✔";
            document.getElementById(idConf).style.color = "#4fb365";
        } else {
            document.getElementById(idConf).innerText = "*";
            document.getElementById("password").style.borderBottomColor = "";
            document.getElementById(idConf).style.color = "";
        }
    } else {
        document.getElementById(idPass).innerText = "*";
        document.getElementById("password").style.borderBottomColor = "";
        document.getElementById(idPass).style.color = "";
    }
}

function inputClick(id, input) {
    const error = document.getElementById(id).innerText.trim();
    if (error !== ("*" && "✔")) {
        document.getElementById(input).style.borderBottomColor = "";
        document.getElementById(id).innerText = "";
        if (input !== "age") {
            document.getElementById(id).innerText = "*";
        }
    }
}

function testName(id, input) {
    const name = document.getElementById(input).value.trim();
    if (name != "") {
        document.getElementById(id).innerText = "✔";
        document.getElementById(id).style.color = "#4fb365";
    } else {
        document.getElementById(id).innerText = "*";
        document.getElementById(input).style.borderBottomColor = "";
        document.getElementById(id).style.color = "";
    }
}
