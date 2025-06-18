function contar() {
    let inicio = document.getElementById('ini')
    let fim = document.getElementById('fim')
    let passo = document.getElementById('pas')
    let res = document.getElementById('res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        alert('Insira números validos')
    } else {
        res.innerHTML = ('Contando:')
        let i = Number(inicio.value)
        let j = Number(fim.value)
        let k = Number(passo.value)
        if (i < j) {
            for(let c = i ; c <= j ; c += k){
                res.innerHTML += `${c} `
            }
        } else {
            for(let c = i ; c >= j ; c-= k){
                res.innerHTML += `${c} `
            }    
        }
    } 
}
