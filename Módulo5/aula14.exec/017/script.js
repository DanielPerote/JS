const { createElement } = require("react")

function contar(){
    let numero = document.getElementById('num')
    let tab = document.getElementById('sel')
    if (numero.value.length == 0){
        alert('Coloque um número abaixo!')
    } else {
        let n = numero.value
        let c = 1
        tab.innerHTML = ''
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `${c}`
            tab.appendChild(item)
            c++
        }
    }
}
