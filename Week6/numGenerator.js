
function getd4() {
    d4i = Math.floor((Math.random() * 4) + 1);
    let d4s = d4i.toString();
    document.getElementById("d4").innerHTML = d4s;
}

function getd6() {
    d6i = Math.floor((Math.random() * 6) + 1);
    let d6s = d6i.toString();
    document.getElementById("d6").innerHTML = d6s;
}

function getd8() {
    d8i = Math.floor((Math.random() * 8) + 1);
    let d8s = d8i.toString();
    document.getElementById("d8").innerHTML = d8s;
}

function getd10() {
    d10i = Math.floor((Math.random() * 10) + 1);
    let d10s = d10i.toString();
    document.getElementById("d10").innerHTML = d10s;
}

function getd10p() {
    d10pi = Math.floor(((Math.random() * 10) + 1) * 10);
    let d10ps = d10pi.toString();
    document.getElementById("d10p").innerHTML = d10ps;
}

function getd12() {
    d12i = Math.floor((Math.random() * 12) + 1);
    let d12s = d12i.toString();
    document.getElementById("d12").innerHTML = d12s;
}

function getd20() {
    d20i = Math.floor((Math.random() * 20) + 1);
    let d20s = d20i.toString();
    document.getElementById("d20").innerHTML = d20s;
}

function firstCalculation() {
    firstCalci = d4i + d6i + d8i + d10i + d12i + d20i;
    let firstCalcs = firstCalci.toString();
    document.getElementById("firstCalc").innerHTML = firstCalcs;
}

/*function fanlCalculation() {
    finalCalci = firstCalci + modifieri;
    let finalCalcs = finalCalci.toString();
    document.getElementById("finalCalc").innerHTML = finalCalcs;
}*/
