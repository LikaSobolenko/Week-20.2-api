document.addEventListener('DOMContentLoaded', function (event) {
    getCourses();
});

function getCourses() {
    fetch('https://cdn.cur.su/api/cbr.json')
        .then(response => response.json())
        .then(rates => {
            console.log(rates.rates.INR);
            document.getElementById('USD').innerHTML = (rates.rates.RUB).toFixed(3);
            document.getElementById('EUR').innerHTML = (rates.rates.RUB / rates.rates.EUR).toFixed(3);
            document.getElementById('CNY').innerHTML = (rates.rates.RUB / rates.rates.CNY).toFixed(3);
            document.getElementById('CHF').innerHTML = (rates.rates.RUB / rates.rates.CHF).toFixed(3);
            document.getElementById('SGD').innerHTML = (rates.rates.RUB / rates.rates.SGD).toFixed(3);
            document.getElementById('JPY').innerHTML = (rates.rates.RUB / rates.rates.JPY).toFixed(3);
            document.getElementById('BRL').innerHTML = (rates.rates.RUB / rates.rates.BRL).toFixed(3);
            document.getElementById('GBP').innerHTML = (rates.rates.RUB / rates.rates.GBP).toFixed(3);
            document.getElementById('INR').innerHTML = (rates.rates.RUB / rates.rates.INR).toFixed(3)
        })
        .catch(err => console.log(err));
}