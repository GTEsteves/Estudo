function verificar() {
    //Parte que coleta e computa a idade.
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var idade = ano - Number(fano.value)
    
    //Parte que coleta o sexo da pessoa.
    var fsex = document.getElementsByName('radsex')

    //Parte que cuida da foto.
    var img = document.createElement('img') //Cria o elemento img, que pode ser editado.
    img.setAttribute('id', 'foto') //Atribui o Id inserido para o objeto criado, neste caso, img recebe o ID foto, como se fosse modificado no HTML, mas foi pelo JavaScript.
   
    //Apenas uma variável para exibir a resposta.
    var res = document.querySelector('#res')

    //Isso seria uma mensagem de erro caso um ano menor que 0 ou maior que o corrente fosse selecionado.
    /*if (fano.value <= 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente')
    }*/

    //Aqui estão as possibilidades de escolha, todas com o maior que, para simplificar o código e não interferir na lógica.
    if (fsex[0].checked) { //Homem
        if (idade > 500) {
        res.innerHTML = 'Tá de sacanagem, temos um vampiro.'
    } else if (idade > 120) {
        genero = 'uma múmia'
    } else if (idade > 60) { 
        genero = 'um senhor'
        img.setAttribute('src', 'idosoH.webp')
    } else if (idade > 18) {
        genero = 'um homem'
        img.setAttribute('src', 'adultoH.webp')
    } else if (idade > 14) {
        genero = 'um adolescente'
        img.setAttribute('src', 'jovemH.webp')
    } else if (idade >= 1) {
        genero = 'um menino'
        img.setAttribute('src', 'criançaH.webp')
    } else if (idade <= 0) {
        res.innerHTML = 'Veio do futuro, foi?'
    }}

    if (fsex[1].checked) { //Mulher
        if (idade > 500) {
        res.innerHTML = 'Tá de sacanagem, temos uma vampira.'
    } else if (idade > 120) {
        genero = 'uma múmia'
    } else if (idade > 60) { 
        genero = 'uma senhora'
        img.setAttribute('src', 'idosoM.webp')
    } else if (idade > 18) {
        genero = 'uma mulher'
        img.setAttribute('src', 'adultoM.webp')
    } else if (idade > 14) {
        genero = 'uma adolescente'
        img.setAttribute('src', 'jovemM.webp')
    } else if (idade >= 1) {
        genero = 'uma menina'
        img.setAttribute('src', 'criançaM.webp')
    } else if (idade <= 0) {
        res.innerHTML = 'Veio do futuro, foi?'
    }}

    res.innerHTML = `Você é ${genero} com ${idade} anos de idade.`
    res.appendChild(img) //Insere a foto abaixo do resultado acima, note que não há nada no arquivo HTML, essa imagem foi inserida inteiramente pelo JavaScript de forma dinâmica.

    //document.body.style.backgroundColor = 'Black' //Iria alterar a cor do fundo ao executar o código.
}