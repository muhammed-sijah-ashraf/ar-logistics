const MenuIcon = document.getElementById("menu-icon")
const Menu = document.getElementById("menu")

MenuIcon.addEventListener('click', () => {
    Menu.classList.toggle('active')
})