const burger = document.querySelector('#burger')
const menu = document.querySelector('#menu')

const sections = document.querySelectorAll('#home, #about, #contact');

burger.addEventListener('click', () => {
    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden')
    } else {
        menu.classList.add('hidden')
    }
})

sections.forEach(section => {
    section.addEventListener('click', () => {
        sections.forEach(sec => sec.classList.remove('border-primary'));
        section.classList.add('border-primary');
    });
});

