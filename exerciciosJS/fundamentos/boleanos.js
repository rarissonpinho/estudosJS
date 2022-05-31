let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo)

console.log('os verdaeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo =  true))

console.log('os falsos...')
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo =  false))

console.log(!!('' || null || 0 || ' ')) // ||ou

let nome = ''

console.log(nome || 'Desconhecido')//se não deu o nome o console vai ler o valor Desconhecido