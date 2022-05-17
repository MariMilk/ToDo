//SOLID

// Princípios de boas práticas de programação

//S - SRP - Single Reponsabilitu Principle
//Pincípio da Responsabilidade Única - uma classe, função deve ter uma única tarefa

// Funções bem escritas devem ser mantidas simples, curtas e realizando um úci objetivo

//Quando precisamos acessar uma função em outro arquivo, é necessário exportar: 
export function addTask() {
    alert("cadastrando uma nova tarefa");
}
export function removeTask() {
    alert("Removendo uma nova tarefa");
}
export function updateTask(){
    alert("Alterando uma nova tarefa");
}
export function getAllTask() {
    alert("Listando todas as tarefas");
}
export function getTaskById() {
    alert("Exibindo uma tarefa");
}

//quando for umportar do arquivo domFunction, o JS não sabe quantas funções estão disponíveis

//Quando eu preciso extrair qq recurso, usando desestruturação (destructoin):
//import {addTask} from '.domFunctions.js