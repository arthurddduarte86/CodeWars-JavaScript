/*
altERnaTIng cAsE <=> ALTerNAtiNG CaSe
Define String.prototype.toAlternatingCase (or a similar function/method such as to_alternating_case/toAlternatingCase/ToAlternatingCase in your selected language; see the initial solution for details) such that each lowercase letter becomes uppercase and each uppercase letter becomes lowercase. For example:

"hello world".toAlternatingCase() === "HELLO WORLD"
"HELLO WORLD".toAlternatingCase() === "hello world"
"hello WORLD".toAlternatingCase() === "HELLO world"
"HeLLo WoRLD".toAlternatingCase() === "hEllO wOrld"
"12345".toAlternatingCase()       === "12345"                   // Non-alphabetical characters are unaffected
"1a2b3c4d5e".toAlternatingCase()  === "1A2B3C4D5E"
"String.prototype.toAlternatingCase".toAlternatingCase() === "sTRING.PROTOTYPE.TOaLTERNATINGcASE"
As usual, your function/method should be pure, i.e. it should not mutate the original string.
*/

/////////////////////////////////////////////////////////////////////////////////////
String.prototype.toAlternatingCase = function () {
    return this.split('').map(function(char){
      return char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase();
      }).join('');
    // Define your method here :)
  };

/*
Nesta solução, this.split('') divide a string em um array de caracteres, e map é usado para
 iterar sobre cada caractere. Dentro da função de mapeamento, usamos um operador ternário 
 para verificar se o caractere é maiúsculo ou minúsculo e, em seguida, convertemos para o caso oposto. 
 Finalmente, join('') é usado para unir os caracteres de volta em uma única string.


Abaixo é uma espécie de IF...ELSE

condição ? valorSeVerdadeiro : valorSeFalso;


char === char.toUpperCase(): 
Esta parte verifica se o caractere atual é maiúsculo. 
Se for verdadeiro, significa que o caractere já está em maiúsculo, 
então retornamos char.toLowerCase() para convertê-lo em minúsculo.

Caso contrário, se o caractere não for maiúsculo (ou seja, é minúsculo), 
o operador : entra em ação e retorna char.toUpperCase(), convertendo o caractere para maiúsculo. 

*/   


// Outra solução
String.prototype.toAlternatingCase = function () {
    return this.replace(/[a-zA-z]/g, function(char){
      return char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase();
    })
    // Define your method here :)
  }

/**
Nessa solução, a expressão regular [a-zA-Z] é usada para encontrar todas as letras maiúsculas
e minúsculas na string. O método replace é então utilizado para substituir 
cada letra pela sua versão alternada (maiúscula ou minúscula) 
com base na lógica do operador ternário dentro da função de substituição.

    /

Delimitadores de expressão regular em JavaScript. 
Eles indicam onde a expressão regular começa e termina.

    [a-zA-Z]

É uma classe de caracteres que corresponde a qualquer caractere alfabético, 
seja minúsculo (de a a z) ou maiúsculo (de A a Z).

    g

É uma flag da expressão regular que significa "global", 
indicando que a correspondência deve ser feita em toda a string, e não apenas na primeira ocorrência.

 */




// Outra solução

String.prototype.toAlternatingCase = function () {
    return this.split("").map(a => a === a.toUpperCase() ? a.toLowerCase(): a.toUpperCase()).join('');
    // Define your method here :)
  }

