"use strict";


(function() {
    const formEl = document.querySelector(`.register`);
    const nameEl = document.querySelector(`.name__input`);
    const emailEl = document.querySelector(`.email__input`);
    const email_confirmEl = document.querySelector(`.email-confirm__input`);
    
    const nameErrorEl = document.querySelector(`.name__error`);
    const emailErrorEl = document.querySelector(`.email__error`);
    const email_confirmErrorEl = document.querySelector(`.email-confirm__error`);
    
    nameEl.addEventListener(`blur`, (event) => {
        if (!nameEl.value) {
            nameErrorEl.classList.add(`name__error--active`);
            nameEl.classList.add(`name__input--witherror`);
        } else {
            nameErrorEl.classList.remove(`name__error--active`);
            nameEl.classList.remove(`name__input--witherror`);
        }
    });

    emailEl.addEventListener(`blur`, (event) => {
        if (!emailEl.value) {
            emailErrorEl.innerText="Email is required!";
            emailEl.classList.add(`email__input--witherror`);
        } else {
            emailErrorEl.innerText="";
            emailEl.classList.remove(`email__input--witherror`);
        }
    });

    email_confirmEl.addEventListener(`blur`, (event) => {
        if (emailEl.value && (emailEl.value !== email_confirmEl.value)) {
            email_confirmErrorEl.innerText="Please make sure you input the same email!";
            email_confirmEl.classList.add(`email-confirm__input--witherror`);
        } else {
            email_confirmErrorEl.innerText="";
            email_confirmEl.classList.remove(`email-confirm__input--witherror`);
        }
    });

    
    
    
    
    
    formEl.addEventListener(`submit`, (event) => {
        nameErrorEl.classList.remove(`name__error--active`);
        nameEl.classList.remove(`name__input--witherror`);
        emailEl.classList.remove(`email__input--witherror`);
        email_confirmEl.classList.remove(`email-confirm__input--witherror`);
        emailErrorEl.innerText = "";
        email_confirmErrorEl.innerText = "";
        let isValidForm = true;

        if (!nameEl.value) {
            isValidForm = false;
            nameErrorEl.classList.add(`name__error--active`);
            nameEl.classList.add(`name__input--witherror`);
        }

        if (!emailEl.value) {
            isValidForm = false;
            emailErrorEl.innerText="Email is required!";
            emailEl.classList.add(`email__input--witherror`);
            // emailErrorEl.classList.add(`email__error--active`);
        }

        if (emailEl.value && (emailEl.value !== email_confirmEl.value)) {
            isValidForm = false;
            // email_confirmErrorEl.classList.add(`email-confirm__error--active`);
            email_confirmErrorEl.innerText="Please make sure you input the same email!";
            email_confirmEl.classList.add(`email-confirm__input--witherror`);
        }

        if (!isValidForm) {
            event.preventDefault();
        }
    });

})();