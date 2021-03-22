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






