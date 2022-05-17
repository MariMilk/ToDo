//banco de dados noSQL- Orientado a documentos. MongoDB, Firebase, Cassandra

const db = [
    {
      id: 1,
      title: "Concluir App Conexão Arte",
      steps: [
        { step: "Ajustar textos" },
        { step: "Trocar imagens para imagens públicas" },
        { step: "Publicar no Expo" },
        { step: "Publicar no Expo Store Connect" },
      ],
      done: false,
      dueDate: "2022-05-06",
      reminder: "2022-05-02 10:00",
    },
  
    {
      id: 2,
      title: "Aula 4 Fiap - Avanade",
      steps: [{ step: "Atributos Globais" }, { step: "Estrutura CSS" }],
      done: true,
      dueDate: "2022-04-28",
    },
  ];
  
  //getAllTasks(db);
console.log(db[0].title);


const form = document.querySelector("#addNewTask");
const newTask = document.querySelector("#inputTxtNewTask");
/*qdo estiver enviando o formulário, vc pára.*/
form.addEventListener("submit", (e) => {
  //Form faz um favor? Pois não! Não faz nada...
  e.preventDefault();
});

newTask.addEventListener("keyup", (e)=>{
    e.preventDefault(); /*parar o comportamento padrão, não quero que execute o padrão do evento*/
    e.stopPropagation();/*para eventos de click, vc clica no elemento que tem outro elemento em volta para ter controle total do evento, não ocorrer mais de um evento*/ 
    if(e.key == 'Enter') {
        alert(newTask.value);

        db.push([{title: newTask.value}]);

        newTask.value = '';
        console.log(e)
    }
    
    /* e significa event (evento). As informações do evento estão dentro da letra e*/
});

//exemplo de array:
//const frutas = ['maçã', 'banana', 'abacaxi', 'abacate'];
// frutas[3];
//frutas.lenght;
//frutas.at(-1); pega o último elemento se não colocar at dá erro
//frutas[frutas.lenght - 1]; último elemento
//O const abaixo segue a notação JavaScript Object Notation - JSON:
//const dados = {
    //nome:'Mariana',
    //idade: 36,
    //programador: true,
    //acao: () => {
        //console.log('Executando uma ação')
   // },

//};
//Objeto é um conjunto de atributos (propriedades ou valores) e métodos (ações ou funções)
//console.log(dados.nome);
//console.log('Idade: ', dados.idade);
//dados.acao(); 
//no TypeScript dá para fazer uma interface:
//interface iDados {
    //nome: string;
    //idade: number;
    //programador: Boolean;
//}