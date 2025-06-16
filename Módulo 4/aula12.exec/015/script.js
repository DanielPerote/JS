function verificar(){
    let data = new Date()
    let ano = data.getFullYear()
    let nasc = document.getElementById('ano')
    let res = document.getElementById('res')
    if (nasc.value.length == 0 || nasc.value > ano){
        alert('Erro, verifique os dados e tente novamente')
    } else {
        let sexo = document.getElementsByName('sexo')
        let idade = ano - nasc.value
        let genero = ''
        let a = ''
        let img = document.createElement('img')
        img.setAttribute('id' , 'foto')
        if (sexo[0].checked) {
            genero = 'Homen'
            a = 'um'
            if (idade >= 0 && idade < 12){
                img.setAttribute('src' , 'img/criançah.png')
            } else if (idade < 21) {
                img.setAttribute('src' , 'img/jovemh.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'img/adultoh.png')
            } else {
                img.setAttribute('src', 'img/idosoh.png')
            }
        } else if (sexo[1].checked) {
            genero = 'Mulher'
            a = 'uma'
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
        res.innerHTML = `Detectamos ${(a)} ${genero} com ${idade}`
        res.appendChild(img)
    }
}
