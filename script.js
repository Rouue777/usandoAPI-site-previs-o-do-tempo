// Elementos 
let pesquisaCidade = document.querySelector(".inputCidade");
let cidade = document.querySelector(".cidade");
let temperatura = document.querySelector(".temp");
let textoPrevisao = document.querySelector(".textoPrevisao");
let umidade = document.querySelector(".umidade");
let imgPrevisao = document.querySelector(".imgPrevisao");

// dados valores

let apiKey = "6ebe026dc50eab136695d88b469c54b5";

//função botão search

function botaoBusca() {
    let nomeCidade = pesquisaCidade.value;


    buscaDados(nomeCidade);

};

// função para buscar informações no servidor

async function buscaDados(nomeCidade) {

    let dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${nomeCidade}&appid=${apiKey}&lang=pt_br&units=metric`).then(Response => Response.json());

    console.log(dados)

    informaçõesNaTela(dados)

};

// função para moldar as informações na tela

function informaçõesNaTela(dados) {
    cidade.innerHTML = `tempo em ${dados.name}`;
    temperatura.innerHTML = `${Math.floor(dados.main.temp)}°C`;
    textoPrevisao.innerHTML = dados.weather[0].description;
    umidade.innerHTML = `umidade ${dados.main.humidity}%`;
    imgPrevisao.src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`;

};