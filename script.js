//Validação do formulario
document.querySelector('form').addEventListener('submit', event => {
    console.log('enviar o formulario')

    //não vai enviar o formulario
    event.preventDefault()
})

const campos = document.querySelectorAll('[required]')
console.log(campos)

for(campo of campos){
    campo.addEventListener('invalido',event => {
        console.log('campo invalido')
    })
}












// const contacto = document.querySelector('#contact')
// const texto = document.querySelector('.texto')

// function handleKeyUp(event){
//     const target = event.target

//     if(!target.checkValidity()){
//         target.classList.add('invalido')
//         contacto.nome.setCustomValidity('Preecher seu nome por favor')
//         contacto.email.setCustomValidity('Preecher um email válido por favor')
//         contacto.assunto.setCustomValidity('Est campo é obligatório ')
//         contacto.mensagem.setCustomValidity('Digitar sua messagem')
//         target.nextElementSibling.innerText = target.validationMessage
//     } else {
//         target.classList.remove('invalido')
//     }
//     //console.log(event.target.checkValidity())
//     //console.log(event.target.value)
//     //texto.innerHTML = event.target.value
// }

// contacto.addEventListener('change',handleKeyUp)