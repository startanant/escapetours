//this file will generate currency data





let countryCode = "CAD";


function getCurrencyRate( countryCode ){
    const apiKey = "6192e1367647782b0ed8f19980d669f4";
    const queryURL = `http://data.fixer.io/api/latest?access_key=${apiKey}`;
    console.log(queryURL);
    
    $.ajax({
        uurl: queryURL,
        method: "GET",
        dataType: 'jsonp',
        success: function( currency ) {
        console.log(currency);

        let test = currency.rates.currency;
        console.log(`The test currency is ${currency}`);

        let canada = currency.rates.CAD; 
        let usa = currency.rates.USD;
        let norway = currency.rates.NOK;
        
        console.log(`Canadian exchange rate: ${canada}`);
        console.log(`USA exchange rate: ${usa}`);
        console.log(`Norway exchange rate: ${norway}`);
        
       }
   })
}

getCurrencyRate();

// async function getData() 
// {
//     //await the response of the fetch call
//    let response = await fetch('http://data.fixer.io/api/latest?access_key=6192e1367647782b0ed8f19980d669f4');
//     //proceed once the first promise is resolved.
//    let data = await response.json()
//     //proceed only when the second promise is resolved
//     return data;
// }

// //call getData function
// getData()
// .then(data => console.log(data));


