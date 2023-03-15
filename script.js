const register = document.querySelector(".register");
const registerForm = document.querySelector(".register-form");
const loginForm = document.querySelector(".login-form");

loginForm.style.maxHeight = "60vh";
registerForm.style.maxHeight = "0vh";
registerForm.style.padding = "0% 0%";
registerForm.style.overflow = "hidden";

register.addEventListener("click", () => {
  if (register.innerHTML == "-") {
    registerForm.style.padding = "0% 0%";
    registerForm.style.maxHeight = "0vh";
    registerForm.style.overflow = "hidden";
    register.innerHTML = "+";
  } else {
    registerForm.style.maxHeight = "70vh";
    registerForm.style.padding = "3% 3%";
    register.innerHTML = "-";
    register.style.zIndex = "9999";
  }
});

const logo = document.querySelector(".logo");
logo.addEventListener("click", () => {
  window.location.href = "../index.html";
});

const userList = [
  {
    username: "username",
    phone: "9988776655",
    password: "1234",
    cpassword: "1234",
  },
];

const validateAndRegister = () => {
  const username = document.getElementById("username");
  const phone = document.getElementById("phone");
  const password = document.getElementById("password");
  const cpassword = document.getElementById("cpassword");

  if (
    (!username.value || !phone.value || !password.value || !cpassword.value) &&
    password.value == cpassword.value
  ) {
    alert("Fields are empty!!");
  } else {
    const newObj = {
      username: username.value,
      phone: phone.value,
      password: password.value,
      cpassword: cpassword.value,
    };
    userList.push(newObj);
    alert("Registration Successfully!!");
    alert(`Your Username : ${username.value}`);
    username.value = "";
    phone.value = "";
    password.value = "";
    cpassword.value = "";
  }
};

const validateAndLogin = () => {
  const loginUsername = document.getElementById("loginUsername");
  const loginPassword = document.getElementById("loginPassword");
  if (!loginUsername.value || !loginPassword.value) {
    alert("Fields are empty!!");
  } else {
    const searchObject = (id, pass) => {
      return userList.find(
        (obj) => obj.username === id && obj.password === pass
      );
    };

    // Example usage:
    const result = searchObject(loginUsername.value, loginPassword.value);
    localStorage.setItem("result", JSON.stringify(result));
    alert("Login Successful !!");
    loginUsername.value = "";
    loginPassword.value = "";
    window.location.href = "../pages/dashboard.html";
  }
};
