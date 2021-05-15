/*Menu mobile*/
const btnMobile = document.querySelector('#btn-mobile')

function toggleMenu(){
    const nav = document.querySelector('#nav')

    nav.classList.toggle('active')
}

btnMobile.addEventListener('click',toggleMenu)





/*scroll suave
Identificar o clique no menu
verificar o item que foi clicado e fazer referencia com o alvo
verificar a distancia entre o alvo 
animar o scroll até o alvo*/


const menuItems = document.querySelectorAll(".menu-nav a[href^='#']")
menuItems.forEach(item => {
    item.addEventListener('click', scrollToIdOnclick)
})

function scrollToIdOnclick(event){
    event.preventDefault()
    const to = getScrollTopByHref(event.target) - 2
    
    scroolToPosition(to)
}

function scroolToPosition(to){
    window.scroll({
        top:to - 2,
        behavior:"smooth",
    })
}

function getScrollTopByHref(element){
    const id = element.getAttribute('href')
    return document.querySelector(id).offsetTop
 }






//Validação do formulario
//document.addEventListener('DOMContentLoaded')

 document.querySelector('form').addEventListener('submit', event => {
     console.log('enviar o formulario')

     //não vai enviar o formulario
     event.preventDefault()
 })

const campos = document.querySelectorAll('[required]')
console.log(campos)
function custumValidation(event){
    const campo = event.target
    console.log(campo.validity)

    //trocar messagem
    campo.setCustomValidity('Esse campo é obligatorio')
}

for(campo of campos){
    campo.addEventListener('invalido',custumValidation)
}





const contacto = document.querySelector('#contact')
const texto = document.querySelector('.texto')

function handleKeyUp(event){
    const target = event.target

    if(!target.checkValidity()){
        target.classList.add('invalido')
        contacto.nome.setCustomValidity('Preecher seu nome por favor')
        contacto.email.setCustomValidity('Preecher um email válido por favor')
        contacto.assunto.setCustomValidity('Est campo é obligatório ')
        contacto.mensagem.setCustomValidity('Digitar sua messagem')
        target.nextElementSibling.innerText = target.validationMessage
    } else {
        target.classList.remove('invalido')
    }
    //console.log(event.target.checkValidity())
    //console.log(event.target.value)
    //texto.innerHTML = event.target.value
}

contacto.addEventListener('change',handleKeyUp)