const request = require('request');





//=========> =>>>>>>>>>>>>
//=========> =>>>>>>>>>>>>

// // fetch(`http://numbersapi.com/${number}/${type}?json`)
// const arg = process.argv[2];
// let type = "";
// if(arg.indexOf("--year")===0){
// type="year";
// } else if (arg.indexOf("--math")===0){
//   type="math";
// } else if (arg.indexOf("--trivia")===0){
//   type="trivia";
// }
// console.log(type);

// const equalSign = arg.search('=');
// // console.log(equalSign);
// if(equalSign === -1) console.log('nie wpisałeś');

// const number = arg.slice(equalSign+1) || 1;
// // console.log(number);
// if(number === "" || isNaN(Number(number))) {
//   console.log('To nie jest liczba!');
//   // process.exit();
// }



// const fetch = require('node-fetch');

// fetch(`http://numbersapi.com/${number}/${type}?json`)
// .then(resp => {
//   if(resp.ok){
//     return resp.json()
//   } else {
//     throw new Error("coś nie tak"), resp.status}
 
// })
// .then(data => console.log(data.text))
// .catch(err => console.log('Błąd'+err))


//=========> =>>>>>>>>>>>>
//=========> =>>>>>>>>>>>>
//=========> =>>>>>>>>>>>>

// const fetch = require('node-fetch');
// console.log(process.argv);

// const year = process.argv[2] || Math.floor(Math.random()*2020);
// // console.log(year);

// fetch(`http://numbersapi.com/${year}/year?json`)
// .then(resp => { 
//   console.log(resp.status);
//   console.log(resp.ok);
//   return resp.json()
// })
// .then(data => console.log(data.text))
// .catch(error => console.log(error))