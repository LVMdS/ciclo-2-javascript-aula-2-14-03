// O que acontece ao tentar reatribuir um valor a const idade? ou seja, criar uma segunda const idade = 30?
const idade = 25;
const idade = 30;
//console.log(idade); 

//Uncaught TypeError: Assignment to constant variable. Isso ocorre porque uma vez que uma constante é declarada e inicializada, ela não pode ser alterada




////////////////////////////////////////////////////////////////////////


//O que acontece ao chamar a let x dentro e fora do escopo? 

//Escopo refere-se ao contexto no qual as variáveis e funções são definidas e acessadas.
//Nesse caso as chaves delimitam o nosso escopo

{
    let x = 10;
   // console.log(x); 
}
// console.log(x);

//Quando você tenta acessar x fora do bloco onde foi declarado, ocorrerá um erro, indicando que x não está definido. Isso ocorre porque x foi declarado com let e está limitado ao escopo do bloco em que foi definido.

///////////////////////////////////////////////////////////////////////

//Ainda sobre escopo explique a diferença dos console.log

{
    let x = 10;
    var y = 20;
}

// console.log(x);
// console.log(y);

//Quando você tentar imprimir x, ocorrerá um erro indicando que x não está definida. No entanto, quando você imprimir y, funcionará corretamente, pois y foi declarada com var e tem escopo global.

///////////////////////////////////////////////////////////////////////

//O que acontece nessa declaração, explique sobre o Hoisting

//console.log(a); 
var a = 5;
console.log(b);
//let b = 10;

//Portanto, quando você tenta acessar a antes de atribuir um valor a ela (console.log(a)), a variável a já foi declarada (por causa do hoisting), mas ainda não foi atribuída, então o resultado será undefined.
//quando você tenta acessar b antes de declará-la (console.log(b)), isso não funcionará como esperado. Isso ocorre porque variáveis declaradas com let e const não sofrem hoisting na fase de inicialização, apenas na fase de declaração. Então, quando o JavaScript chega à linha console.log(b), b ainda não foi declarada, resultando em um erro do tipo "ReferenceError: b is not defined"

/////////////////////////////////////////////////////////////////////////////////

//No código abaixo apresenta um erro, qual?

var x = 5;
var x = 10;
// console.log(x); 

let y = 15;
let y = 20; 
// console.log(y); 

//Na redeclaração de x, não há erro, pois var permite isso. Porém, na redeclaração de y, ocorrerá um erro porque let não permite a redeclaração de variáveis no mesmo escopo. O erro será do tipo "SyntaxError: Identifier 'y' has already been declared".


//// Escreva um programa que print a primeira letra dessa variavel 
let nomeCompleto = 'eduardo';

//sua lógica para pegar a primeira letra 
const letraInicial = nomeCompleto.charAt(0);
console.log(letraInicial);
// ou
const letraInicial = nomeCompleto[0];
console.log(letraInicial);


//A primeira letra de uma string em JavaScript é acessada pela posição 0, já que a indexação começa em 0. Portanto, para obter a primeira letra da variável nomeCompleto, é utilizada a expressão nomeCompleto.charAt(0) ou nomeCompleto[0].



