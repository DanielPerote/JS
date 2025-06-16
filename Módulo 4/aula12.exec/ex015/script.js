function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if ( fano.value.length == 0 || fano.value > ano) {
        window.alert('Erro! Verifique os dados e tente novamente!')
    } else {
        var fsex =  document.getElementsByName('radsex')
        var idade =  ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homen'
            if (idade >= 0 && idade < 12){
                img.setAttribute('src' , 'img/criançah.png')
            } else if (idade < 21) {
                img.setAttribute('src' , 'img/jovemh.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'img/adultoh.png')
            } else {
                img.setAttribute('src', 'img/idosoh.png')
            }
        } else if(fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 12){
                img.setAttribute('src' , 'img/criançam.png')
            } else if (idade < 21) {
                img.setAttribute('src' , 'img/jovemm.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'img/adultom.png')
            } else {
                img.setAttribute('src', 'img/idosom.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}