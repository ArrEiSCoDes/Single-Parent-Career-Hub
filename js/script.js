const resources = [
  {
    title: "Free AI Learning Resources",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/04/Coursera_logo.svg",
    description:
      "Explore beginner-friendly AI courses and career skills that can help parents build new opportunities.",
    info:
      "AI can help identify learning pathways based on your goals, schedule, and career interests.",
    link: "https://www.coursera.org"
  },

  {
    title: "Per Scholas Technology Training",
    image: "https://www.per-scholas.org/wp-content/uploads/2023/06/per-scholas-logo.png",
    description:
      "Free technology training programs that help learners enter IT careers.",
    info:
      "Provides career training, professional development, and employer connections for technology careers.",
    link: "https://www.per-scholas.org"
  },

  {
    title: "Remote Work Opportunities",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/FlexJobs_logo.svg/512px-FlexJobs_logo.svg.png",
    description:
      "Find flexible jobs designed for people balancing work and family responsibilities.",
    info:
      "Remote and flexible job options can help parents find employment that fits their schedules.",
    link: "https://www.flexjobs.com"
  }
];


const container = document.getElementById("resource-container");


if (container) {

  resources.forEach(resource => {

    const card = document.createElement("div");

    card.className = "resource-card";

    card.innerHTML = `

      <div class="resource-image-container">

        <img 
          src="${resource.image}" 
          alt="${resource.title}"
          class="resource-image"
        >

      </div>


      <h3>${resource.title}</h3>


      <p>
        ${resource.description}
      </p>


      <div class="info-popup">

        <strong>AI Summary:</strong>

        <p>
          ${resource.info}
        </p>

      </div>


      <a 
        href="${resource.link}" 
        target="_blank"
        rel="noopener noreferrer"
        class="resource-link"
      >
        Visit Resource →
      </a>

    `;


    container.appendChild(card);

  });

}
