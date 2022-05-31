class Avo {
    constructor(sobrenome) {
        this.sobrenome = sobrenome
    }
}

class Pai extends Avo { //extends em Class é forma de demonstrar que uma determinada classe tem outra classe como prototipo
    constructor(sobrenome, profissao = 'Professor') {
        super(sobrenome)
        this.profissao = profissao
    }
}

class Filho extends Pai {
    constructor () {
        super('Silva')
    }
}

const filho = new Filho
console.log(filho)