function tabuada(){
    var num = document.getElementById('num')
    var tab = document.getElementById('tab')
    if (num.value.length == 0){
        window.alert("Digite um número!")
    } else {
        var n = num.value
        var c = 1
        tab.innerHTML = ''
        while (c <=10){
            var item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }
}
