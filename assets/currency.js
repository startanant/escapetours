let allCurrencies = {};
let sourceRate = 'CAD';
let targetRate = result.countryCode;
let conversion = 0;

function initCurrencies() {
    const apiKey = "6192e1367647782b0ed8f19980d669f4";
    const queryURL = `http://data.fixer.io/api/latest?access_key=${apiKey}`;
    const proxyURL = 'https://repos.codehot.tech/cors_proxy.php?url=' + escape(queryURL);
    $.ajax({
        url: proxyURL,
        method: "GET",
        // dataType: 'jsonp',
        success: function (currency) {
            allCurrencies = currency.rates;
        }
    })
}

initCurrencies();

function getConversionRate(srcCurrency, targetCurrency) {
    conversion = (allCurrencies[targetCurrency] / allCurrencies[srcCurrency]).toFixed(2);
    document.getElementById('localCurrency').innerText = "Local currency: " + result.currency;
    document.getElementById('exchange').innerText = "1 CAD = " + conversion + " " + result.countryCode;
    document.getElementById('country').innerText = "Welcome to " + result.city + ", " + result.country;
}
setTimeout(() => {
    if (allCurrencies.length < 1) return;
}, 1000);
