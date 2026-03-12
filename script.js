const convertButton = document.querySelector(".convert-button");
const currencySelect = document.querySelector(".currency-select");

const CURRENCIES = {
    dollar: {
        name: "Dólar Americano",
        logo: "./img/dollar.png",
        locale: "en-US",
        currency: "USD",
        apiKey: "USDBRL"
    },
    euro: {
        name: "Euro",
        logo: "./img/euro.png",
        locale: "de-DE",
        currency: "EUR",
        apiKey: "EURBRL"
    },
    yuan: {
        name: "Yuan",
        logo: "./img/yuan.png",
        locale: "zh-CN",
        currency: "CNY",
        apiKey: "CNYBRL"
    },
    bitcoin: {
        name: "Bitcoin",
        logo: "./img/bitcoin.png",
        locale: "en-US",
        currency: "BTC",
        apiKey: "BTCBRL"
    },
    real: {
        name: "Real",
        logo: "./img/brasil.png",
        locale: "pt-BR",
        currency: "BRL",
        apiKey: "BRL"
    }
};

async function convertCurrency() {
    const inputCurrencyValue = document.querySelector(".input-currency").value;
    const currencyValueToConvert = document.querySelector(".currency-value");
    const currencyValueConverted = document.querySelector(".currency-value-converted");

    const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,CNY-BRL,BTC-BRL").then(response => response.json());

    const selectedCurrencyValue = currencySelect.value;
    const currencyData = CURRENCIES[selectedCurrencyValue];
    const currencyRate = data[currencyData.apiKey].high;

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue);

    currencyValueConverted.innerHTML = new Intl.NumberFormat(currencyData.locale, {
        style: "currency",
        currency: currencyData.currency
    }).format(inputCurrencyValue / currencyRate);

    const currencyNameMoeda = document.querySelector(".currency-name");
    const currencyLogoMoeda = document.querySelector(".currency-logo-moeda");
    currencyNameMoeda.innerHTML = currencyData.name;
    currencyLogoMoeda.src = currencyData.logo;
}

currencySelect.addEventListener("change", convertCurrency);
convertButton.addEventListener("click", convertCurrency);