const obj = { a: 1, b:2, c: 3, soma() { return a + b + c} }
console.log(JSON.stringify(obj)) // JSON é um formato de dados - formato textual

//console.log(JSON.parse("{ a: 1, b: 2, c: 3 }"))
//console.log(JSON.parse("{ 'a': 1, 'b': 2, 'c': 3 }")) //deve ser delimitado por aspas duplas
console.log(JSON.parse('{ "a": 1, "b": 2, "c": 3 }'))
console.log(JSON.parse('{ "a": 1, "b": "string", "c": true, "d": {}, "e": [] }'))