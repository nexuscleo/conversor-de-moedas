const botaoConverter = document.querySelector(".botao-converter");
const converterDe = document.querySelector(".converter-de");
const converterPara = document.querySelector(".converter-para");

const moedasConfig = {
    "real": {
        code: "BRL",
        name: "Real",
        locale: "pt-BR",
        img: "./img/brasil.png"
    },
    "dollar": {
        code: "USD",
        name: "Dólar Americano",
        locale: "en-US",
        img: "./img/dollar.png"
    },
    "euro": {
        code: "EUR",
        name: "Euro",
        locale: "de-DE",
        img: "./img/euro.png"
    },
    "yuan": {
        code: "CNY",
        name: "Yuan Chinês",
        locale: "zh-CN",
        img: "./img/yuan.png"
    },
    "bitcoin": {
        code: "BTC",
        name: "Bitcoin",
        locale: "en-US",
        img: "./img/bitcoin.png"
    }
};

async function converterMoeda() {
    const valorEntradaRaw = document.querySelector(".valor-entrada").value;
    const valorEntrada = parseFloat(valorEntradaRaw);
    
    if (isNaN(valorEntrada) || valorEntrada <= 0)
        alert("Por favor, insira um valor válido.");
        return;
    
    const valorMoedaDe = document.querySelector(".valor-moeda-de");
    const valorMoedaPara = document.querySelector(".valor-moeda-para");
    const nomeMoedaDe = document.querySelector(".nome-moeda-de");
    const logoMoedaDe = document.querySelector(".logo-moeda-de");
    const nomeMoedaPara = document.querySelector(".nome-moeda-para");
    const logoMoedaPara = document.querySelector(".logo-moeda-para");

    const configDe = moedasConfig[converterDe.value];
    const configPara = moedasConfig[converterPara.value];

    let cotacao = 1;

    if (configDe.De !== configPara.code) {
        try {
            const par = `${configDe.code}-${configPara.code}`;
            const url = `https://economia.awesomeapi.com.br/last/${par}`;
            const response = await fetch(url);

            if (!response.ok) {
                throw new Error("Par de não suportado, erro na API");
            }
            const data = await response.json();
            const chaveApi = `${configDe.code}${configPara.cade}`;
            cotacao = parseFloat(data[chaveApi].high);
        }
        catch (error) {
            console.error(error);
            alert("Não foi possível obter a cotação para as moedas selecionadas.");
            return;
        }
    }

    const valorConvertido = valorEntrada * cotacao;

    nomeMoedaDe.innerHTML = configDe.name;
    logoMoedaDe.src = configDe.img;
    valorMoedaDe.innerHTML = new Intl.NumberFormat(configDe.locale, {
        style: "currency",
        currency: configDe.code
    }).format(valorEntrada);

    nomeMoedaPara.innerHTML = configPara.name;
    logoMoedaPara.src = configPara.img;
    valorMoedaPara.innerHTML = new Intl.NumberFormat(configPara.locale, {
        style: "currency",
        currency: configPara.code
    }).format(valorConvertido);
}

converterDe.addEventListener("change", converterMoeda);
converterPara.addEventListener("change", converterMoeda);
botaoConverter.addEventListener("click", converterMoeda);