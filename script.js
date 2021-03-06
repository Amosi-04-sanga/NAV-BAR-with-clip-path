// select element references.
const navList = document.querySelector('.nav__list');
const nav__menuBurger = document.querySelector('.nav__menu-burger');
let is_open = false;

// add click listener to nav burger menu.
nav__menuBurger.addEventListener( 'click', classToggler, false );

function classToggler() {


    if( !is_open ) {
        navList.classList.add('active');
        nav__menuBurger.classList.add('active');
        document.body.style.overflow = 'hidden';
        is_open = true;
    }  
    
    else {
        nav__menuBurger.classList.remove('active');
        navList.classList.remove('active');
        document.body.style.overflow = 'auto';
        is_open = false;
    }

}