const MenubarButton = document.getElementById('menu-icon')
const MenubarToggle = document.getElementById('menu')

MenubarButton.addEventListener('click', () => {
    menu.classList.toggle('active');
});