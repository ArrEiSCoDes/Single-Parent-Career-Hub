const form = document.getElementById("supportForm");

const formMessage = document.getElementById("formMessage");



form.addEventListener("submit", function(event){


event.preventDefault();



formMessage.style.display="block";


formMessage.textContent =
"Thank you for reaching out! Your request has been received. We will help connect you with resources that fit your goals and schedule.";



form.reset();



});
