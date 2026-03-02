const convertButton = document.querySelector(".convert-button");
const currencySelect = document.querySelector(".currency-select");

function convertCurrency() {
    const inputCurrencyValue = document.querySelector(".input-currency").value;
    const currencyValueToConvert = document.querySelector(".currency-value");
    const currencyValueConverted = document.querySelector(".currency-value-converted");
    const currencyNameMoeda = document.querySelector(".currency-name");
    const currencyLogoMoeda = document.querySelector(".currency-logo-moeda");

    const dollarToday = 5.25;
    const euroToday = 6.20;
    const yuanToday = 0.80;
    const bitcoinToday = 250000.00;

    if (currencySelect.value === "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday);

        currencyNameMoeda.innerHTML = "Euro";
        currencyLogoMoeda.src = "./img/euro.png";
    }

    if (currencySelect.value === "dollar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dollarToday);

        currencyNameMoeda.innerHTML = "Dollar";
        currencyLogoMoeda.src = "./img/dollar.png";
    }

    if (currencySelect.value === "yuan") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("zh-CN", {
            style: "currency",
            currency: "CNY"
        }).format(inputCurrencyValue / yuanToday);

        currencyNameMoeda.innerHTML = "Yuan";
        currencyLogoMoeda.src = "./img/yuan.png";
    }

    if (currencySelect.value === "bitcoin") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue / bitcoinToday);

        currencyNameMoeda.innerHTML = "Bitcoin";
        currencyLogoMoeda.src = "./img/bitcoin.png";
    }

    if (currencySelect.value === "real") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue);

        currencyNameMoeda.innerHTML = "Real";
        currencyLogoMoeda.src = "./img/brasil.png";
    }

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue);

}

convertButton.addEventListener("click", convertCurrency);