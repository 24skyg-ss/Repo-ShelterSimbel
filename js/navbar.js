const hamburger = document.getElementById('hamburger');
const naviList = document.getElementById('navi-list');

hamburger.addEventListener('click', () => {
    naviList.classList.toggle('active');
});

const naviLinks = document.querySelectorAll('.navi-link');

naviLinks.forEach((n) => n.addEventListener('click', () => {
    naviList.classList.remove('active');
}));

