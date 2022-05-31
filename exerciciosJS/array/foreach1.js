const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel'] 

aprovados.forEach(function(nome, indice) { // função callback possui 3 parametros nome, indice e o proprio array
    console.log(`${indice + 1}) ${nome}`)
})

aprovados.forEach(nome => console.log(nome))

const exibirAprovados =  aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)