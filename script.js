//icon de navbar
let menuIcon =document.querySelector('#menu')
let navbar = document.querySelector('.navbar')

menuIcon.onclick=() => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

//scroll section
let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');


window.onscroll = () => {
    section.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height){
            //ativar navbar Links
            navLinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id+']').classList.add('active');
            })
        }
    })
    //animação de cabecalho
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
}