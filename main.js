/* PC Menu */
var navbarButton = document.querySelector('.header__navbar-icon')
var smallSection = document.querySelector('.small__section')
var closeButton = document.querySelector('.close-icon')

function showSection() {
    smallSection.classList.add('small__section-show')
}

function hiddenSection() {
    smallSection.classList.remove('small__section-show')
}

navbarButton.addEventListener('click', showSection)
closeButton.addEventListener('click', hiddenSection)


/* Mobile navbar */
var navBarMobile = document.querySelector('.navbar-on-mobile')
var mobileCloseButton = document.querySelector('.mobile__close-btn-img')

function showMobileNav () {
    var width = window.innerWidth
    document.documentElement.clientWidth
    document.body.clientWidth;

    if(width <= 1230) {
        navBarMobile.classList.add('show-navbar-on-mobile')
    }
}

function hiddenMobileNav () {
    navBarMobile.classList.remove('show-navbar-on-mobile')
}

navbarButton.addEventListener('click', showMobileNav)
mobileCloseButton.addEventListener('click', hiddenMobileNav)

