 var pastel = ['queijo', 'presunto', 'carne', 'frango']
 var tal = 1
 var tel
 switch (tal) {
    case 0:
        tel = pastel[0]
        console.log('pastel de queijo');
        break
    case 1:
        tel = pastel[1]
        console.log('pastel de presunto');
        break
    case 2:
        tel = pastel [2]
        console.log(`pastel de ${pastel[2]}`);
        break
    case 3:
        tel = pastel[3]
        console.log(`pastel de ${pastel[3]}`) 
        break
        default:
            console.log('Erro tal');
            break          
 }

    