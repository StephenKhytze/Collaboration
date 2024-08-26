const footerButtons = document.querySelectorAll('.footer_nav_buttons > h1');
footerButtons.forEach((button) => {
    button.addEventListener('click', () => {
        button.nextElementSibling.classList.toggle('active');
        button.querySelector('i').classList.toggle('active');
    });
});
