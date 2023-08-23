const hiddenMenu = document.querySelectorAll('.menu__box');
const body = document.getElementsByTagName('body');

const hidden = () => {
    hamContainer.classList.toggle("change");
    hiddenMenu[0].classList.toggle("menuActive");
    body[0].classList.toggle('stopScrolling');

    const check = () => {
    if(hiddenMenu[0].classList.contains('menuActive')){
        window.addEventListener('resize', check);
        if (window.innerWidth > 999) {
            hidden();
            window.removeEventListener('resize', check)
          }
    }
    }
    check();
  }

export default hidden;