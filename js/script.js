const resources = [
  {
    title: "Free AI Learning Resources",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/04/Coursera_logo.svg",
    description:
      "Explore beginner-friendly AI courses, certifications, and career skills.",
    link: "https://www.coursera.org"
  },

  {
    title: "Per Scholas Technology Training",
    image: "https://www.per-scholas.org/wp-content/uploads/2023/06/per-scholas-logo.png",
    description:
      "Free technology training programs that help learners prepare for IT careers.",
    link: "https://www.per-scholas.org"
  },

  {
    title: "Remote Work Opportunities",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/FlexJobs_logo.svg/512px-FlexJobs_logo.svg.png",
    description:
      "Flexible job opportunities for parents balancing work and family responsibilities.",
    link: "https://www.flexjobs.com"
  },

  {
    title: "Career Development Resources",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LinkedIn_logo_initials.png/640px-LinkedIn_logo_initials.png",
    description:
      "Build your professional profile, connect with employers, and discover opportunities.",
    link: "https://www.linkedin.com"
  }
];


const container = document.getElementById("resource-container");


if (container) {

  resources.forEach(resource => {

    const card = document.createElement("div");

    card.className = "resource-card";


    card.innerHTML = `

      <a href="${resource.link}" target="_blank" rel="noopener noreferrer">

        <img 
          src="${resource.image}" 
          alt="${resource.title}"
        >

        <div class="resource-info">

          <h3>
            ${resource.title}
          </h3>

          <p>
            ${resource.description}
          </p>

        </div>

      </a>

    `;


    container.appendChild(card);

  });

}
