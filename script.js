function toggleMenu() {
  document.querySelector(".nav").classList.toggle("show");
}

function sendMessage(event) {
  event.preventDefault();

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;

  alert(
    "Thank you " + name + "! Your message has been received.\n\n" +
    "Email: " + email + "\n" +
    "Message: " + message
  );

  document.querySelector(".contact-form").reset();
}