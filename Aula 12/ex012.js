var agora = new Date() //New para invocar o constructor.
var hora = agora.getHours() //Para utilizar a hora do sistema no qual o programa está rodando.
console.log (`Agora são, exatamente, ${hora} horas.`)
if (hora > 6 && hora < 12) {
    console.log ('Bom dia!')
} else if (hora >= 12 && hora < 18) {
    console.log ('Boa tarde!')
} else if (hora >= 18) {
    console.log ('Boa noite')
} else if (hora >= 0 && hora < 6) {
    console.log ('Boa madrugada')
}