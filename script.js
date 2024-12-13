document.getElementById("generateEmailWithRaport").onclick = function () {
    let name = document.getElementById("name").value;
    let raportFromPrinter = Number(
        document.getElementById("raportFromPrinter").value
    );
    let raportFromSubiekt = Number(
        document.getElementById("raportFromSubiekt").value
    );
    let raportFromCardTerminal = Number(
        document.getElementById("raportFromCardTerminal").value
    );
    let giftCardPayments = Number(
        document.getElementById("giftCardPayments").value
    );
    let cardPaymentsSubiekt = Number(
        document.getElementById("cardPaymentsSubiekt").value
    );
    let cashPayments = Number(document.getElementById("cashPayments").value);
    let shopID = document.getElementById("shopID").value;

    let currentDate = new Date();
    let month = ("0" + (currentDate.getMonth() + 1)).slice(-2);
    let year = currentDate.getFullYear();

    let pln500 = Number(document.getElementById("pln500").value);
    let pln200 = Number(document.getElementById("pln200").value);
    let pln100 = Number(document.getElementById("pln100").value);
    let pln50 = Number(document.getElementById("pln50").value);
    let pln20 = Number(document.getElementById("pln20").value);
    let pln10 = Number(document.getElementById("pln10").value);
    let pln5 = Number(document.getElementById("pln5").value);
    let pln2 = Number(document.getElementById("pln2").value);
    let pln1 = Number(document.getElementById("pln1").value);
    let gr50 = Number(document.getElementById("gr50").value);
    let gr20 = Number(document.getElementById("gr20").value);
    let gr10 = Number(document.getElementById("gr10").value);
    let gr5 = Number(document.getElementById("gr5").value);
    let gr2 = Number(document.getElementById("gr2").value);
    let gr1 = Number(document.getElementById("gr1").value);

    let cashSum =
        pln500 * 500 +
        pln200 * 200 +
        pln100 * 100 +
        pln50 * 50 +
        pln20 * 20 +
        pln10 * 10 +
        pln5 * 5 +
        pln2 * 2 +
        pln1 * 1 +
        gr50 * 0.5 +
        gr20 * 0.2 +
        gr10 * 0.1 +
        gr5 * 0.05 +
        gr2 * 0.02 +
        gr1 * 0.01;

    let cashDiff = cashSum - cashPayments;

    let allCardPayments = raportFromCardTerminal + giftCardPayments;

    if (raportFromPrinter > raportFromSubiekt) {
        alert(
            `Prawdopodobnie jakiś z paragonów na kwotę ${
                raportFromPrinter - raportFromSubiekt
            } zł został podwójnie zafiskalizowany. Napisz stosowne oświadczenie i koniecznie daj znać o tym Milence!`
        );
    } else if (raportFromPrinter < raportFromSubiekt) {
        alert(
            `Prawdopodobnie jakiś z paragonów na kwotę ${
                raportFromSubiekt - raportFromPrinter
            } zł nie został zarejestrowany na drukarce fiskalnej, z której otrzymałeś raport. Sprawdź statusy fiskalne w Subiekcie! Jeśli wszystkie się zgadzają, istnieje szansa, że paragon mógł zostać wydrukowany na innej drukarce fiskalnej! Koniecznie skontaktuj się z Mileną, aby wyjaśnić ten problem!`
        );
    }

    if (allCardPayments === cardPaymentsSubiekt) {
        document.getElementById("readyToSendEmail").innerHTML = `Cześć,

${raportFromPrinter.toFixed(2)} zł - Raport fiskalny
${raportFromSubiekt.toFixed(2)} zł - Raport z Subiekta

${raportFromCardTerminal.toFixed(2)} zł - Terminal karty
${giftCardPayments.toFixed(2)} zł - Karty prezentowe
${cardPaymentsSubiekt.toFixed(2)} zł - Subiekt karty

${cashPayments.toFixed(2)} zł - Gotówka Subiekt
${cashSum.toFixed(2)} zł - Gotówka Kasa
${cashDiff.toFixed(2)} zł - Różnica

Pozdrawiam,
${name} :)`;
    } else if (allCardPayments > cardPaymentsSubiekt) {
        let cardPaymentsDiff = allCardPayments - cardPaymentsSubiekt;
        document.getElementById("readyToSendEmail").innerHTML = `Cześć,

${raportFromPrinter.toFixed(2)} zł - Raport fiskalny
${raportFromSubiekt.toFixed(2)} zł - Raport z Subiekta

${raportFromCardTerminal.toFixed(2)} zł - Terminal karty
${giftCardPayments.toFixed(2)} zł - Karty prezentowe
${cardPaymentsSubiekt.toFixed(2)} zł - Subiekt karty
${cardPaymentsDiff.toFixed(
    2
)} zł - Różnica spowodowana pomyłką w sposobie płatności

${cashPayments.toFixed(2)} zł - Gotówka Subiekt
${cashSum.toFixed(2)} zł - Gotówka Kasa
${cashDiff.toFixed(2)} zł - Różnica

PROŚBA:
Proszę o poprawę paragonu z PŁATNOŚĆ GOTÓWKA na PŁATNOŚĆ KARTĄ.
Numer paragonu: PA *popraw*/${shopID}/${month}/${year}

Pozdrawiam,
${name} :)`;
    } else if (allCardPayments < cardPaymentsSubiekt) {
        let cardPaymentsDiff = cardPaymentsSubiekt - allCardPayments;
        document.getElementById("readyToSendEmail").innerHTML = `Cześć,

${raportFromPrinter.toFixed(2)} zł - Raport fiskalny
${raportFromSubiekt.toFixed(2)} zł - Raport z Subiekta

${raportFromCardTerminal.toFixed(2)} zł - Terminal karty
${giftCardPayments.toFixed(2)} zł - Karty prezentowe
${cardPaymentsSubiekt.toFixed(2)} zł - Subiekt karty
${cardPaymentsDiff.toFixed(
    2
)} zł - Różnica spowodowana pomyłką w sposobie płatności

${cashPayments.toFixed(2)} zł - Gotówka Subiekt
${cashSum.toFixed(2)} zł - Gotówka Kasa
${cashDiff.toFixed(2)} zł - Różnica

PROŚBA:
Proszę o poprawę paragonu z PŁATNOŚĆ KARTĄ na PŁATNOŚĆ GOTÓWKĄ.
Numer paragonu: PA *popraw*/${shopID}/${month}/${year}

Pozdrawiam,
${name} :)`;
    }
};

