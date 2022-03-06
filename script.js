const data = {
  mainTitle: "My Favourite cars",
  cardContents: [
    {
      name: "lambhorgini",
      imageLink:
        "https://hips.hearstapps.com/hmg-prod/images/2021-lamborghini-huracan-evo-mmp-1-1600293029.jpg",
    },
    {
      name: "Mercedes-benz",
      imageLink:
        "https://www.mercedes-benz.com/en/vehicles/passenger-cars/concept-cars/_jcr_content/image/MQ6-12-image-20200908114040/00-mercedes-benz-eq-concept-cars-2560x1440.jpeg",
    },
    {
      name: "Ferrari",
      imageLink:
        "https://s1.cdn.autoevolution.com/images/models/FERRARI_Portofino-M-2020_main.jpg",
    },
    {
      name: "Jaguar",
      imageLink:
        "https://i.pinimg.com/originals/68/87/f8/6887f8ec0a88c8cacff15cb878175649.jpg",
    },
  ],
  userData: { name: "Shubham kumar", tagLine: "My first website deployemnt" },
};


// Plug in title data to HTML
let mainTitleElement = document.getElementById("main-title");
mainTitleElement.innerHTML += data.mainTitle;


// Create template for card content
let getCardStructure = (name, imageLink) => {
  return `<div class="col-12 col-sm-6 mb-4">
  <div class="tile">
    <div class="tile-text text-center">
      <h5>${name}</h5>
    </div>
    <img 
      src="${imageLink}" />
  </div>
</div>`;
};

let cardRow = document.getElementById("card-row");

// Plug in card data to HTML
data.cardContents.forEach((cardContent) => {
  let { name, imageLink } = cardContent;
  cardRow.innerHTML += getCardStructure(name, imageLink);
});

// Create template for footer content
let getFooterStructure = (name, tagLine) => {
  return `<h3 class="me-3"><i class="fas fa-heart"></i> ${name}</h3>
    <p>${tagLine}</p>`;
};

let footerContent = document.getElementById("footer");
let { name, tagLine } = data.userData;

// Plug in footer data to HTML
footerContent.innerHTML += getFooterStructure(name, tagLine);
