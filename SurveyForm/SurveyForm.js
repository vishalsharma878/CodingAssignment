document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("surveyForm");
    const popup = document.getElementById("popup");
    const reset = document.getElementById('reset-button');
    const closePopupButton = document.querySelector(".close");
    const popupValues = {
        firstName: document.getElementById("popupFirstName"),
        lastName: document.getElementById("popupLastName"),
        dob: document.getElementById("popupDob"),
        country: document.getElementById("popupCountry"),
        gender: document.getElementById("popupGender"),
        profession: document.getElementById("popupProfession"),
        email: document.getElementById("popupEmail"),
        mobile: document.getElementById("popupMobile"),
    };

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        displayPopup();
    });
    
    reset.addEventListener('click', () => {
        form.reset();
    })

    closePopupButton.addEventListener("click", function () {
        closePopup();
        form.reset();
    
    });

    function displayPopup() {
        popupValues.firstName.textContent = document.getElementById("firstName").value;
        popupValues.lastName.textContent = document.getElementById("lastName").value;
        popupValues.dob.textContent = document.getElementById("dob").value;
        popupValues.country.textContent = document.getElementById("country").value;
    
        const genderElements = document.querySelectorAll("input[name='gender']:checked");
        const selectedGenders = Array.from(genderElements).map(gender => gender.value);
        popupValues.gender.textContent = selectedGenders.join(', ');
    
        popupValues.profession.textContent = document.getElementById("profession").value;
        popupValues.email.textContent = document.getElementById("email").value;
        popupValues.mobile.textContent = document.getElementById("mobile").value;
    
        popup.style.display = "block";
    }

    function closePopup() {
      popup.style.display = "none";
    }
    
});
