//Hamburger menu
const mainMenu = document.querySelector('.mainMenu'); 
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu'); 

openMenu.addEventListener('click', (show) => {
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
});
closeMenu.addEventListener('click', (close) => {
    mainMenu.style.top = '-100%';
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


//Contact page
// function myFunction() {
//     document.getElementById("thankYou").innerHTML = "Thank You for contacting us fname!" ;
//   }



