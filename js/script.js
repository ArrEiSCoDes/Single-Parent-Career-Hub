document.addEventListener("DOMContentLoaded", function () {

    // =========================
    // Welcome section button
    // =========================
    const startButton = document.getElementById("startButton");

    if (startButton) {
        startButton.addEventListener("click", function () {
            const resourcesSection = document.getElementById("resources");

            if (resourcesSection) {
                resourcesSection.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    }


    // =========================
    // Card hover interaction
    // =========================
    const cards = document.querySelectorAll(".card");

    cards.forEach(function (card) {
        card.addEventListener("mouseenter", function () {
            card.classList.add("active");
        });

        card.addEventListener("mouseleave", function () {
            card.classList.remove("active");
        });
    });


    // =========================
    // Community Resource Spotlight Carousel
    // =========================
    const resources = [
        {
            image: "images/technology-training.png",
            title: "Technology Training",
            description: "Build skills through free technology training, certifications, and career pathways.",
            link: "https://perscholas.org"
        },
        {
            image: "images/career-support.png",
            title: "Career Support",
            description: "Explore resume help, job preparation, and workforce development resources.",
            link: "resume.html"
        },
        {
            image: "images/housing-resources.png",
            title: "Housing Resources",
            description: "Find support programs and housing-related resources for families and parents.",
            link: "financial.html"
        },
        {
            image: "images/healthcare-benefits.png",
            title: "Healthcare & Benefits",
            description: "Connect with benefits access, healthcare navigation, and community support resources.",
            link: "financial.html"
        },
        {
            image: "images/small-business.png",
            title: "Small Business Support",
            description: "Access tools, guidance, and support for entrepreneurs building their future.",
            link: "business.html"
        }
    ];

    const resourceContainer = document.getElementById("resource-container");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");

    let currentIndex = 0;
    const cardsPerView = 3;

    function renderResources() {
        if (!resourceContainer) return;

        resourceContainer.innerHTML = "";

        for (let i = 0; i < cardsPerView; i++) {
            const resourceIndex = (currentIndex + i) % resources.length;
            const resource = resources[resourceIndex];

            const card = document.createElement("div");
            card.classList.add("resource-card");

            card.innerHTML = `
                <a href="${resource.link}" target="_blank">
                    <img src="${resource.image}" alt="${resource.title}">
                    <div class="resource-info">
                        <h3>${resource.title}</h3>
                        <p>${resource.description}</p>
                    </div>
                </a>
            `;

            resourceContainer.appendChild(card);
        }
    }

    if (nextBtn) {
        nextBtn.addEventListener("click", function () {
            currentIndex = (currentIndex + 1) % resources.length;
            renderResources();
        });
    }

    if (prevBtn) {
        prevBtn.addEventListener("click", function () {
            currentIndex = (currentIndex - 1 + resources.length) % resources.length;
            renderResources();
        });
    }

    renderResources();

});
