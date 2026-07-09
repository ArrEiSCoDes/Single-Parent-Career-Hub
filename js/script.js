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
const resources = [
    {
        title: "Free Technology Training",
        description: "Explore free technology training programs, certifications, and career support opportunities.",
        link: "https://perscholas.org"
    },
    {
        title: "Career Development Resources",
        description: "Find tools to support resumes, job preparation, and professional growth.",
        link: "#"
    },
    {
        title: "Community Support Resources",
        description: "Explore organizations and programs that connect families with additional support.",
        link: "#"
    }
];

const resourceContainer = document.getElementById("resource-container");

if (resourceContainer) {

    resources.forEach(resource => {

        const card = document.createElement("div");

        card.classList.add("resource-card");

        card.innerHTML = `
            <h3>${resource.title}</h3>
            <p>${resource.description}</p>
            <a href="${resource.link}" target="_blank">
                Learn More
            </a>
        `;

        resourceContainer.appendChild(card);

    });

}
