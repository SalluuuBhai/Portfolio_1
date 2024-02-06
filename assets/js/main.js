// SHOW MENU

const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show");
    });
  }
};

showMenu("nav_toggle", "nav_menu");

// ACTIVE & REMOVE ACTIVE
const navLink = document.querySelectorAll(".nav_link");
navLink.forEach((n) => n.classList.remove("active"));

function linkAction() {
  navLink.forEach((n) => n.classList.remove("active"));
  this.classList.add("active");

  const navMenu = document.getElementById("nav_menu");
  navMenu.classList.remove("show");
}

navLink.forEach((n) => n.addEventListener("click", linkAction));

//CONTACT SEND MAIL

const form = document.getElementById('form');
const result = document.getElementById('result');

form.addEventListener('submit', function(e) {
    const formData = new FormData(form);
    e.preventDefault();

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    result.innerHTML = "Please wait..."

    fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: json
        })
        .then(async (response) => {
            let json = await response.json();
            if (response.status == 200) {
                result.innerHTML = json.message;
            } else {
                console.log(response);
                result.innerHTML = json.message;
            }
        })
        .catch(error => {
            console.log(error);
            result.innerHTML = "Something went wrong!";
        })
        .then(function() {
            form.reset();
            setTimeout(() => {
                result.style.display = "none";
            }, 3000);
        });
});


// function sendEmail() {
//   Email.send({
//     Host: "smtp.gmail.com",
//     Username: "md.salmanfaris03@gmail.com",
//     Password: "fgbuthokduglrqse",
//     To: "md.salmanfaris03@gmail.com",
//     From: document.getElementById("email").value,
//     Subject: "New Contact From Enquiry",
//     Body: "Name : " + document.getElementById("name").value
//      + "<br> Email : " + document.getElementById("email").value
//      + "<br> Message : " + document.getElementById("message").value
//   }).then(
//       message => alert("Message Send Succesfully")
//       );
// }
