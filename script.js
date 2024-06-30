document.addEventListener('DOMContentLoaded', () => {
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseover', () => {
            card.style.transform = 'scale(1.1)';
        });
        card.addEventListener('mouseout', () => {
            card.style.transform = 'scale(1)';
        });
    });
});
//add code to open the pages in new tab
document.addEventListener('DOMContentLoaded', () => {
    const projectLinks = document.querySelectorAll('.project-link');
    projectLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            window.open(link.href, '_blank');
        });
    });
});