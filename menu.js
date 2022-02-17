let botao_ativado = true;

const menuMobile = document.querySelector('.menu__mobile');
const menuToggle = document.querySelector('.menu__toggle');

menuToggle.addEventListener('click', () =>{
    document.body.style.overflow = botao_ativado ? 'hidden' : 'initial';

    menuMobile.classList.toggle('on', botao_ativado);
    botao_ativado = !botao_ativado;
})
