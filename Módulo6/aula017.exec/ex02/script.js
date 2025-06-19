    let num = document.getElementById('num1')
    let lista = document.getElementById('cont')
    let res = document.getElementById('res')
    let valores = []
    function isNumero(n){
        if(Number(n) >= 1 && Number(n) <=100){
            return true
        } else {
            return false
        }
    }
    function isLista(n, l){
        if (l.indexOf(Number(n)) != -1){
            return true
        } else {
            return false
        }
    }
    function adicionar(){
        if(isNumero(num.value) && !isLista(num.value, valores)){
            valores.push(Number(num.value))
            let item = document.createElement('option')
            item.text = `Valor ${num.value} adicionado.`
            lista.appendChild(item)
            res.innerHTML = ''
        } else {
            alert('Valores invalidos ou já encontrados na lista!')
        }
        num.value = ''
        num.focus()
    }
    function final(){
        if (valores.length == 0) {
            alert('Adicione valores para finalizar')
        } else {
            let tot = valores.length
            let maior = valores[0]
            let menor = valores[0]
            let soma = 0
            let media = 0
            let multi = 0
            for (let pos in valores){
                multi **= valores[pos]
                soma += valores[pos]
                if (valores[pos] > maior)
                    maior = valores[pos]
                if (valores[pos] < menor)
                    menor = valores[pos]
            }
            media = soma / tot
            res.innerHTML = ''
            res.innerHTML += `<p>Ao todo temos ${tot} números.</p>`
            res.innerHTML += `<p>O maior valor entre os números é ${maior}.</p>`
            res.innerHTML += `<p>O menor valor entre os números é ${menor}.</p>`
            res.innerHTML += `<p>A soma dos valores é ${soma}</p>`
            res.innerHTML += `<p>A média dos valores é ${media}</p>`
            res.innerHTML += `${multi}`
        }
    }
