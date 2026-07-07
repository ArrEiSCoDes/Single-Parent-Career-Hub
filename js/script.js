document.addEventListener("DOMContentLoaded", function () {

    // Welcome message
    const welcomeMessage = document.getElementById("welcomeMessage");

    if (welcomeMessage) {

        setTimeout(function () {

            welcomeMessage.classList.add("show");

        }, 500);

    }


    // Start Exploring Resources button
    const startButton = document.getElementById("startButton");

    if (startButton) {

        startButton.addEventListener("click", function () {

            const resources = document.getElementById("resources");

            if (resources) {

                resources.scrollIntoView({
                    behavior: "smooth"
                });

            }

        });

    }


    // Resource card hover interaction
    const cards = document.querySelectorAll(".card");

    cards.forEach(function(card) {

        card.addEventListener("mouseenter", function() {

            card.classList.add("active");

        });


        card.addEventListener("mouseleave", function() {

            card.classList.remove("active");

        });

    });


});
