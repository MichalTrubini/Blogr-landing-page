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

elements.forEach(rollSubMenuMb);
elements.forEach(rollSubMenuDt);
elements.forEach(mouseLeaveDt);

function rollSubMenuMb(element) {
    let subMenuHeader = element.firstElementChild;
    let subMenu = element.lastElementChild;
    let subMenus = document.querySelectorAll('.header__nav-item-list');
    let arrowAnimated = element.querySelector('.header__nav-item-arrow');
    let screenWidth = 1059;

    subMenuHeader.addEventListener('click',function(){
        subMenus.forEach(subms => {
            if (subMenu !== subms && screen.width < screenWidth) {
                subms.classList.remove('header__nav-item-list-display');
            }
        });

        if (screen.width < screenWidth) subMenu.classList.toggle('header__nav-item-list-display');

        if (arrowAnimated.className === 'header__nav-item-arrow-animation-up' && screen.width < screenWidth) {
            arrowAnimated.classList.remove('header__nav-item-arrow-animation-up')
            arrowAnimated.classList.add('header__nav-item-arrow-animation-down');
        }
        else {
            arrowAnimated.className = 'header__nav-item-arrow-animation-up'
        };


    })
}

function rollSubMenuDt(element) {
    let subMenuHeader = element.firstElementChild;
    let subMenu = element.lastElementChild;
    let subMenus = document.querySelectorAll('.header__nav-item-list');
    let arrowAnimatedLight = element.querySelector('.header__nav-item-arrow-light');
    let screenWidth = 1100;

    subMenuHeader.addEventListener('mouseenter',function(){
        subMenus.forEach(subms => {
            if (subMenu !== subms && screen.width > screenWidth) {
                subms.classList.remove('header__nav-item-list-dt-display');
            }
        });

        if (screen.width > screenWidth) {
            subMenu.classList.add('header__nav-item-list-dt-display');
        };

        if (arrowAnimatedLight.className === 'header__nav-item-arrow-light-animation-up' && screen.width > screenWidth) {
            arrowAnimatedLight.classList.remove('header__nav-item-arrow-light-animation-up')
            arrowAnimatedLight.classList.add('header__nav-item-arrow-light-animation-down');
        }
        else {
            arrowAnimatedLight.className = 'header__nav-item-arrow-light-animation-up'
        };
    })
}

function mouseLeaveDt(element) {

    let subMenu = element.lastElementChild;
    let screenWidth = 1100;

    subMenu.addEventListener('mouseleave',function(){

        if (screen.width > screenWidth) subMenu.classList.remove('header__nav-item-list-dt-display');
        console.log(screenWidth);
    })
}