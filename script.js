document.getElementById("generuj").onclick = function () {
    const name = document.getElementById("imie").value;
    const fiskalny = document.getElementById("raportfiskalny").value;
    const subiekt = document.getElementById("raportsubiekt").value;
    const termi = document.getElementById("terminal").value;
    const prez = document.getElementById("prezentowe").value;
    const subkarty = document.getElementById("kartysubiekt").value;
    const gotowa = document.getElementById("gotowka").value;
    const symbol = document.getElementById("symbolsklepu").value;

    let currentDate = new Date();
    let month = ("0" + (currentDate.getMonth() + 1)).slice(-2);
    let year = currentDate.getFullYear();

    let x500 = document.getElementById("pln500").value;
    let x200 = document.getElementById("pln200").value;
    let x100 = document.getElementById("pln100").value;
    let x50 = document.getElementById("pln50").value;
    let x20 = document.getElementById("pln20").value;
    let x10 = document.getElementById("pln10").value;
    let x5 = document.getElementById("pln5").value;
    let x2 = document.getElementById("pln2").value;
    let x1 = document.getElementById("pln1").value;

    let y50 = document.getElementById("gr50").value;
    let y20 = document.getElementById("gr20").value;
    let y10 = document.getElementById("gr10").value;
    let y5 = document.getElementById("gr5").value;
    let y2 = document.getElementById("gr2").value;
    let y1 = document.getElementById("gr1").value;

    let zlotowki =
        x500 * 500 +
        x200 * 200 +
        x100 * 100 +
        x50 * 50 +
        x20 * 20 +
        x10 * 10 +
        x5 * 5 +
        x2 * 2 +
        x1 * 1;
    let grosze =
        y50 * 0.5 + y20 * 0.2 + y10 * 0.1 + y5 * 0.05 + y2 * 0.02 + y1 * 0.01;
    let sumakasa = zlotowki + grosze;
    sumakasa = sumakasa.toFixed(2);

    let roz = sumakasa - gotowa;
    roz = roz.toFixed(2);

    if (termi === subkarty) {
        document.getElementById("endmail").innerHTML = `Cześć,

${fiskalny} zł - Raport fiskalny
${subiekt} zł - Raport z Subiekta

${termi} zł - Terminal karty
${prez} zł - Karty prezentowe
${subkarty} zł - Subiekt karty

${gotowa} zł - Gotówka Subiekt
${sumakasa} zł - Gotówka Kasa
${roz} zł - Różnica

Pozdrawiam,
${name} :)`;
    } else if (termi > subkarty) {
        let roznicakarty = termi - subkarty;
        roznicakarty = roznicakarty.toFixed(2);
        document.getElementById("endmail").innerHTML = `Cześć,

${fiskalny} zł - Raport fiskalny
${subiekt} zł - Raport z Subiekta

${termi} zł - Terminal karty
${prez} zł - Karty prezentowe
${subkarty} zł - Subiekt karty
${roznicakarty} zł - Różnica spowodowana pomyłką w sposobie płatności

${gotowa} zł - Gotówka Subiekt
${sumakasa} zł - Gotówka Kasa
${roz} zł - Różnica

PROŚBA:
Proszę o poprawę paragonu z PŁATNOŚĆ GOTÓWKA na PŁATNOŚĆ KARTĄ.
Numer paragonu: PA *popraw*/${symbol}/${month}/${year}

Pozdrawiam,
${name} :)`;
    } else {
        let roznicakarty = subkarty - termi;
        roznicakarty = roznicakarty.toFixed(2);
        document.getElementById("endmail").innerHTML = `Cześć,

${fiskalny} zł - Raport fiskalny
${subiekt} zł - Raport z Subiekta

${termi} zł - Terminal karty
${prez} zł - Karty prezentowe
${subkarty} zł - Subiekt karty
${roznicakarty} zł - Różnica spowodowana pomyłką w sposobie płatności

${gotowa} zł - Gotówka Subiekt
${sumakasa} zł - Gotówka Kasa
${roz} zł - Różnica

PROŚBA:
Proszę o poprawę paragonu z PŁATNOŚĆ KARTĄ na PŁATNOŚĆ GOTÓWKĄ.
Numer paragonu: PA *popraw*/${symbol}/${month}/${year}

Pozdrawiam,
${name} :)`;
    }
};

document.getElementById("wplata").onclick = function () {
    let currentDate = new Date();
    let day = currentDate.getDate();
    let month = ("0" + (currentDate.getMonth() + 1)).slice(-2);
    let year = currentDate.getFullYear();
    let dzisiaj = `${day}.${month}.${year}`;
    const name = document.getElementById("imie").value;
    const punkt1 = document.getElementById("zast").value;
    const punkt2 = document.getElementById("przyp").value;

    document.getElementById("endmail").innerHTML = `Cześć,

W dniu ${dzisiaj} utarg z punktu ${punkt1} został wpłacony na kartę przypisaną do punktu ${punkt2}.

Pozdrawiam,
${name}`;
};
