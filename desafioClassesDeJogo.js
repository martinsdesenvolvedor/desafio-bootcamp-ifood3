class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }

    atacar(ataque) {
        if (this.tipo == 'mago') {
            ataque = 'magia'
            console.log(`O ${this.tipo} ${this.nome}, atacou usando ${ataque}`)
        } else if (this.tipo == 'guerreiro') {
            ataque = 'espada'
            console.log(`O ${this.tipo} ${this.nome}, atacou usando ${ataque}`)
        } else if (this.tipo == 'monge') {
            ataque = 'artes marciais'
            console.log(`O ${this.tipo} ${this.nome}, atacou usando ${ataque}`)
        } else if (this.tipo == 'ninja') {
            ataque = 'shuriken'
            console.log(`O ${this.tipo} ${this.nome}, atacou usando ${ataque}`)
        } else {
            console.log('Não existe este tipo de personagem')
        }
       
    }

}

const heroi1 = new Heroi('Merlin Darkspell', 150, 'mago' )
console.log(heroi1)
console.log(`Nome: ${heroi1.nome}, Idade: ${heroi1.idade} anos, Tipo: ${heroi1.tipo}`)
heroi1.atacar()
console.log('---------------------------------------------------------------------------')

const heroi2 = new Heroi('Lao Shan', 250, 'monge' )
console.log(heroi2)
console.log(`Nome: ${heroi2.nome}, Idade: ${heroi2.idade} anos, Tipo: ${heroi2.tipo}`)
heroi2.atacar()
console.log('---------------------------------------------------------------------------')

const heroi3 = new Heroi('Sir Cedric', 100, 'guerreiro' )
console.log(heroi3)
console.log(`Nome: ${heroi3.nome}, Idade: ${heroi3.idade} anos, Tipo: ${heroi3.tipo}`)
heroi3.atacar()
console.log('---------------------------------------------------------------------------')

const heroi4 = new Heroi('Hanzo Shadowblade', 200, 'ninja' )
console.log(heroi4)
console.log(`Nome: ${heroi4.nome}, Idade: ${heroi4.idade} anos, Tipo: ${heroi4.tipo}`)
heroi4.atacar()
console.log('---------------------------------------------------------------------------')