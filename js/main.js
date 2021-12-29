/** 
 * Menu Toggle
 */
const menuLink = document.querySelector('.nav__list')
const menuToggle = document.querySelector('.menu__toggle')

function toggleMenu(event) {
    if (event.type === 'touchstart') event.preventDefault()

    const menuIcon = document.querySelector('.menu__toggle i')
    const classIcon = menuIcon.classList.item(1)

    if (classIcon === 'fa-bars') {
        menuIcon.classList.remove('fa-bars')
        menuIcon.classList.add('fa-times')
    } else {
        menuIcon.classList.remove('fa-times')
        menuIcon.classList.add('fa-bars')
    }

    const nav = document.querySelector('.nav')
    nav.classList.toggle('active')

    const active = nav.classList.contains('active')
    event.currentTarget.setAttribute('aria-expanded', active)

    if (event.target.tagName === 'A') nav.classList.remove('active')

    if (active) {
        event.currentTarget.setAttribute('aria-label', 'Fechar menu')
    } else {
        event.currentTarget.setAttribute('aria-label', 'Abrir menu')
    }
}

menuLink.addEventListener('click', toggleMenu)

menuToggle.addEventListener('click', toggleMenu)

menuToggle.addEventListener('touchstart', toggleMenu)

/**
 * Smooth Scrolling Vanilla Javascript
 */
const links = document.querySelectorAll('.nav__list li a');

for (const link of links) {
    link.addEventListener('click', clickHandler);
}

function clickHandler(e) {
    e.preventDefault();
    const href = this.getAttribute("href");
    const offsetTop = document.querySelector(href).offsetTop;

    scroll({
        top: offsetTop - 75,
        behavior: "smooth"
    });
}