const menuHeader = document.querySelectorAll('.header__nav-item');
const menuHamburger = document.querySelector('.header__nav-hamburger');
const menu = document.querySelector('.header__nav-menu');

menuHeader.forEach(rollSubMenu);
menuHamburger.addEventListener('click',toggleMenu);

function rollSubMenu (item) {
    item.addEventListener('click',function(){

        const menuHide = document.querySelector('ul:not(.header__nav-item-list)');
        if (menuHide) menuHide.className = 'header__nav-item-list';

        const listRoll = item.children[1];
        if (listRoll.className === 'header__nav-item-list'){
            listRoll.className = 'header__nav-item-list-display'
        }
        else {
            listRoll.className = 'header__nav-item-list'
        };
    })
}

function toggleMenu(){
    if (menu.className === 'header__nav-menu') {
        menu.className = 'header__nav-menu-display'
    }
    else {
        menu.className = 'header__nav-menu';
    };
}