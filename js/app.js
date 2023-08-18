
//scroll header
function scrollHeader(){
    const nav = document.getElementById('header');
    /*se o scroll eixo Y for maior que 50 ele ativara o elemento HEADER caso contrário remove */
    if(this.scrollY >= 50) nav.classList.add('active-header'); else nav.classList.remove('active-header')
}

/*quando abrir a tela e detectar o movimento do scrool ele executara essa fução*/
window.addEventListener('scroll', scrollHeader)

//dropdown menu
const dropdownMenu1 = document.getElementById('dropdown-item-1');  //const é uma variavel com valor fixo
const dropdownMenu2 = document.getElementById('dropdown-item-2');
const dropdownMenu3 = document.getElementById('dropdown-item-3');

const menuItem1 = document.getElementById('menu-item-1');
const menuItem2 = document.getElementById('menu-item-2');
const menuItem3 = document.getElementById('menu-item-3');

function ShowDropdown1(event){
    event.preventDefault();
    dropdownMenu1.classList.toggle('.active-dropdown-menu');
    dropdownMenu2.classList.remove('.active-dropdown-menu');
    dropdownMenu3.classList.remove('.active-dropdown-menu');
}

function ShowDropdown1(event){
    event.preventDefault();
    dropdownMenu1.classList.remove('.active-dropdown-menu');
    dropdownMenu2.classList.toggle('.active-dropdown-menu');
    dropdownMenu3.classList.remove('.active-dropdown-menu');
}

function ShowDropdown1(event){
    event.preventDefault();
    dropdownMenu1.classList.remove('.active-dropdown-menu');
    dropdownMenu2.classList.remove('.active-dropdown-menu');
    dropdownMenu3.classList.toggle('.active-dropdown-menu');
}