document.addEventListener("DOMContentLoaded", function () {


  const resources = [

    {
      title: "Free AI Learning Resources",
      image: "https://placehold.co/250x250/67b7ff/ffffff?text=AI+Learning",
      description:
        "Explore beginner-friendly AI courses, certifications, and career skills.",
      link:
        "https://www.coursera.org"
    },


    {
      title: "Per Scholas Technology Training",
      image: "https://placehold.co/250x250/173b63/ffffff?text=Per+Scholas",
      description:
        "Free technology training programs that help learners prepare for IT careers.",
      link:
        "https://www.per-scholas.org"
    },


    {
      title: "Remote Work Opportunities",
      image: "https://placehold.co/250x250/2d7fc8/ffffff?text=Remote+Jobs",
      description:
        "Flexible job opportunities designed for people balancing work and family.",
      link:
        "https://www.flexjobs.com"
    },


    {
      title: "Small Business Support",
      image: "https://placehold.co/250x250/67b7ff/ffffff?text=Business",
      description:
        "Resources and tools for parents building businesses and creating income.",
      link:
        "https://www.sba.gov"
    }

  ];



  const container = document.getElementById("resource-container");


  const nextButton = document.getElementById("nextBtn");


  const prevButton = document.getElementById("prevBtn");



  if (!container) {

    console.log("Resource container not found");

    return;

  }



  resources.forEach(function(resource){


    const card = document.createElement("div");


    card.className = "resource-card";



    card.innerHTML = `

      <a 
        href="${resource.link}" 
        target="_blank"
        rel="noopener noreferrer"
      >

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





  let currentIndex = 0;



  function showSlide(index){


    const cards = document.querySelectorAll(".resource-card");



    cards.forEach(function(card){

      card.style.display = "none";

    });



    if(cards[index]){

      cards[index].style.display = "block";

    }


  }




  if(nextButton){


    nextButton.addEventListener("click", function(){


      const cards = document.querySelectorAll(".resource-card");



      currentIndex++;



      if(currentIndex >= cards.length){

        currentIndex = 0;

      }



      showSlide(currentIndex);



    });


  }





  if(prevButton){


    prevButton.addEventListener("click", function(){


      const cards = document.querySelectorAll(".resource-card");



      currentIndex--;



      if(currentIndex < 0){

        currentIndex = cards.length - 1;

      }



      showSlide(currentIndex);



    });


  }





  showSlide(currentIndex);



  console.log("AI Spotlight loaded successfully");


});
