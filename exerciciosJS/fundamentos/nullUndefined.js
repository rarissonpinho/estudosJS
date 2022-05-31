let valor // não inicializada
console.log(valor)

valor = null //ausência de valor, sempre usar null cas queira zerar uma variável
console.log(valor)
//console.log(valor.toString())//o null não tem nenhma ref. a toString()

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined //evite atribuir undefined
console.log(!!produto.preco)
console.log(produto)

produto.preco = null //sem preço
console.log(!!produto.preco)
console.log(produto)