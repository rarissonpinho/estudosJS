const prod1 = {}//par de chaves representa a forma literal de um object
prod1.nome = 'Celular Ultra Mega' 
prod1.preco = 4998.90
prod1['Desconto Legal'] = 0.40 //evitar atributos com espaço

console.log(prod1)

const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90,
   /* obg: {
        blabla: 1,
        obj: {
            blabla: 2
        }
    }*/
}
//'{"nome": "Camisa Polo", "preco": 79.90 }' json é um formato textual e não um objeto!
    


console.log(prod2)