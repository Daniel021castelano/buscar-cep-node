const { error } = require("node:console");

// buca o Cep
function buscarCep() {
    const cep = document.getElementById("cepInput").value;

    validarcep(cep);
    salvarcep(cep);
}

/* 
Aqui valida o cep tiver 8 digitos
e retorna erro se não houver 
*/
function validarcep(cep) {
    if (cep.length != 8)
      alert('CEP inválido')
};

async function salvarcep(cep) {

    // monta a url usando o cep digitado
    let url = `https://viacep.com.br/ws/${cep}/json/`;

    // faz a requisição para a API
    let resposta = await fetch(url);

    // transforma a resposta em json
    let dados = await resposta.json();

    // chama a função que vai preencher os inputs
    preenchercep(dados);
}


// Função que coloca os dados nos campos da página
function preenchercep(dados) {

    document.getElementById("bairro").value = dados.bairro;
    document.getElementById("uf").value = dados.uf;
    document.getElementById("ddd").value = dados.ddd;
    console.table(dados)
}

function limparcep() {

    document.getElementById("cepInput").value = "";
    document.getElementById("bairro").value = "";
    document.getElementById("uf").value = "";
    document.getElementById("ddd").value = "";

}

//TODO: Criar um servidor local com express do nodejs
//TODO: Criar um validador de Cep se não houver alerta