"use strict";
const firstInput = document.getElementById("input1");
const secondInput = document.getElementById("input2");
const thirdInput = document.getElementById("input3");
const radio1 = document.getElementById("radio1");
const radio2 = document.getElementById("radio2");
const button = document.querySelector(".calculate");
const error1 = document.getElementById("error1");
const error2 = document.getElementById("error2");
const error3 = document.getElementById("error3");
const defaultPage = document.querySelector(".default");
const mainPage = document.querySelector(".mainresult");
const monthlyRepay = document.getElementById("monthly");
const totalRepay = document.getElementById("overall");
const resetBtn = document.getElementById("clear");
// const form = document.getElementById("form");
console.log(
  firstInput,
  secondInput,
  thirdInput,
  radio1,
  radio2,
  button,
  defaultPage,
  mainPage,
  monthlyRepay,
  totalRepay,
  resetBtn,
  // form,
);

function calcmortgage(e) {
  e.preventDefault();
  console.log(e);

  const userbill = Number(firstInput.value);
  const useryear = Number(secondInput.value);
  const userpercent = Number(thirdInput.value);

  if (userbill === 0) {
    firstInput.classList.add("invalid");
    error1.textContent = "fill this field";
    mainPage.style.display = "block";
    defaultPage.style.display = "none";
    return;
  } else if (useryear === 0) {
    secondInput.classList.add("invalid");
    error2.textContent = "fill this field";
    mainPage.style.display = "block";
    defaultPage.style.display = "none";
    return;
  } else if (userpercent === 0) {
    thirdInput.classList.add("invalid");
    error3.textContent = "fill this field";
    mainPage.style.display = "block";
    defaultPage.style.display = "none";
    return;
  } else {
    error1.textContent = "";
    error1.textContent = "";
    error3.textContent = "";
  }

  let years = useryear * 12;
  let interestRate = userpercent / 100 / 12;
  let payment =
    (userbill * interestRate) / (1 - Math.pow(1 + interestRate, -years));
  console.log(1 + interestRate, -years);
  let totalPay = payment * years;
  let totalInterest = totalPay - userbill;

  monthlyRepay.textContent = "£" + payment.toFixed(2);
  totalRepay.textContent = "£" + totalPay.toFixed(2);
  mainPage.style.display = "block";
  defaultPage.style.display = "none";

  if (radio1.checked) {
    let totalpayment = payment * years;
    let payperMonth = totalpayment / years;
    console.log(totalPay);
    console.log(payperMonth);
    monthlyRepay.textContent = "£" + payperMonth.toFixed(2);
    totalRepay.textContent = "£" + totalpayment.toFixed(2);
    mainPage.style.display = "block";
    defaultPage.style.display = "none";
  } else if (radio2.checked) {
    let totalInterests = totalPay - loan;
    let intpermonth = totalInterests / years;
    monthlyRepay.textContent = "£" + intpermonth.toFixed(2);
    totalRepay.textContent = "£" + totalInterests.toFixed(2);
    mainPage.style.display = "block";
    defaultPage.style.display = "none";
  } else if (radio1 === "false" && radio2 === "false") {
    mainPage.style.display = "none";
    defaultPage.style = "none";
  }
  // if (radio1.checked) {
  //   monthlyRepay.textContent = "£" + payment.toFixed(2);
  //   totalRepay.textContent = "£" + totalPay.toFixed(2);
  // }

  // if (radio2.checked) {
  //   let interesttotal = Number(totalPay) - firstInput.value;
  //   let interestPerMonth = interesttotal / Number(years);
  //   console.log
  // }
}

button.addEventListener("click", calcmortgage);

function handleremoveError() {
  if (firstInput.value.trim().length > 0) {
    console.log("is inputing");
    error1.textContent = "";
    console.log(error1);
    firstInput.classList.remove("invalid");
  }
  if (secondInput.value.trim().length > 0) {
    error2.textContent = "";
    console.log(error2);
    secondInput.classList.remove("invalid");
  }
  if (thirdInput.value.trim().length > 0) {
    error3.textContent = "";
    console.log(error3);
    thirdInput.classList.remove("invalid");
  }
}
firstInput.addEventListener("input", handleremoveError);
secondInput.addEventListener("click", handleremoveError);
thirdInput.addEventListener("click", handleremoveError);

function resetall() {
  console.log("clicked");
  firstInput.value = "";
  secondInput.value = "";
  thirdInput.value = "";
  monthlyRepay.textContent = "";
  totalRepay.textContent = "";
  defaultPage.style.display = "block";
  mainPage.style.display = "none";
}

resetBtn.addEventListener("click", resetall);
