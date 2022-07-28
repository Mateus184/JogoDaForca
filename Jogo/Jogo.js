let tentativas = 5;
let listaDinamica = []; //recebe as letras que foram acertadas
let produtoSorteado = []; // recebe o produto que foi sorteado pela função criarProdutoSecreto
let letrasProdutoSorteado = []; // recebe as letras do produto sorteado
let letraserradas = []

const produtos = [
    {
        nome: "TOSTADORA"
    },
    {
        nome: "LICUADORA"
    },
    {
        nome: "MICROONDAS"
    },
    {
        nome: "LAVADORA"
    },
    {
        nome: "CALEFACTOR"
    }
];

           // let desativa = document.querySelector("#DICA");
        
           // function DesativaBotao() {
           //     DICA.addEventListener("change", DesativaBotao);
           // if (document.querySelector("#DICA").value === "") {
            //    button.disabled true; 
           // }
    //}

criarProdutoSorteado();
function criarProdutoSorteado() {
    const codigoProduto = parseInt(Math.random() * produtos.length) // sorteia o código do produto e armazena na variavel codigoProduto
    produtoSorteado = produtos[codigoProduto].nome;    // pelo codigo do produto ele busca o nome deste produto no array produtos e armazena do array produtoSecretoSorteado
    letrasProdutoSorteado = produtoSorteado.split(""); // faz o split do produto sorteado e armazena no array letrasProdutoSorteado as letras deste produto
    console.log(produtoSorteado)
    console.log(letrasProdutoSorteado)

}
mostrarProdutoNaTela();
function mostrarProdutoNaTela() {
    const produtoTela = document.getElementById("produto-sorteado"); // pega o elemento produto secreto do html para mostrar os campos com --------- para serem preenchidos
    produtoTela.innerHTML = ""; // para não aparecer a palavra na tela, a variavel produtoTela recebe "vazio"

    // esse for é para aparecer na tela, conforme o produto sorteado, a quantidade de traços em branco

    for (i = 0; i < produtoSorteado.length; i++) { // enquanto a lista dinamica estiver vazia, o elemento produto secreto vai aparecer na tela espaços em branco

        if (listaDinamica[i] == undefined) { //se no indice da lista, na posição i não estiver nada
            listaDinamica[i] = "&nbsp;"  // o indice recebe um "espaço"
            produtoTela.innerHTML = produtoTela.innerHTML + "<div class = 'letras'>" + listaDinamica[i] + "</div>" // para escrever o "espaço em branco". a div class = letras é para trazer traçadinho
        }
        else { // se não ele vai ser preenchido com as letras que estiverem na lista dinamica
            produtoTela.innerHTML = produtoTela.innerHTML + "<div class = 'letras'>" + listaDinamica[i] + "</div>" // para escrever no espaço em branco a letra que estiver na lista dinamica, conforme ir acertando, a lista dinamica vai sendo alimentada e a letra aparece
        }
    }
}

function verificarLetraEscolhida(letra) { // esta função é chamada no click do teclado
    
    if (tentativas > 0) // só vai fazer as funções abaixo se o numero de tentativas for maior que zero
        mudarStyleLetra("tecla-" + letra); //vai mudar a cor da letra no teclado para indicar que aquela letra já foi escolhida
        comparaListas(letra); // vai comparar a letra escolhida com as letras do produto sorteado
        mostrarProdutoNaTela(); // escrever no espaço a letra escolhida
        
    }


function mudarStyleLetra(tecla) { // muda a cor dos botoes conforme a letra escolhida  
    document.getElementById(tecla).style.background = "#FF0000";
    document.getElementById(tecla).style.color = "#FFFFFF";
}

function comparaListas(letra) {
    const posicao = produtoSorteado.indexOf(letra) // recebe a letra digitada no teclado e verifica em qual posição do produtoSecretoSorteado ela se encontra
    if (posicao < 0) { // se a posição for menor que zero, é pq a letra não pertence a palavra, então diminui as tentativas, pq errou
        tentativas--
        alert("Ops, esta letra não existe no produto, tente outra vez!")
        alert("Ainda restam" + tentativas + " tentativas.")
        letraserradas.push(letra);
        console.log(letraserradas);
        
        
        
    }

    else { // vai cair nesta condição pq encontrou uma posição no array produtoSorteado que tem a letra escolhida
        for (i = 0; i < produtoSorteado.length; i++) {
            if (produtoSorteado[i] == letra) { // verifica qual posição do array produtoSorteado possui a letra escolhida na tela
                //letrasarmazenadas.push(letra); // amrmazena a letra digitada se for correta  no array letras armazenadas
                listaDinamica [i] = letra; //armazena a letra no array listaDinamica, na mesma posição do array produtoSorteado
                console.log(listaDinamica);
            } 
        }
       
    }
    
}



let vitoria = true; // quando todos os indices da lista dinamica forem iguais aos indices do produtoSorteado, significa que acertou a palavra
for (i = 0; i < produtoSorteado.length; i++) {
    if (produtoSorteado[i] != listaDinamica[i]) {
        vitoria = false;
    }
}

if (vitoria == true) {
    tentativas = 0;
    
}

function btnReiniciar() {
    window.location.reload(true);
    criarProdutoSorteado();
    mostrarProdutoNaTela();

}

function dica1() {
    const alfabeto = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    var letraDaDica = " " ; 
    var posicao_a = 0; // posicao_a refere-se a posicao da letra no produto sorteado
    var posicao_b = 0; // posicao_b refere-se a posicao da letra já usada
    for(i=0; i<alfabeto.length;i++){
        letraDaDica = alfabeto[i];
        posicao_a = produtoSorteado.indexOf(letraDaDica); // saber se a letraDica tem no produtoSorteado
        posicao_b = listaDinamica.indexOf(letraDaDica); // saber se a letraDica já foi usada
        if(posicao_a >= 0 && posicao_b < 0) // se a posição_a for maior ou igual a zero significa que ele encontrou no produtoSorteado; se a posição_b for menor que zero significa que ele não encontrou a letra nas letras usadas, então a dica esta ok
            {break};//quando achar uma letra que contenha na palavra e nao nas usadas, pega e sai do loop
        
     };
     verificarLetraEscolhida(letraDaDica);
    };
     

    
    
    
    
    





