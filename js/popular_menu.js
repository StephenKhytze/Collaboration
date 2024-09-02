const menuNav = document.querySelectorAll('.tab_nav_link');
const menuContent = document.querySelectorAll('.menu_content_item');
const menuTabs = document.querySelector('.menu_content')

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