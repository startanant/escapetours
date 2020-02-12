let allCurrencies = {};
let sourceRate = 'CAD';
let targetRate = "DKK";
let conversion = 0;

function initCurrencies(){
    const apiKey = "6192e1367647782b0ed8f19980d669f4";
    const queryURL = `http://data.fixer.io/api/latest?access_key=${apiKey}`;
    console.log(queryURL);
    
    $.ajax({
        url: queryURL,
        method: "GET",
        dataType: 'jsonp',
        success: function( currency ) {
        console.log(currency);

        allCurrencies = currency.rates;

        console.log(allCurrencies);
        
        // return allCurrencies;
        }
    })
}

initCurrencies();

function getConversionRate( srcCurrency, targetCurrency ){
    return allCurrencies[srcCurrency]/allCurrencies[targetCurrency];
}
// some time in the future
setTimeout( ()=>{ 
    // assuem 'allCurrencies' is sset
    if( allCurrencies.length<1 ) return;

    let conversion = getConversionRate(sourceRate, targetRate);
    console.log(conversion);
    document.getElementById('localCurrency').innerText = "Local currency: " + targetRate;
    document.getElementById('exchange').innerText = "1 CAD = " + conversion + " " + targetRate;

}, 1000 );

