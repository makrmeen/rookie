const mainMenu = document.getElementsByClassName('mainMenu'); 
const closeMenu = document.getElementsByClassName('closeMenu');
const openMenu = document.getElementsByClassName('openMenu'); 

openMenu.addEventListener('click', (show) => {
    mainMenu.style.display = 'flex'; 
})

closeMenu.addEventListener('click', (hide) => {
        mainMenu.style.top = '-100%';
    })




