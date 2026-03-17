const convertButton = document.querySelector(".convert-button");
const currencySelect = document.querySelector(".currency-select");
const currencySelectFrom = document.querySelector(".currency-select-from");

async function convertCurrency() {
    const inputCurrencyValue = document.querySelector(".input-currency").value;
    const currencyValueToConvert = document.querySelector(".currency-value");
    const currencyValueConverted = document.querySelector(".currency-value-converted");

    const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,CNY-BRL,BTC-BRL").then(response => response.json());

    const dollarToday = data.USDBRL.high;
    const euroToday = data.EURBRL.high;
    const yuanToday = data.CNYBRL.high;
    const bitcoinToday = data.BTCBRL.high;
    const realToday = 1;

    const currencyNameMoeda = document.querySelector(".currency-name");
    const currencyLogoMoeda = document.querySelector(".currency-logo-moeda");
    const currency = document.querySelector(".currency");
    const logoMoeda = document.querySelector(".logo-moeda");

    if (currencySelectFrom.value == "dollar") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(dollarToday);

        currency.innerHTML = "Dólar Americano";
        logoMoeda.src = "./img/dollar.png";
    }

        if (currencySelectFrom.value == "euro") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(euroToday);

        currency.innerHTML = "Euro";
        logoMoeda.src = "./img/euro.png";
    }

    if (currencySelectFrom.value == "yuan") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("zh-CN", {
            style: "currency",
            currency: "CNY"
        }).format(yuanToday);

        currency.innerHTML = "Yuan";
        logoMoeda.src = "./img/yuan.png";
    }

    if (currencySelectFrom.value == "bitcoin") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC"
        }).format(bitcoinToday);

        currency.innerHTML = "Bitcoin";
        logoMoeda.src = "./img/bitcoin.png";
    }

    if (currencySelectFrom.value == "real") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(realToday);

        currency.innerHTML = "Real";
        logoMoeda.src = "./img/brasil.png";
    }

    /* Valores convertidos */
    if (currencySelect.value == "dollar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue * (dollarToday /  currencyValueToConvert.innerHTML));

        currencyNameMoeda.innerHTML = "Dólar Americano";
        currencyLogoMoeda.src = "./img/dollar.png";
    }

    if (currencySelect.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue * (euroToday / currencyValueToConvert.innerHTML));

        currencyNameMoeda.innerHTML = "Euro";
        currencyLogoMoeda.src = "./img/euro.png";
    }

    if (currencySelect.value == "yuan") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("zh-CN", {
            style: "currency",
            currency: "CNY"
        }).format(inputCurrencyValue * (yuanToday / currencyValueToConvert.innerHTML));

        currencyNameMoeda.innerHTML = "Yuan";
        currencyLogoMoeda.src = "./img/yuan.png";
    }

    if (currencySelect.value == "bitcoin") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue * (bitcoinToday / currencyValueToConvert.innerHTML));

        currencyNameMoeda.innerHTML = "Bitcoin";
        currencyLogoMoeda.src = "./img/bitcoin.png";
    }

    if (currencySelect.value == "real") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue * (realToday / currencyValueToConvert.innerHTML));

        currencyNameMoeda.innerHTML = "Real";
        currencyLogoMoeda.src = "./img/brasil.png";
    }

    /*currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue);*/
}

currencySelectFrom.addEventListener("change", convertCurrency);
currencySelect.addEventListener("change", convertCurrency);
convertButton.addEventListener("click", convertCurrency);