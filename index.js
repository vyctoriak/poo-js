import {Cliente} from './Cliente.js';
import {ContaCorrente} from './ContaCorrente.js';

const cliente1 = new Cliente();
const cliente2 = new Cliente();

cliente1.nome = "Ricardo";
cliente1.cpf = 11122233309;

cliente2.nome = "Alice";
cliente2.cpf = 88822233309;

const contaCorrenteRicardo = new ContaCorrente();
contaCorrenteRicardo.agencia = 1001;
contaCorrenteRicardo.depositar(100);

const valorSacado = contaCorrenteRicardo.saque(50);
const valorSacado2 = contaCorrenteRicardo.saque(20);

console.log(valorSacado);
console.log(valorSacado2);
console.log(contaCorrenteRicardo);