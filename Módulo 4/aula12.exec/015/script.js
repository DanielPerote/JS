const { createElement } = require("react")

function verificar(){
    let data = new Date()
    let ano = data.getFullYear()
    let nasc = document.getElementById('nas')
    let res = document.getElementById('res')
    if (nasc.value.length == 0 || nasc.value == ano || nasc.value <= 0){
        alert('Erro')
    } else {
        let fsex = document.getElementsByName('sex')
        let idade = ano - nasc.value
        let genero = ''
        let img = document.createElement('img')
        img.setAttribute('id' , 'foto')
        if (fsex[0].checked){
            genero = 'Homen'
            if (idade <= 9){
                img.setAttribute('src', 'img/criançah.png')
                alert('ok')
            }
        }
    }
}
