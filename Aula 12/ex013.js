var agora = new Date()
var diaSem = agora.getDay()

switch(diaSem) { //O switch acaba sendo uma estrutura mais limitada que i if else. Se for testar algo com intervalos (de 0 a 3, faça alguma coisa), é muito mais recomendado utilizar o if else, mas se o teste for pontual e possuir vários casos, o switch é uma excelente ferramenta.
    case 0: // Lembrando que o JavaScript conta os dias da semana na forma de números iniciando com 0, no Domingo.
        console.log('Domingo')
        break //Sempre inserir o break ao final dos casos, ele impede que o programa execute os próximos casos até que se esgotem.
    case 1:
        console.log('Segunda')
        break
    case 2:
        console.log('Terça')
        break
    case 3:
        console.log('Quarta')
        break
    case 4:
        console.log('Quinta')
        break
    case 5:
        console.log('Sexta')
        break
    case 6:
        console.log('Sábado')
        break
    default:
        console.log('Default')
        break
}