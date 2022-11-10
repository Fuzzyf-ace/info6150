`use strict`;

(() => {
    const modalEl = document.querySelector(`.subscribe`);
    const openEls = document.querySelectorAll(`.card__cta`);
    const closeEl = document.querySelector(`.close`);

    const formEl = document.querySelector(`.register`);
    const emailEl = document.querySelector(`.email__input`);
    const email_confirmEl = document.querySelector(`.email-confirm__input`);
    const emailErrorEl = document.querySelector(`.email__error`);
    const email_confirmErrorEl = document.querySelector(`.email-confirm__error`);

    openEls.forEach((openEl) => {
        openEl.addEventListener(`click`, (event)=> {
            event.preventDefault();
            modalEl.showModal();
        });
    });
    
    closeEl.addEventListener(`click`, (event)=> {
        modalEl.close();
    });

    emailEl.addEventListener(`input`, (event) => {
        emailEl.classList.add(`email__input--active`);
    });

    emailEl.addEventListener(`blur`, (event) => {
        emailEl.classList.remove(`email__input--active`);
        if (!emailEl.value) {
            emailErrorEl.innerText="Email is required!";
            emailEl.classList.add(`email__input--witherror`);
        } else if (emailEl.value.indexOf("@") == -1) {
            emailErrorEl.innerText="This field be a valid email address including a @";
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

        emailEl.classList.remove(`email__input--witherror`);
        email_confirmEl.classList.remove(`email-confirm__input--witherror`);
        emailErrorEl.innerText = "";
        email_confirmErrorEl.innerText = "";
        let isValidForm = true;


        if (!emailEl.value) {
            isValidForm = false;
            emailErrorEl.innerText="Email is required!";
            emailEl.classList.add(`email__input--witherror`);
        }

        if (emailEl.value && (emailEl.value !== email_confirmEl.value)) {
            isValidForm = false;
            email_confirmErrorEl.innerText="Please make sure you input the same email!";
            email_confirmEl.classList.add(`email-confirm__input--witherror`);
        }

        if (!isValidForm) {
            event.preventDefault();
        }
    });


})();