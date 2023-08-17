
function scrollHeader(){
    const nav = document.getElementById('header');
    /*se o scroll eixo Y for maior que 50 ele ativara o elemento HEADER caso contrário remove */
    if(this.scrollY >= 50) nav.classList.add('active-header'); else nav.classList.remove('active-header')
}

/*quando abrir a tela e detectar o movimento do scrool ele executara essa fução*/
window.addEventListener('scroll', scrollHeader)
