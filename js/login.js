$(document).ready(function () {
  //! validation for Sign Up Page
  //! Get values
  let firstName = $('.inp-value [name="First name"]');
  let surName = $('.inp-value [name="Surname"]');
  let email = $('.inp-value [name="email"]');
  let password = $('.inp-value [name="password"]');
  let birthDay = $('.birth-info [name="birth-day"]');
  let birthMonth = $('.birth-info [name="birth-month"]');
  let birthYear = $('.birth-info [name="birth-year"]');
  let gender = $('.gender-info [name="Gender"]');


  let fullName = firstName.val() + " " + surName.val();

  // Validation and localstorage
  let firstNameRegEx = /^[a-zA-Z0-9_-]{3,16}$/;
  let surNameRegEx = /^[a-zA-Z0-9_-]{3,16}$/;
  let passwordRegEx = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,16}$/;
  let emailRegEx = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})$/;

  // validation
  firstName.on("change blur", function () {
    if (firstNameRegEx.test(firstName.val())) {
      firstName.addClass("is-valid");
      firstName.removeClass("is-invalid");
    } else {
      firstName.removeClass("is-valid");
      firstName.addClass("is-invalid");
    }
  });

  surName.on("change blur", function () {
    if (surNameRegEx.test(surName.val())) {
      surName.addClass("is-valid");
      surName.removeClass("is-invalid");
    } else {
      surName.removeClass("is-valid");
      surName.addClass("is-invalid");
    }
  });

  email.on("change blur", function () {
    if (emailRegEx.test(email.val())) {
      email.addClass("is-valid");
      email.removeClass("is-invalid");
    } else {
      email.removeClass("is-valid");
      email.addClass("is-invalid");
    }
  });

  password.on("change blur", function () {
    if (passwordRegEx.test(password.val())) {
      password.addClass("is-valid");
      password.removeClass("is-invalid");
    } else {
      password.removeClass("is-valid");
      password.addClass("is-invalid");
    }
  });

  if (birthDay.val() !== "") {
    birthDay.addClass("is-valid");
    birthDay.removeClass("is-invalid");
  } else {
    birthDay.removeClass("is-valid");
    birthDay.addClass("is-invalid");
  }
  if (birthMonth.val() !== "") {
    birthMonth.addClass("is-valid");
    birthMonth.removeClass("is-invalid");
  } else {
    birthMonth.removeClass("is-valid");
    birthMonth.addClass("is-invalid");
  }
  if (birthYear.val() !== "") {
    birthYear.addClass("is-valid");
    birthYear.removeClass("is-invalid");
  } else {
    birthYear.removeClass("is-valid");
    birthYear.addClass("is-invalid");
  }

  if (gender.attr("checked")) {
    gender.addClass("is-valid");
    gender.removeClass("is-invalid");
  } else {
    gender.removeClass("is-valid");
    gender.addClass("is-invalid");
  }
  // Localstorage
  $("#myForm").on("submit", function (event) {
    window.localStorage.clear();
    if (
      firstNameRegEx.test(firstName.val()) &&
      surNameRegEx.test(surName.val()) &&
      passwordRegEx.test(password.val()) &&
      emailRegEx.test(email.val()) &&
      birthDay.val() !== "" &&
      birthMonth.val() !== "" &&
      birthYear.val() !== ""
    ) {
      window.localStorage.setItem(firstName.attr("name"), firstName.val());
      window.localStorage.setItem(surName.attr("name"), surName.val());
      window.localStorage.setItem(password.attr("name"), password.val());
      window.localStorage.setItem(email.attr("name"), email.val());
      window.localStorage.setItem(birthDay.attr("name"), birthDay.val());
      window.localStorage.setItem(birthMonth.attr("name"), birthMonth.val());
      window.localStorage.setItem(birthYear.attr("name"), birthYear.val());
      window.localStorage.setItem(gender.attr("name"), gender.val());
    } else {
      event.preventDefault();
    }

    // if (firstNameRegEx.test(firstName.val())) {
    //     window.localStorage.setItem(firstName.attr('name'),firstName.val())
    //     firstName.addClass('is-valid')
    //     firstName.removeClass('is-invalid')
    // }else{
    //     event.preventDefault();
    //     firstName.removeClass('is-valid')
    //     firstName.addClass('is-invalid')
    // }
  });

  //! Validation for Login Page
  let loginForm = $("#login-form");
  let btnLogin = $('.log-in [type="submit"]');
  let loginEmail = $(".log-in .login-email-inp");
  let loginPass = $(".log-in .login-pass-inp");

    // validation message
    let feedbackEmailValid = $('.feedbackEmail-valid');
    let feedbackEmailInValid = $('.feedbackEmail-invalid');
    let feedbackPasswordValid = $('.feedbackPssword-valid');
    let feedbackPasswordInValid = $('.feedbackPssword-invalid');

    
  loginEmail.on("change blur", function () {
    if (loginEmail.val() == localStorage.getItem(email.attr("name"))) {
      loginEmail.addClass("is-valid");
      loginEmail.removeClass("is-invalid");
      feedbackEmailValid.show();
      feedbackEmailInValid.hide();
    } else {
      loginEmail.removeClass("is-valid");
      loginEmail.addClass("is-invalid");
      feedbackEmailValid.hide();
      feedbackEmailInValid.show();
    }
  });

  loginPass.on("change blur", function () {
    if (loginPass.val() == localStorage.getItem(password.attr("name"))) {
      loginPass.addClass("is-valid");
      loginPass.removeClass("is-invalid");
      feedbackPasswordValid.show();
      feedbackPasswordInValid.hide();
    } else {
      loginPass.removeClass("is-valid");
      loginPass.addClass("is-invalid");
      feedbackPasswordValid.hide();
      feedbackPasswordInValid.show();
    }
  });

  loginForm.on("submit", function (event) {
    if (
      loginEmail.val() == localStorage.getItem(email.attr("name")) &&
      loginPass.val() == localStorage.getItem(password.attr("name"))
    ) {
      window.open("home.html");
    } else {
      event.preventDefault();
    }
  });
});
