document.getElementById("generuj").onclick = function () {
    let name = document.getElementById("imie").value;
    let fiskalny = Number(document.getElementById("raportfiskalny").value);
    let subiekt = Number(document.getElementById("raportsubiekt").value);
    let termi = Number(document.getElementById("terminal").value);
    let prez = Number(document.getElementById("prezentowe").value);
    let subkarty = Number(document.getElementById("kartysubiekt").value);
    let gotowa = Number(document.getElementById("gotowka").value);
    let symbol = document.getElementById("symbolsklepu").value;

    let currentDate = new Date();
    let month = ("0" + (currentDate.getMonth() + 1)).slice(-2);
    let year = currentDate.getFullYear();

    let x500 = Number(document.getElementById("pln500").value);
    let x200 = Number(document.getElementById("pln200").value);
    let x100 = Number(document.getElementById("pln100").value);
    let x50 = Number(document.getElementById("pln50").value);
    let x20 = Number(document.getElementById("pln20").value);
    let x10 = Number(document.getElementById("pln10").value);
    let x5 = Number(document.getElementById("pln5").value);
    let x2 = Number(document.getElementById("pln2").value);
    let x1 = Number(document.getElementById("pln1").value);
    let y50 = Number(document.getElementById("gr50").value);
    let y20 = Number(document.getElementById("gr20").value);
    let y10 = Number(document.getElementById("gr10").value);
    let y5 = Number(document.getElementById("gr5").value);
    let y2 = Number(document.getElementById("gr2").value);
    let y1 = Number(document.getElementById("gr1").value);

    let sumakasa =
        x500 * 500 +
        x200 * 200 +
        x100 * 100 +
        x50 * 50 +
        x20 * 20 +
        x10 * 10 +
        x5 * 5 +
        x2 * 2 +
        x1 * 1 +
        y50 * 0.5 +
        y20 * 0.2 +
        y10 * 0.1 +
        y5 * 0.05 +
        y2 * 0.02 +
        y1 * 0.01;

    sumakasa = sumakasa;

    let roz = sumakasa - gotowa;
    roz = roz;

    let wszystkie_platnosci_karta = termi + prez;

    if (fiskalny > subiekt) {
        alert(
            `Prawdopodobnie jakiś z paragonów na kwotę ${
                fiskalny - subiekt
            } zł został podwójnie zafiskalizowany. Napisz stosowne oświadczenie i koniecznie daj znać o tym Milence!`
        );
    } else if (fiskalny < subiekt) {
        alert(
            `Prawdopodobnie jakiś z paragonów na kwotę ${
                subiekt - fiskalny
            } zł nie został zarejestrowany na drukarce fiskalnej, z której otrzymałeś raport. Sprawdź statusy fiskalne w Subiekcie! Jeśli wszystkie się zgadzają, istnieje szansa, że paragon mógł zostać wydrukowany na innej drukarce fiskalnej! Koniecznie skontaktuj się z Mileną, aby wyjaśnić ten problem!`
        );
    }

    if (wszystkie_platnosci_karta === subkarty) {
        document.getElementById("endmail").innerHTML = `Cześć,

${fiskalny.toFixed(2)} zł - Raport fiskalny
${subiekt.toFixed(2)} zł - Raport z Subiekta

${termi.toFixed(2)} zł - Terminal karty
${prez.toFixed(2)} zł - Karty prezentowe
${subkarty.toFixed(2)} zł - Subiekt karty

${gotowa.toFixed(2)} zł - Gotówka Subiekt
${sumakasa.toFixed(2)} zł - Gotówka Kasa
${roz.toFixed(2)} zł - Różnica

Pozdrawiam,
${name} :)`;
    } else if (wszystkie_platnosci_karta > subkarty) {
        let roznicakarty = wszystkie_platnosci_karta - subkarty;
        roznicakarty = roznicakarty;
        document.getElementById("endmail").innerHTML = `Cześć,

${fiskalny.toFixed(2)} zł - Raport fiskalny
${subiekt.toFixed(2)} zł - Raport z Subiekta

${termi.toFixed(2)} zł - Terminal karty
${prez.toFixed(2)} zł - Karty prezentowe
${subkarty.toFixed(2)} zł - Subiekt karty
${roznicakarty.toFixed(2)} zł - Różnica spowodowana pomyłką w sposobie płatności

${gotowa.toFixed(2)} zł - Gotówka Subiekt
${sumakasa.toFixed(2)} zł - Gotówka Kasa
${roz.toFixed(2)} zł - Różnica

PROŚBA:
Proszę o poprawę paragonu z PŁATNOŚĆ GOTÓWKA na PŁATNOŚĆ KARTĄ.
Numer paragonu: PA *popraw*/${symbol}/${month}/${year}

Pozdrawiam,
${name} :)`;
    } else if (wszystkie_platnosci_karta < subkarty) {
        let roznicakarty = subkarty - wszystkie_platnosci_karta;
        roznicakarty = roznicakarty;
        document.getElementById("endmail").innerHTML = `Cześć,

${fiskalny.toFixed(2)} zł - Raport fiskalny
${subiekt.toFixed(2)} zł - Raport z Subiekta

${termi.toFixed(2)} zł - Terminal karty
${prez.toFixed(2)} zł - Karty prezentowe
${subkarty.toFixed(2)} zł - Subiekt karty
${roznicakarty.toFixed(2)} zł - Różnica spowodowana pomyłką w sposobie płatności

${gotowa.toFixed(2)} zł - Gotówka Subiekt
${sumakasa.toFixed(2)} zł - Gotówka Kasa
${roz.toFixed(2)} zł - Różnica

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
    let name = document.getElementById("imie").value;
    let punkt1 = document.getElementById("symbolsklepu").value;
    let punkt2 = document.getElementById("przyp").value;

    document.getElementById("endmail").innerHTML = `Cześć,

W dniu ${dzisiaj} utarg z punktu ${punkt1} został wpłacony na kartę przypisaną do punktu ${punkt2}.

Pozdrawiam,
${name}`;
};

document.getElementById("kopiuj").onclick = function () {
    let kwotaZSubiekta = document.getElementById("raportsubiekt").value;
    document.getElementById("raportfiskalny").value = kwotaZSubiekta;
};

document.getElementById("kopiuj_karta").onclick = function () {
    let kwotaZSubiekta = document.getElementById("kartysubiekt").value;
    document.getElementById("terminal").value = kwotaZSubiekta;
};

document.getElementById("kopiuj_z_textarea").onclick = function () {
    let text = document.getElementById("endmail").innerHTML;
    navigator.clipboard.writeText(text);
};
