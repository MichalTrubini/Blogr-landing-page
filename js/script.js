/* const menuHeader = document.querySelectorAll('.header__nav-item');
const menuHamburger = document.querySelector('.header__nav-hamburger');


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
} */

const menu = document.querySelector('.header__nav-menu');
const menuHamburger = document.querySelector('.header__nav-hamburger');

menuHamburger.addEventListener('click',toggleMenu);

function toggleMenu(){
    if (menu.className === 'header__nav-menu') {
        menu.className = 'header__nav-menu-display'
    }
    else {
        menu.className = 'header__nav-menu';
    };
}

const elements = document.querySelectorAll('.header__nav-item');


elements.forEach(rollSubMenu);

function rollSubMenu(element) {
    let subMenuHeader = element.firstElementChild;
    let subMenu = element.lastElementChild;
    let subMenus = document.querySelectorAll('.header__nav-item-list');
    let arrowAnimated = element.querySelector('.header__nav-item-arrow');

    subMenuHeader.addEventListener('click',function(){
        subMenus.forEach(subms => {
            if (subMenu !== subms && screen.width < 1100) {
                subms.classList.remove('header__nav-item-list-display');
            }
        });

        if (screen.width < 1100) subMenu.classList.toggle('header__nav-item-list-display');

        if (arrowAnimated.className === 'header__nav-item-arrow-animation-up' && screen.width < 1100) {
            arrowAnimated.classList.remove('header__nav-item-arrow-animation-up')
            arrowAnimated.classList.add('header__nav-item-arrow-animation-down');
        }
        else {
            arrowAnimated.className = 'header__nav-item-arrow-animation-up'
        };


    })
}