document.getElementById("emailAboutDeposit").onclick = function () {
    let currentDate = new Date();
    let day = currentDate.getDate();
    let month = ("0" + (currentDate.getMonth() + 1)).slice(-2);
    let year = currentDate.getFullYear();
    let today = `${day}.${month}.${year}`;
    let name = document.getElementById("name").value;
    let currentShop = document.getElementById("shopID").value;
    let mainShop = document.getElementById("mainShop").value;

    document.getElementById("readyToSendEmail").innerHTML = `Cześć,

W dniu ${today} utarg z punktu ${currentShop} został wpłacony na kartę przypisaną do punktu ${mainShop}.

Pozdrawiam,
${name}`;
};

document.getElementById("copyRaportInput").onclick = function () {
    let valueFromSubiekt = document.getElementById("raportFromSubiekt").value;
    document.getElementById("raportFromPrinter").value = valueFromSubiekt;
};

document.getElementById("copySubiektCardPayments").onclick = function () {
    let valueFromSubiekt = document.getElementById("cardPaymentsSubiekt").value;
    document.getElementById("raportFromCardTerminal").value = valueFromSubiekt;
};

document.getElementById("copyFromTextArea").onclick = function () {
    let text = document.getElementById("readyToSendEmail").innerHTML;
    navigator.clipboard.writeText(text);
};
