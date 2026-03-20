const botaoConverter = document.querySelector(".botao-converter");
const converterDe = document.querySelector(".converter-de");
const converterPara = document.querySelector(".converter-para");

async function convertCurrency() {
    const valorEntrada = document.querySelector(".valor-entrada").value;
    const valorMoedaDe = document.querySelector(".valor-moeda-de");
    const valorMoedaPara = document.querySelector(".valor-moeda-para");

    const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,CNY-BRL,BTC-BRL").then(response => response.json());

    const dollarToday = data.USDBRL.high;
    const euroToday = data.EURBRL.high;
    const yuanToday = data.CNYBRL.high;
    const bitcoinToday = data.BTCBRL.high;
    const realToday = 1;

    const nomeMoedaDe = document.querySelector(".nome-moeda-de");
    const logoMoedaDe = document.querySelector(".logo-moeda-de");
    const nomeMoedaPara = document.querySelector(".nome-moeda-para");
    const logoMoedaPara = document.querySelector(".logo-moeda-para");

    if (converterDe.value == "dollar") {
        valorMoedaDe.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(euroDollar);

        nomeMoedaDe.innerHTML = "Dólar Americano";
        logoMoedaDe.src = "./img/dollar.png";
    }

        if (converterDe.value == "euro") {
        valorMoedaDe.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(valorEntrada);

        nomeMoedaDe.innerHTML = "Euro";
        logoMoedaDe.src = "./img/euro.png";
    }

    if (converterDe.value == "yuan") {
        valorMoedaDe.innerHTML = new Intl.NumberFormat("zh-CN", {
            style: "currency",
            currency: "CNY"
        }).format(valorEntrada);

        nomeMoedaDe.innerHTML = "Yuan";
        logoMoedaDe.src = "./img/yuan.png";
    }

    if (converterDe.value == "bitcoin") {
        valorMoedaDe.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC"
        }).format(valorEntrada);

        nomeMoedaDe.innerHTML = "Bitcoin";
        logoMoedaDe.src = "./img/bitcoin.png";
    }

    if (converterDe.value == "real") {
        valorMoedaDe.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(valorEntrada);

        nomeMoedaDe.innerHTML = "Real";
        logoMoedaDe.src = "./img/brasil.png";
    }

    /* Valores convertidos */
    if (converterPara.value == "dollar") {
        valorMoedaPara.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(valorEntrada / dollarToday);

        nomeMoedaPara.innerHTML = "Dólar Americano";
        logoMoedaPara.src = "./img/dollar.png";
    }

    if (converterPara.value == "euro") {
        valorMoedaPara.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(valorEntrada / euroToday);

        nomeMoedaPara.innerHTML = "Euro";
        logoMoedaPara.src = "./img/euro.png";
    }

    if (converterPara.value == "yuan") {
        valorMoedaPara.innerHTML = new Intl.NumberFormat("zh-CN", {
            style: "currency",
            currency: "CNY"
        }).format(valorEntrada / yuanToday);

        nomeMoedaPara.innerHTML = "Yuan";
        logoMoedaPara.src = "./img/yuan.png";
    }

    if (converterPara.value == "bitcoin") {
        valorMoedaPara.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC"
        }).format(valorEntrada / bitcoinToday);

        nomeMoedaPara.innerHTML = "Bitcoin";
        logoMoedaPara.src = "./img/bitcoin.png";
    }

    if (converterPara.value == "real") {
        valorMoedaPara.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(valorEntrada / realToday);

        nomeMoedaPara.innerHTML = "Real";
        logoMoedaPara.src = "./img/brasil.png";
    }

    /*currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue);*/
}

converterDe.addEventListener("change", convertCurrency);
converterPara.addEventListener("change", convertCurrency);
botaoConverter.addEventListener("click", convertCurrency);