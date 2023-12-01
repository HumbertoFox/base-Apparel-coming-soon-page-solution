const selectDivInput = document.querySelector(".div-input");
const selectInputEmail = document.getElementById("input-email");

document.getElementById("btn-email").addEventListener("click", () => {
    const checkdEmail = selectInputEmail.value;
    const insertPText = '<p class="error-message">Please provide a valid email</p>';

    if (validateEmail(checkdEmail) === true) {
        selectInputEmail.value = "";
        removeTagP();
    } else {
        removeTagP();
        selectInputEmail.classList.add("error");
        selectDivInput.insertAdjacentHTML("afterend", insertPText);
    };
});

function removeTagP() {
    const classError = selectInputEmail.classList.value;

    if (classError.includes("error")){
        selectInputEmail.classList.remove("error");
        selectDivInput.nextElementSibling.remove("error-message");
    } else {
        return;
    };
};

const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
};