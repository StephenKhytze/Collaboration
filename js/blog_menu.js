document.querySelectorAll('.blog_menu > ul > li').forEach(li => {
    li.addEventListener('click', function () {
        const tab = this.querySelector('.blog_menu_tabs');
        if (tab) {
            if (tab.classList.contains('active')) {
                tab.classList.remove('active');
            } else {
                document.querySelectorAll('.blog_menu_tabs').forEach(t => {                    
                    t.classList.remove('active');
                });
                tab.classList.add('active');
            }
        }
    });
});