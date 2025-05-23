var horagora = new Date()
var hora = horagora.getMilliseconds()
console.log('Agora são ' + horagora)

if (hora >=0 && hora <6){
    console.log('Volta a dormir')
} else if(hora <12) {
    console.log('Bom dia')
} else if (hora <=18) {
    console.log('Boa tarde')
} else {
    console.log('Boa noite')
}