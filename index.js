//Hamburger menu
const mainMenu = document.querySelector('.mainMenu'); 
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu'); 

openMenu.addEventListener("click", (show) => {
  mainMenu.style.display = "flex";
  mainMenu.style.top = "0";
});
closeMenu.addEventListener("click", (close) => {
  mainMenu.style.top = "-100%";
});

//dropdown menu (Sports)
const dropdown = document.querySelector('.dropdown-content');
const dropdownButton = document.querySelector('.dropdown-button');
const closeDropdown = document.querySelector('.dropdown-closing-button');

dropdownButton.addEventListener ('click', (show) => {
  if (dropdown.style.display === 'block') {
   dropdown.style.display = 'none';
} 
  else {
   dropdown.style.display = 'block';
      }
  })

const sportContent = [
  {
    name: "Tennis",
    picture: "https://i.ibb.co/kKq7Wqs/Schermata-2021-03-23-alle-10-24-05.png",
    intro:
      "Tennis is a cool sport that I can practice individuallu or in gruops.",
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

const createSport = (event) => {
  //change page
  window.location.href = "sport.html";

  //add event click target id
  const x = event.target;
  const clickedId = x.id;
  console.log(clickedId);
  //const destination div
  const container = document.querySelector(".destination");

  //add image

  const sportImg = document.createElement("div");
  sportImg.classList.add("img");
  sportImg.style.backgroundImage = `url("${sportContent[clickedId].picture}")`;


  container.appendChild(sportImg);
=======
//Contact page
// function myFunction() {
//     document.getElementById("thankYou").innerHTML = "Thank You for contacting us fname!" ;
//   }



  //add title
  const title = document.createElement("h1");
  title.innerText = sportContent[clickedId].name;
  container.appendChild(title);

  //add paragraph
  const sportIntro = document.createElement("p");
  sportIntro.innerHTML = sportContent[clickedId].intro;
  container.appendChild(sportIntro);
};
