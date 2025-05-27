function carregar() {
    var texto = window.document.getElementById("texto")
    var img = document.getElementById('img')
    var data = new Date()
    var hora = 19//data.getHours()
    texto.innerHTML = `Agora são ${hora} horas`
    if (hora >= 6 && hora < 12 ){
        img.src = 'img/ft_dia.png'
        document.body.style.background = '#e4c498'
    } else if (hora >= 12 && hora <= 18) {
        img.src = 'img/ft_tarde.png'
        document.body.style.background = '#DE5201'
    } else {
        img.src = 'img/ft_noite.png'
        document.body.style.background = '#0F222C'
    }
}
