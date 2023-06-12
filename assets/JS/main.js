const email = document.querySelector(".emailClick");
email.addEventListener("click", showEmail);

let flag = false;
let paragraph;
function showEmail() {
  if (flag) {
    email.removeChild(paragraph);
    flag = false;
  } else {
    paragraph = document.createElement("p");
    paragraph.textContent = "tamara.zivkovic009@gmail.com";
    email.appendChild(paragraph);
    flag = true;
  }
}

const submit = document.querySelector(".submit");
submit.addEventListener("click", collectData);

function collectData(e) {
  e.preventDefault();

  let name = document.querySelector("#name").value;

  //   Fill in the name
  if (name.length < 2) {
    let p = document.createElement("p");
    p.textContent = "Name should contain more than 2 characters!";
    p.classList.add("red");

    if (document.querySelector("#name").parentElement.querySelector("p")) {
      document
        .querySelector("#name")
        .parentElement.removeChild(
          document.querySelector("#name").parentElement.querySelector("p")
        );
    }
    document.querySelector("#name").parentElement.appendChild(p);
    document.querySelector("#name").style.borderColor = "red";
  } else {
    if (document.querySelector("#name").parentElement.querySelector("p")) {
      document
        .querySelector("#name")
        .parentElement.removeChild(
          document.querySelector("#name").parentElement.querySelector("p")
        );
    }
    document.querySelector("#name").style.borderColor = "black";
  }

  //fill in the email
  let email = document.querySelector("#email").value;

  const emailPatern = /^[a-zA-Z0-9\._]{4,}@[\w\d-]+\.[\w\.]{2,}$/;

  if (email == "") {
    let p = document.createElement("p");
    p.textContent = "Email field can not be empty";
    p.classList.add("red");

    if (document.querySelector("#email").parentElement.querySelector("p")) {
      document
        .querySelector("#email")
        .parentElement.removeChild(
          document.querySelector("#email").parentElement.querySelector("p")
        );
    }
    document.querySelector("#email").parentElement.appendChild(p);
    document.querySelector("#email").style.borderColor = "red";
  } else if (emailPatern.test(email)) {
    if (document.querySelector("#email").parentElement.querySelector("p")) {
      document
        .querySelector("#email")
        .parentElement.removeChild(
          document.querySelector("#email").parentElement.querySelector("p")
        );
      document.querySelector("#email").style.borderColor = "black";
    }
  } else {
    let p = document.createElement("p");
    p.textContent = "Email does not match the patern";
    p.classList.add("red");

    if (document.querySelector("#email").parentElement.querySelector("p")) {
      document
        .querySelector("#email")
        .parentElement.removeChild(
          document.querySelector("#email").parentElement.querySelector("p")
        );
    }

    document.querySelector("#email").parentElement.appendChild(p);
    document.querySelector("#email").style.borderColor = "red";
  }

  //fill in the message field

  let message = document.querySelector("#message").value;
  if (message.length <= 0) {
    let p = document.createElement("p");
    p.innerHTML = "You can not send an empty message!";
    p.classList.add("red");

    if (document.querySelector("#message").parentElement.querySelector("p")) {
      document
        .querySelector("#message")
        .parentElement.removeChild(
          document.querySelector("#message").parentElement.querySelector("p")
        );
    }
    document.querySelector("#message").parentElement.appendChild(p);
    document.querySelector("#message").style.borderColor = "red";
  } else {
    if (document.querySelector("#message").parentElement.querySelector("p")) {
      document
        .querySelector("#message")
        .parentElement.removeChild(
          document.querySelector("#message").parentElement.querySelector("p")
        );
    }
    document.querySelector("#message").style.borderColor = "black";
  }
}
