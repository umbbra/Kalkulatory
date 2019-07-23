//-----> SETTING PANEL DISPLAYS

const usual = document.querySelector(".calculator");
const currency = document.querySelector(".exchange");
const btnUsual = document.querySelector("#usual");
const btnCurrency = document.querySelector("#exchange");

function changeUsual(){
 
let styleComputedUsual = getComputedStyle(usual);
let dispUsual = styleComputedUsual.getPropertyValue("display");

  if(dispUsual === "block"){
    usual.style.display = "none";
  } else {
    usual.style.display = "block";
    currency.style.display = "none";
  }

}

function changeCurr(){
  let styleComputedCurrency = getComputedStyle(currency);
  let dispCurr = styleComputedCurrency.getPropertyValue("display");
  
    if(dispCurr === "block"){
      currency.style.display = "none";
    } else {
      currency.style.display = "block";
    usual.style.display = "none";

    }
  
  }
  

btnUsual.addEventListener("click", changeUsual);
btnCurrency.addEventListener('click', changeCurr);

//---------------->
// USUAL CALCULATOR

const screen = document.querySelector(".screen");

const btns = document.querySelectorAll(".btn");
let tabOfValue = [];
for (const btn of btns) {
  tabOfValue.push(btn.value);
}

function pow(exp) {
  let tabFromExp = exp.split("^");
  let a = tabFromExp[0];
  let b = tabFromExp[1];
  let result = Math.pow(a, b);
  screen.textContent = result;
}

function percentFrom(exp) {
  let tabFromExp = exp.split("%");
  let a = tabFromExp[0];
  let b = tabFromExp[1];
  let prc = (parseInt(a) * parseInt(b)) / 100;
  screen.textContent = prc;
}

function delOne() {
  let exp = screen.textContent;
  screen.textContent = exp.substring(0, exp.length - 1);
}

function equal() {
  let exp = screen.textContent;

  if (exp.includes("^")) {
    pow(exp);
  } else if (exp.includes("%")) {
    percentFrom(exp);
  } else {
    screen.textContent = eval(exp);
  }
}

for (const btn of btns) {
  btn.addEventListener("click", function() {
    const screen = document.querySelector(".screen");
    value = this.value;
    if (value === "Clear") {
      screen.textContent = "";
    } else if (value === "delOne") {
      delOne();
    } else if (value === "equal") {
      document.querySelector(".equal").value = "";
    } else {
      screen.textContent += value;
      let divideValue = value.substring(value.length-2);
      console.log(divideValue);
    }
  });
}
//---------------->
// CURRENCY CALCULATOR

const submitCurrency = document.querySelector("#submit");
const pToShow = document.querySelector(".toShow");


const rates = {
  PLNUSD: 0.29,
  USDPLN: 3.45,
  PLNEUR: 0.24,
  EURPLN: 4.15,
  USDEUR: 1.2,
  EURUSD: 0.83
};

function calculate(e) {
  e.preventDefault();

  let amount = document.querySelector("#amount").value;
  let from = document.querySelector("#fromCurrency").value;
  let to = document.querySelector("#toCurrency").value;

   const tabValue = [];
  tabValue.push(from);
  tabValue.push(to);
  let toChange = tabValue.join("");
  let result;

  switch (toChange) {
    case "PLNUSD":
      result = (amount * rates.PLNUSD).toLocaleString() + "  dollarów";
      break;

    case "USDPLN":
      result = (amount * rates.USDPLN).toLocaleString() + "  złoty";
      break;

    case "PLNEUR":
      result = (amount * rates.PLNEUR).toLocaleString() + "  euro";
      break;

    case "EURPLN":
      result = (amount * rates.EURPLN).toLocaleString() + "  złoty";
      break;

    case "USDEUR":
      result = (amount * rates.USDEUR).toLocaleString() + "  euro";
      break;

    case "EURUSD":
      result = (amount * rates.EURUSD).toLocaleString() + "  dollarów";
      break;

    default:
      alert("Zaznaczyłeś te same waluty, lub popełniono inny błąd...");
  }
  pToShow.textContent = result;
}

submitCurrency.addEventListener("click", calculate);
