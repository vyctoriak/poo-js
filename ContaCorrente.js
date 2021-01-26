import { Cliente } from "./Cliente.js";

export class ContaCorrente {
  agencia;
  _cliente;

  // #saldo = 0
  _saldo = 0;

  set cliente(novoCliente) {
    if(novoCliente instanceof Cliente) {
      this._cliente = novoCliente;
    }
  }

  get cliente() {
    return this._cliente;
  }


  get saldo() {
    return this._saldo;
  }

  constructor(cliente, agencia){
    this.agencia = agencia;
    this.cliente = cliente;
    
  }


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
    // console.log(`Seu saldo é de R$${this._saldo}`);
  }

  transferir(valor, conta) {
    const valorSacado = this.saque(valor);
    conta.depositar(valorSacado);
  }

}