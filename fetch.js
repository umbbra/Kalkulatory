//========> Download data from http://api.nbp.pl
function getRates(code, ){

}

const request = require('request');


const validCodes = ['usd', 'eur'];

const code = process.argv[2];

const isValid = validCodes.find(currency => currency === code) ? true : false;
console.log(isValid);

const url = `http://api.nbp.pl/api/exchangerates/rates/a/${code}/?format=json`

request(url, { json: true }, (err, res, body) => {
  if (err) {
    return console.log("Błąd: ", err);
  }
  if (res.statusCode !== 200) {
    return console.log("coś nie tak poszło, sprawdz url");
  };
  const message = `Średnia cena ${body.currency} w dniu ${body.rates[0].effectiveDate} wynosi ${body.rates[0].mid} złotych`;

    console.log(message);

})
