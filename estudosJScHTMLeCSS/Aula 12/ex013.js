var agora = new Date()
var diaSem = agora.getDay()
/* para JS:
0 = domingo
1 = segunda
2 = terça
3 = quarta
4 = quinta
5 = sexta
6 = sábado
*/
//diaSem = 8  vai para o default e perde valor anterior declarado!!
//switch só funciona com números inteiros e string (valores pontuais)
switch(diaSem){
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda')
        break
    case 2:
        console.log('Terça')
        break
    case 3:
        console.log('Quata')
        break
    case 4: 
        console.log('Quinta')
        break
    case 5: 
        console.log('Sexta')
        break
    case 6: 
        console.log('Sábado')
        break
    default:
        console.log('Dia inválido')
        break// não pode esquecer o break
}