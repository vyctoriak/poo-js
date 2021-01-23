class Cliente{
  nome;
  cpf;
}

class ContaCorrente {
  agencia;
  #saldo = 0;

  saque(valor) {
      if(this.#saldo >= valor) {
          this.#saldo -=  valor;
          return valor;
      }
  }

  depositar(valor) {
      if(valor>0) {
          this.#saldo += valor;
          console.log(`Seu saldo é de R$${this.#saldo}`);
      }
  }

}

const cliente1 = new Cliente();
const cliente2 = new Cliente();

cliente1.nome = "Ricardo";
cliente1.cpf = 11122233309;

cliente2.nome = "Alice";
cliente2.cpf = 88822233309;

const contaCorrenteRicardo = new ContaCorrente();
contaCorrenteRicardo.agencia = 1001;
contaCorrenteRicardo.depositar(100);
contaCorrenteRicardo.depositar(100);
contaCorrenteRicardo.depositar(100);

const valorSacado = contaCorrenteRicardo.saque(50);
console.log(valorSacado);

console.log(contaCorrenteRicardo);