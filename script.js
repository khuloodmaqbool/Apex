document.addEventListener("DOMContentLoaded", function () {
    const currentLocation = window.location.pathname.split("/").pop();
    const navLinks = document.querySelectorAll('.nav-link, .ddlink');
    const funzonePages = ['Experience.html', 'LeisureAndDiningpg.html', 'parkcharacterpg.html', 'whatsuppg.html'];

    let isFunzoneActive = false;

    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href').split("/").pop();
        if (linkPath === currentLocation) {
            link.classList.add('active');
            if (funzonePages.includes(linkPath)) {
                isFunzoneActive = true;
            }
        }
    });

    if (isFunzoneActive) {
        document.querySelector('.nav-item.dropdown .nav-link').classList.add('active');
    }
});