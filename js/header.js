const burgerButton = document.querySelector('.burger_button');
const headerNav = document.querySelector('.header_nav');
const headerText = document.querySelector('.header_text');

burgerButton.addEventListener('click', () => {
    headerNav.classList.toggle('open');
    headerText.classList.toggle('open');
});


document.addEventListener('DOMContentLoaded', function () {
    const header = document.querySelector(".header");
    const offSet = header.offsetTop;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.style.position = "fixed";  
            header.style.top = "0";           
            header.style.width = "100%";      
        } else {
            header.style.position = "static"; 
        }
    });
});

document.querySelectorAll('.header_nav_buttons > li').forEach(li => {
    li.addEventListener('click', function () {
        const tab = this.querySelector('.header_nav_tabs');
        if (tab) {
            if (tab.classList.contains('active')) {
                tab.classList.remove('active');
            } else {
                document.querySelectorAll('.header_nav_tabs').forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
            }
        }
    });
});

