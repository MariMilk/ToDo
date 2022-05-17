ctrl+h subistitui
### import {escreve} from ".utils/write.js";
### console.log("Vai Náutico");
### console.info("Vai Náutico");
### console.error("Forçando um erro!");
### console.warn("Forçando um alerta!");

### const - constante - não muda. NUNCA. A não ser objetos e referências, aí o conteúdo pode mudar.
### Os identificadores são sempre em camelCase
### const nome = 'Mariana';

### let - variável - pode mudar a qq momento
## let email = 'marileite@yahoo.com';

### var variável pública, livre de escopo
### console.log(`Nome: ${nome} Email: ${email}`);

### if(nome == 'Mariana') { ##vai dar erro de tipo pq nome é uma constante, qdo coloca = estpa atribuindo, para saber se é igual coloca ==, para saber se o valor e o tipo são iguais ===
###    console.log("é igual");
### }
### if(nomeCompleto == 'Mariana') { ###vai dar erro de referência ou digitou errado ou não criou.
###     console.log("é igual");
### }

### if(nomeCompleto  'Mariana') { ### vai dar erro de sintaxe, tá faltando ou tem alguém no lugar errado da sintaxe.
###    console.log("é igual");
### }

### hoisting
### chamar import, function, var e import que ainda não foram criadas, iça a função ou variável. const e let não sofrem Hoisting.
### o JS faz duas análises:
### 1º Análise léxica
### 2º Análise Sintática
### function excreve(x) {
###     console.log("Frase: " + x)
### }
### import {escreve} from ".utils/write.js";
### função arrow é a mesma coisa de cima
### const escreve = (x) => {
###    console.log("Frase")
### }
### escreve(`Seja bem-vindo ${nome}`);
### escreve("Treinamento HTML5, CSS3 e JS");

####################################### 
###  console.log();
###  console.info();
###  console.error();
###  console.warn();
###  objeto .metodo();
###  objeto .propriedade = valor;
### objeto.propriedade
### document é um objeto 
### objeto é uma instância de uma classe
### window é um objeto => métodos (ação) e propriedades (valor)
### window.innerHeight
### window.innerHeight
###########################################
### Em JavaScript existem 7 tipos de erro:
### 1. Type Error - Erro de tipo 
### 2. Reference Error - Erro de referência
### 3. Syntax Error - Erro de Sintaxe
### 4. Eval - executa qq código em JavaScripit
### 5. Range Error
### 6. Internal Error
### 7. URIError (uri é uma parte do endereço do site)

########################################
