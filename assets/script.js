const menu_btn = document.querySelector('.menu-btn');
const back_btn = document.querySelector('.back-btn');
const nav_links = document.querySelector('.nav-links');
menu_btn.addEventListener('click', () => {
    nav_links.classList.toggle('active')
    back_btn.classList.toggle('active')
})
back_btn.addEventListener('click', () => {
    nav_links.classList.toggle('active')
    back_btn.classList.toggle('active')
})