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
            header.classList.add('down')     
        } else {
            header.classList.remove('down')
        }
    });
});

document.querySelectorAll('.header_nav_buttons > li').forEach(li => {
    li.addEventListener('click', function () {
        const tab = this.querySelector('.header_nav_tabs');
        const tabContent = tab.querySelector('ul')
        if (tab) {
            if (tab.classList.contains('active')) {
                tab.classList.remove('active');
                tabContent.style.opacity = 0;
                tabContent.style.maxHeight = 0;
                setTimeout(() => {
                    tab.style.background = 'transparent';
                    tab.style.position = 'absolute';
                }, 255);
            } else {
                document.querySelectorAll('.header_nav_tabs').forEach(t => {
                    const content = t.querySelector('ul');                   
                    if (content) {
                        content.style.opacity = 0; 
                        content.style.maxHeight = 0;    
                        t.style.background = 'transparent';
                    }
                    t.classList.remove('active');
                });
                tabContent.style.opacity = 0;
                if (window.innerWidth >= 768) {
                    tab.style.position = 'absolute';
                } else {
                    tab.style.position = 'static';
                }
                setTimeout(() => {
                    tabContent.style.opacity = 1;
                    tabContent.style.maxHeight = '8rem';
                    tab.style.background = '#ffffff';
                }, 10);
                
                tab.classList.add('active');
            }
        }
    });
});

