let num = document.getElementById('num')
let contar = document.getElementById('con')
let res = document.getElementById('res')
let valores = []

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }
}

function adicionar(){
    if(isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        var n = num.value
        var item = document.createElement('option')
        item.text = `Valor ${n} cadastrado`
        contar.appendChild(item)
        res.innerHTML = ''
    } else {
        alert('Valor inválido ou encontrado na lista')
    }
    num.value = ''
    num.focus()
}

function finalizar() {
    if (valores.length == 0){
        alert('Adicione valores antes de finalizar')
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for (let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior)
                maior = valores[pos]
            if (valores[pos] < menor)
                menor = valores[pos]
        }
        media = soma / tot  

    res.innerHTML = ''
    res.innerHTML += `<p> Ao todo temos ${tot} números cadastrados.</p>`
    res.innerHTML += `<p>O maior valor informado é ${maior}.</p>`
    res.innerHTML += `<p>O menor valor informado é ${menor}.</p>`
    res.innerHTML += `<p>A soma dos valores é igual a: ${soma}.</p>`
    res.innerHTML += `<p>A média dos valores é: ${media}</p>.`

    }
}