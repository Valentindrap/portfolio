/*=============== TAB SWITCHING LOGIC ===============*/
const navLinks = document.querySelectorAll('.nav__link');
const tabs = document.querySelectorAll('.tab-content');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        // 1. Remove active class from all links
        navLinks.forEach(l => l.classList.remove('active-link'));

        // 2. Add active class to clicked link
        link.classList.add('active-link');

        // 3. Get target tab id
        const targetId = link.getAttribute('data-target');

        // 4. Hide all tabs and show target
        tabs.forEach(tab => {
            tab.classList.remove('active-tab');
            if (tab.getAttribute('id') === targetId.substring(1)) {
                // Add a small delay for fade effect if needed, or just let CSS handle it
                tab.classList.add('active-tab');
            }
        });
    });
});
