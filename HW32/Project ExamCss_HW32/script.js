const menuButton = document.getElementsByClassName('menu-icon')[0];

const menu = document.getElementsByClassName('header-click')[0];




menuButton.addEventListener('click', ()=>{
    if (menu.style.display === 'none'){
        menu.style.display = 'block';
    } else {
        menu.style.display = 'none';
    }

     
    
    console.log('menu');
})





