import {Cliente} from './Cliente.js';
import {ContaCorrente} from './ContaCorrente.js';

const cliente1 = new Cliente("Ricardo", 11122233309);
const cliente2 = new Cliente("Alice", 88822233309);

const contaCorrenteRicardo = new ContaCorrente(cliente1, 101);
contaCorrenteRicardo.depositar(500);

const conta2 = new ContaCorrente(cliente2, 102);

contaCorrenteRicardo.transferir(150, conta2);

console.log(ContaCorrente.numeroDeContas);