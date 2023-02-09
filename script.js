
/* Open login form */
document.querySelector("#login-btn").onclick = () => {
    document.querySelector(".login-form-container").classList.toggle("active");
  };
  
  document.querySelector("#close-login-form").onclick = () => {
    document.querySelector(".login-form-container").classList.remove("active");
  };
  
  let header = document.querySelector("header");
  
  window.addEventListener("scroll", () => {
    header.classList.toggle("shadow", window.scrollY > 0);
  });
  
  let menu = document.querySelector(".navbar");
  
  document.querySelector("#menu-icon").onclick = () => {
    menu.classList.toggle("active");
  };
  /* remove shadow on scroll */
  window.onscroll = () => {
    menu.classList.remove("active");
  };
  document.querySelector("#book-btn").onclick = () => {
    document.querySelector(".book-form-container").classList.toggle("active");
  };
  
  document.querySelector("#close-book-form").onclick = () => {
    document.querySelector(".book-form-container").classList.remove("active");
  };

  /* new login */
  function setFormMessage(formElement, type, message) {
    const messageElement = formElement.querySelector(".form__message");

    messageElement.textContent = message;
    messageElement.classList.remove("form__message--success", "form__message--error");
    messageElement.classList.add(`form__message--${type}`);
}

function setInputError(inputElement, message) {
    inputElement.classList.add("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = message;
}

function clearInputError(inputElement) {
    inputElement.classList.remove("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = "";
}

document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#login");
    const createAccountForm = document.querySelector("#createAccount");

    document.querySelector("#linkCreateAccount").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.add("form--hidden");
        createAccountForm.classList.remove("form--hidden");
    });

    document.querySelector("#linkLogin").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.remove("form--hidden");
        createAccountForm.classList.add("form--hidden");
    });

    loginForm.addEventListener("submit", e => {
        e.preventDefault();

        // Perform your AJAX/Fetch login

        setFormMessage(loginForm, "error", "Invalid username/password combination");
    });

    document.querySelectorAll(".form__input").forEach(inputElement => {
        inputElement.addEventListener("blur", e => {
            if (e.target.id === "signupUsername" && e.target.value.length > 0 && e.target.value.length < 10) {
                setInputError(inputElement, "Username must be at least 10 characters in length");
            }
        });

        inputElement.addEventListener("input", e => {
            clearInputError(inputElement);
        });
    });
});
/* Loader */
fadeOut();
function loader(){
    document.querySelector('.loader-container').classList.add('active');
}

function fadeOut(){
    setTimeout(loader,1000);
}

/* Reviews */

var swiper = new Swiper(".reviews-slider", {
    spaceBetween: 10,
    grabCursor:true,
    loop:true,
    centeredSlides: true,
    autoplay: {
      delay: 9500,
      disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
});