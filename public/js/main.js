//#region ########## SHOW MENU ##########
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show-menu')
        })
    }
}
showMenu('nav-toggle', 'nav-menu')
//#endregion

//#region ########## REMOVE MENU MOBILE ##########
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))
//#endregion

//#region ########## SCROLL SECTIONS ACTIVE LINK ##########
// const sections = document.querySelectorAll('section[id]')

// function scrollActive() {
//     const scrollY = window.pageYOffset

//     sections.forEach(current => {
//         const sectionHeight = current.offsetHeight
//         const sectionTop = current.offsetTop - 50;
//         sectionId = current.getAttribute('id')

//         if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
//             document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
//         } else {
//             document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
//         }
//     })
// }
// window.addEventListener('scroll', scrollActive)
//#endregion

//#region ########## CHANGE BACKGROUND HEADER ##########
function scrollHeader() {
    const nav = document.getElementById('header')
    if (this.scrollY >= 200) nav.classList.add('scroll-header')
    else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)
//#endregion

//#region ########## SHOW SCROLL TOP ##########
function scrollTop() {
    const scrollTop = document.getElementById('scroll-top')

    if (this.scrollY >= 560) scrollTop.classList.add('show-scroll')
    else scrollTop.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollTop)
//#endregion

//#region ########## SCROLL REVEAL ANIMATIONS ##########
// const sr = ScrollReveal({
//     distance: '30px',
//     duration: 1600,
//     reset: true,
// });

// sr.reveal(`.home__data, .home__img, 
//            .new_data,
//            .products_content,
//            .more_products,
//            .footer__content`, {
//     origin: 'top',
//     interval: 100,
// })

// sr.reveal(`.best_img, .send__content`, {
//     origin: 'left'
// })

// sr.reveal(`.share__data, .send__img`, {
//     origin: 'right'
// })
//#endregion