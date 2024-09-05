const menuNav = document.querySelectorAll('.popular_menu_nav');
const menuContent = document.querySelectorAll('.menu_slider_tabs');
const menuTabs = document.querySelector('.menu_slider')

menuNav.forEach((menu) => {
    menu.addEventListener('click', () => {
        removeActiveMenu();
        menu.classList.add('active');
        menuTabs.style.opacity = 0;
        menuTabs.style.transform = "translateX(-30rem)"
        setTimeout(() => {
            menuTabs.style.transform = "translateX(30rem)"
        }, 100);

        setTimeout(() => {
            const activeContent = document.querySelectorAll(`#${menu.id}-content`);
            removeActiveContent();
            activeContent.forEach((content) => {
            content.classList.add('active');
        });
            menuTabs.style.transform = "translateX(0)"
            menuTabs.style.opacity = 1;
        }, 250);
    });
});

function removeActiveMenu() {
    menuNav.forEach((menu) => {
        menu.classList.remove('active');
    });
}

function removeActiveContent() {
    menuContent.forEach((menu) => {
        menu.classList.remove('active');
    });
}