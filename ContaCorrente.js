export class ContaCorrente {
  agencia;
  cliente;

  // #saldo = 0
  _saldo = 0;

  saque(valor) {
    if (this._saldo >= valor) {
      this._saldo -= valor;
      return valor;
    }
  }

  depositar(valor) {
    if (valor <= 0) {
      return;
    }
    this._saldo += valor;
    console.log(`Seu saldo é de R$${this._saldo}`);
  }

  transferir(valor, conta) {
    const valorSacado = this.saque(valor);
    conta.depositar(valorSacado);
  }

}