document.addEventListener("DOMContentLoaded", function () {

  const resources = [
    {
      title: "Free AI Learning Resources",
      image: "https://upload.wikimedia.org/wikipedia/commons/0/04/Coursera_logo.svg",
      description: "Explore beginner-friendly AI courses and certifications.",
      link: "https://www.coursera.org"
    },

    {
      title: "Per Scholas Technology Training",
      image: "https://www.per-scholas.org/wp-content/uploads/2023/06/per-scholas-logo.png",
      description: "Free technology training programs for IT career pathways.",
      link: "https://www.per-scholas.org"
    },

    {
      title: "Remote Work Opportunities",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/FlexJobs_logo.svg/512px-FlexJobs_logo.svg.png",
      description: "Flexible job opportunities for people balancing work and family.",
      link: "https://www.flexjobs.com"
    }
  ];


  const container = document.getElementById("resource-container");


  if (!container) {
    console.log("Resource container not found");
    return;
  }


  resources.forEach(function(resource) {

    const card = document.createElement("div");

    card.className = "resource-card";


    card.innerHTML = `
      <a href="${resource.link}" target="_blank" rel="noopener noreferrer">

        <img src="${resource.image}" alt="${resource.title}">

        <div class="resource-info">

          <h3>${resource.title}</h3>

          <p>${resource.description}</p>

        </div>

      </a>
    `;


    container.appendChild(card);

  });


  console.log("AI Spotlight loaded successfully");

});
