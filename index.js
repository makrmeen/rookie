//Hamburger menu
const mainMenu = document.querySelector(".mainMenu");
const closeMenu = document.querySelector(".closeMenu");
const openMenu = document.querySelector(".openMenu");

openMenu.addEventListener("click", (show) => {
  mainMenu.style.display = "flex";
  mainMenu.style.top = "0";
});
closeMenu.addEventListener("click", (close) => {
  mainMenu.style.top = "-100%";
});

//dropdown menu desktop (Sports)
const dropdown = document.querySelector(".dropdown-content");
const dropdownButton = document.querySelector(".dropdown-button");

dropdownButton.addEventListener("click", (show) => {
  if (dropdown.style.display === "block") {
   dropdown.style.display = "none";
} 
  else {
   dropdown.style.display = "block";
      }
  });

  let count = 0; 
dropdownButton.addEventListener('click', event => { 
  const sportsArray = ["Tennis", "Swimming", "Climbing", "Running"];
  if (count <= 0) {
    for (let i = 0; i < sportsArray.length; i++) {
      const li = document.createElement("li");
      const text = document.createTextNode(sportsArray[i]);
      li.classList.add(`${i}`);
      li.appendChild(text);
      dropdown.appendChild(li);
    }
    const sportsOptions = dropdown.children;
    for (let j = 0; j < sportsOptions.length; j++) {
      sportsOptions[j].addEventListener("click", () => {
        mainMenu.style.top = "-100%";
      });
    }
  }
  count = count + 1;
});

// HOMEPAGE

//sport content

//variable to store the selected sport
let selectedSport = 0;

//creation of sport content -- when clicking sport icon

const createSport = () => {
  //add event click target id
  const x = event.target;
  console.log(event);
  const clickedId = x.classList[0];
  console.log(clickedId);
  //store sport selected
  selectedSport = clickedId;
  //const destination div
  const container = document.querySelector(".destination");

  //scroll to the top - user will start at top of page
  window.scrollTo(0, 0);

  //clear everything
  container.innerHTML = "";

  //BEGINNING OF CONTENT CREATION
  //add image
  const sportImg = document.createElement("div");
  sportImg.classList.add("img");
  sportImg.style.backgroundImage = `url("${sportContent[clickedId].picture}")`;
  container.appendChild(sportImg);

  //add title
  const title = document.createElement("h2");
  title.innerText = sportContent[clickedId].name;
  container.appendChild(title);

  //add paragraph
  const sportIntro = document.createElement("p");
  sportIntro.innerHTML = sportContent[clickedId].intro;
  container.appendChild(sportIntro);

  //MOVE TO SELECTED SPORT PAGE

  //hide sports icons
  const firstHidden = document.getElementById("first-hide");
  firstHidden.style.display = "none";

  //show cards cta
  const showCta = document.getElementById("card-cta");
  showCta.style.display = "flex";

  //show cards icons
  const showCards = document.getElementById("card-container");
  showCards.style.display = "flex";

  //change cta
  const changeCta = document.getElementById("card-cta");
  changeCta.innerText = `Discover more about ${sportContent[clickedId].name}`;

  //not your cup of tea?
  const backSportCta = document.getElementById("back-sport-cta");
  backSportCta.style.display = "flex";
  backSportCta.style.marginBottom = "1.7rem";
  backSportCta.innerText = `Not into practicing ${sportContent[clickedId].name} at the moment?`;
  //or choose another sport
  const backSportButton = document.querySelector(".cta");
  backSportButton.style.display = "inline-block";
  backSportButton.style.marginBottom = "5rem";
  backSportButton.innerText = "🎾 Emplore another sport 🏀";
};

//creation of cards content

const createCards = () => {
  //add event click target id
  const x = event.target;
  console.log(event);
  const clickedClass = x.classList[0];
  console.log(clickedClass);
  //const destination div
  const container = document.querySelector(".destination");

  //scroll to the top
  window.scrollTo(0, 0);

  //clear everything
  container.innerHTML = "";

  //add image 1
  const cardImg = document.createElement("div");
  cardImg.classList.add("img");
  cardImg.style.backgroundImage = `url("${cardsContent[selectedSport][clickedClass].pic1}")`;
  container.appendChild(cardImg);

  //add page name
  const name = document.createElement("h2");
  name.innerText = cardsContent[selectedSport][clickedClass].name;
  name.classList.add("h2special");
  container.appendChild(name);

  //add title 1
  const titleOne = document.createElement("h2");
  titleOne.innerText = cardsContent[selectedSport][clickedClass].title1;
  container.appendChild(titleOne);

  //add paragraph 1
  const topicOne = document.createElement("p");
  topicOne.innerHTML = cardsContent[selectedSport][clickedClass].topic1;
  container.appendChild(topicOne);

  //add image 2
  const cardImgTwo = document.createElement("div");
  cardImgTwo.classList.add("img");
  cardImgTwo.style.backgroundImage = `url("${cardsContent[selectedSport][clickedClass].pic2}")`;
  container.appendChild(cardImgTwo);

  //add title 2
  const titleTwo = document.createElement("h2");
  titleTwo.innerText = cardsContent[selectedSport][clickedClass].title2;
  container.appendChild(titleTwo);

  //add paragraph 2
  const topicTwo = document.createElement("p");
  topicTwo.innerHTML = cardsContent[selectedSport][clickedClass].topic2;
  container.appendChild(topicTwo);

  //MOVE BACK TO SPORTS

  //hide cards icons
  const firstHidden = document.getElementById("first-hide");
  firstHidden.style.display = "none";

  //show cards
  const showCards = document.getElementById("card-container");
  showCards.style.display = "flex";

  //change cta
  const changeCta = document.getElementById("card-cta");
  changeCta.innerText = "Choose another topic";

  //show back to sports button
  const backSportButton = document.querySelector(".cta");
  backSportButton.style.display = "inline-block";
  backSportButton.style.marginBottom = "5rem";
  backSportButton.innerText = "🎾 Emplore another sport 🏀";
};

//MOVE BACK TO HOMEPAGE
const backHome = () => {
  window.location = "index.html";
  window.scrollTo(0, 4000);
};
