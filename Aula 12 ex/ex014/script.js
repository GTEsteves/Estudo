function carregar() {
    var saud = document.getElementById('saud')
    var msg = window.document.getElementById('msg')
    var img = document.getElementById('foto')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    minutos = minutos <= 9 ? '0' + minutos : minutos // Gambiarra da internet. O número de minutos é menor ou igual a 9? se sim, adicione '0' antes dos minutos, se não, apenas os minutos.

    if (hora >= 0 && hora < 12) {
        //Bom Dia
        img.src = 'manhã.png'
        img.alt = 'imagem manhã'
        img.title = 'imagem manhã'
        document.body.style.background = '#ecb163'
        msg.innerHTML = `<p>Agora são ${hora}:${minutos} da manhã.</p>`
        saud.innerHTML = 'Bom Dia!'
    } else if (hora >= 12 && hora <= 18) {
        //Boa Tarde
        img.src = 'tarde.png'
        img.alt = 'imagem tarde'
        img.title = 'imagem tarde'
        document.body.style.background = '#5c392c'
        msg.innerHTML = `<p>Agora são ${hora}:${minutos} da tarde.</p>`
        saud.innerHTML = 'Boa Tarde!'
    } else {
        //Boa Noite
        img.src = 'noite.png'
        img.alt = 'imagem noite'
        img.title = 'imagem noite'
        document.body.style.background = '#041424'
        msg.innerHTML = `<p>Agora são ${hora}:${minutos} da noite.</p>`
        saud.innerHTML = 'Boa Noite!'
    }
}