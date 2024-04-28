const initialPass = document.getElementById("user_password");
const confirmPass = document.getElementById("user_confirmpass");
let mismatchPass = null;
const passContainer = initialPass.parentElement;

confirmPass.addEventListener('blur', function() {
    if (initialPass.value !== confirmPass.value && confirmPass.value.length > 1) {
        if (!mismatchPass) {
            mismatchPass = document.createElement("p");
            mismatchPass.id = "error-message";
            mismatchPass.style = "font-size: 0.8em; margin-left:0; display: inline-block; position:relative"
            mismatchPass.style.bottom = `${confirmPass.offsetHeight - 30}px`;
            passContainer.appendChild(mismatchPass);
            initialPass.style.borderColor = "red";
            confirmPass.style.borderColor ="red";
        }
        mismatchPass.textContent = "*Passwords do not match";
    } else if (mismatchPass) {
        // If the passwords do match and the error message exists, remove it
        mismatchPass.remove();
        mismatchPass = null; // Set mismatchPass to null after removing it
        initialPass.style.borderColor = "rgb(227, 225, 225)";
        confirmPass.style.borderColor ="rgb(227, 225, 225)";
    }

});
// Use the value property to get the values entered by the user
