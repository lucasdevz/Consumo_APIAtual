//DOM - Informa os objetos do HTML que serão manipulados

const dcidade = document.querySelector('.input-cidade')
const botao = document.querySelector('.botao-busca')
const cidade = document.querySelector('.cidade')
const temperatura = document.querySelector('.temp')
const icone = document.querySelector('#icone')
const previsao = document.querySelector('.texto-previsao')
const key = 'd7478eea3ef4961e8c9bcce5fce9f06e'

//evento

botao.addEventListener('click',buscar_cidade)

//função

async function buscar_cidade(){
    procura_cidade = dcidade.value
    
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${procura_cidade}&appid=${key}&lang=pt_br&units=metric`).then(resposta => resposta.json())

    console.log(dados)

    cidade.textContent = `Tempo em ${dados.name}`
    temperatura.textContent = `${(dados.main.temp).toFixed(0)}°C`
    previsao.textContent = `${dados.weather[0].description}`
    icone.src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`

}
