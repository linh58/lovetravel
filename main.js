var $ = document.querySelector.bind(document)
var $$ = document.querySelectorAll.bind(document)

/* PC Menu */
var navbarButton = $('.header__navbar-icon')
var smallSection = $('.small__section')
var closeButton = $('.close-icon')

function showSection() {
    smallSection.classList.add('small__section-show')
}

function hiddenSection() {
    smallSection.classList.remove('small__section-show')
}

navbarButton.addEventListener('click', showSection)
closeButton.addEventListener('click', hiddenSection)


/* Mobile navbar */
function mobileNavbar() {
    var navBarMobile = $('.navbar-on-mobile')
    var mobileCloseButton = $('.mobile__close-btn-img')
    
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
}

mobileNavbar()

/* Slideshow */
function slideShow() {
    var slideButtons = $$('.light-bar')
    
    slideButtons.forEach(function(slideButton, index) {
        var slidePhotos = $$('.slideshow-photo')
        slideButton.onclick = function() {
            var slidePhoto = slidePhotos[index]
    
            $('.light-bar.selected').classList.remove('selected')
            $('.slideshow-photo.slideshow-active').classList.remove('slideshow-active')
    
            this.classList.add('selected')
            slidePhoto.classList.add('slideshow-active')
        }
    })
}

slideShow()