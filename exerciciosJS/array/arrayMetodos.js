const pilotos = ['Vetel', 'Alonso', 'Raikkonen', 'Massa'] // neste caso não posso atribuir mais nada para const pilotos.
pilotos.pop() // Massa quebrou o carro! "exclui último elemento"
console.log(pilotos)

pilotos.push('Verstappen') // adiciona elemento
console.log(pilotos)

pilotos.shift() //remove primeiro elemento
console.log(pilotos)

pilotos.unshift('Hamilton')
console.log(pilotos)

//splice pode adicionar e remover elementos
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

//remover
pilotos.splice(3, 1) // quebrou de novo!
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // novo array
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)

