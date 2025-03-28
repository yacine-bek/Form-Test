function validateForm(event) {
    event.preventDefault();
    const name = document.getElementById("name").value.trim();
    const age = document.getElementById("age").value.trim();
    const password = document.getElementById("password").value.trim();
    const confirmation = document.getElementById("confirmation").value.trim();

    valide = true;
    if (name === "") {
        valide = afficher_error("error-n", "* Name is required", "name");
    }

    if (password === "") {
        valide = afficher_error(
            "error-p",
            "* Password is required",
            "password"
        );
    }

    if (password !== "" && password.length < 6) {
        valide = afficher_error(
            "error-p",
            "* Password should be atleast 6 characters",
            "password"
        );
    }

    if (confirmation === "") {
        valide = afficher_error(
            "error-c",
            "* Password confirmation is required",
            "confirmation"
        );
    }

    if (confirmation !== "" && confirmation !== password) {
        valide = afficher_error(
            "error-c",
            "* Confirmation must be similar as the password",
            "confirmation"
        );
    }

    if (isNaN(age)) {
        valide = afficher_error("error-a", "* Age must be a number", "age");
    }

    if (valide) {
        document.getElementById("form").submit();
    }
}

function afficher_error(errorId, content, input) {
    document.getElementById(errorId).style.color = "red";
    document.getElementById(errorId).innerText = content;
    document.getElementById(input).style.borderBottomColor = "#c96363";
    return false;
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
