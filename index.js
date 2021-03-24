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

//dropdown menu (Sports)
const dropdown = document.querySelector(".dropdown-content");
const dropdownButton = document.querySelector(".dropdown-button");
const closeDropdown = document.querySelector(".dropdown-closing-button");

dropdownButton.addEventListener("click", (show) => {
  if (dropdown.style.display === "block") {
    dropdown.style.display = "none";
  } else {
    dropdown.style.display = "block";
  }
});

//sport content
const sportContent = [
  {
    name: "Tennis",
    picture: "https://i.ibb.co/58qrYjz/pexels-cottonbro-5739226.jpg",
    intro:
      "Tennis is a unique sport; it provides both aerobic (endurance) and anaerobic (fast explosive movements) training. The average point in tennis includes bursts of activity and acts to condition our bodies the same way interval training would do.",
  },
  {
    name: "Basketball",
    picture: "https://placekitten.com/200/287",
    intro:
      "Basketball is a cool sport that I can practice individuallu or in gruops.",
  },
  {
    name: "Surf",
    picture: "https://i.ibb.co/0V27ZcR/pexels-elle-hughes-1549180.jpg",
    intro:
      "Surf is a cool sport that I can practice individuallu or in gruops.",
  },
  {
    name: "Climbing",
    picture: "https://placekitten.com/200/287",
    intro:
      "Climbing is a cool sport that I can practice individuallu or in gruops.",
  },
  {
    name: "Soccer",
    picture: "https://placekitten.com/200/287",
    intro:
      "Soccer is a cool sport that I can practice individuallu or in gruops.",
  },
];

//creation of sport content

const createSport = () => {
  //change page
  // window.location.href = "sports.html";

  //add event click target id
  const x = event.target;
  console.log(event);
  const clickedId = x.classList[0];
  console.log(clickedId);
  //const destination div
  const container = document.querySelector(".destination");

  //scroll to the top
  window.scrollTo(0, 0);

  //clear everything
  container.innerHTML = "";

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

  //hide sports icons
  const firstHidden = document.getElementById("first-hide");
  firstHidden.style.display = "none";
  //show cards icons
  const showCta = document.getElementById("card-cta");
  showCta.style.display = "flex";

  const showCards = document.getElementById("card-container");
  showCards.style.display = "flex";

  //change cta
  const changeCta = document.getElementById("card-cta");
  changeCta.innerText = `Discover more about ${sportContent[clickedId].name}`;
};

console.log(clickedId);

//cardscontent
const cardsContent = [
  {
    name: "Health Benefits",
    pic1: "https://i.ibb.co/swb8hM0/pexels-luka-s-dlutko-2440324.jpg",
    title1: "Strong legs, deep breath",
    topic1:
      "With tennis you will train your body entirely. From the upper part and arms, to the legs.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    pic2: "https://i.ibb.co/kKq7Wqs/Schermata-2021-03-23-alle-10-24-05.png",
    title2: "Pay attention to your shoulder",
    topic2:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    name: "Cost of Practicing",
    pic1: "https://i.ibb.co/LpVzHxt/pexels-cottonbro-5739122.jpg",
    title1: "Cost of a course",
    topic1:
      "With tennis you will. With tennis you will train your body entirely. From the upper part and arms, to the legs.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    pic2: "https://i.ibb.co/BNG2sg8/r70-650.jpg",
    title2: "Cost of a trainer",
    topic2:
      "With tennis you will train your body entirely. From the upper part and arms, to the legs.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    name: "Level of Difficulty",
    pic1: "https://i.ibb.co/RgpyTqX/pexels-rodnae-productions-5836917.jpg",
    title1: "Easy to start",
    topic1:
      "With tennis you will train your body entirely. From the upper part and arms, to the legs.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    pic2: "https://i.ibb.co/Vm9r55X/pexels-rodnae-productions-5837013.jpg",
    title2: "Very difficult to improve!",
    topic2:
      "With tennis you will train your body entirely. From the upper part and arms, to the legs.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    name: "Necessary Equipment",
    pic1: "https://i.ibb.co/xChYPY8/pexels-anna-shvets-5067817.jpg",
    title1: "Raquet, your sword!",
    topic1:
      "With tennis you will train your body entirely. From the upper part and arms, to the legs.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    pic2: "https://i.ibb.co/N2HzxD3/best-tennis-bags-780x470.jpg",
    title2: "How big is a tennis bag?",
    topic2:
      "With tennis you will train your body entirely. From the upper part and arms, to the legs.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
];

//cards function

const createCards = () => {
  //change page
  // window.location.href = "sports.html";

  //add event click target id
  const x = event.target;
  console.log(event);
  const clickedId = x.classList[0];
  console.log(clickedId);
  //const destination div
  const container = document.querySelector(".destination");

  //scroll to the top
  window.scrollTo(0, 0);

  //clear everything
  container.innerHTML = "";

  //add image

  const cardImg = document.createElement("div");
  cardImg.classList.add("img");
  cardImg.style.backgroundImage = `url("${cardsContent[clickedId].pic1}")`;
  container.appendChild(cardImg);

  //add page name
  const name = document.createElement("h2");
  name.innerText = cardsContent[clickedId].name;
  name.classList.add("h2special");
  container.appendChild(name);

  //add title
  const titleOne = document.createElement("h2");
  titleOne.innerText = cardsContent[clickedId].title1;
  container.appendChild(titleOne);

  //add paragraph 1
  const topicOne = document.createElement("p");
  topicOne.innerHTML = cardsContent[clickedId].topic1;
  container.appendChild(topicOne);

  //add image 2
  const cardImgTwo = document.createElement("div");
  cardImgTwo.classList.add("img");
  cardImgTwo.style.backgroundImage = `url("${cardsContent[clickedId].pic2}")`;
  container.appendChild(cardImgTwo);

  //add title 2
  const titleTwo = document.createElement("h2");
  titleTwo.innerText = cardsContent[clickedId].title2;
  container.appendChild(titleTwo);

  //add paragraph 2
  const topicTwo = document.createElement("p");
  topicTwo.innerHTML = cardsContent[clickedId].topic2;
  container.appendChild(topicTwo);

  //hide cards icons
  const firstHidden = document.getElementById("first-hide");
  firstHidden.style.display = "none";

  const showCards = document.getElementById("card-container");
  showCards.style.display = "flex";

  const changeCta = document.getElementById("card-cta");
  changeCta.innerText = "Choose another topic";

  const backSportCta = document.getElementById("back-sport-cta");
  backSportCta.innerText = "Or explore another sport!";
};
