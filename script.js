function showName() {
  const name = document.getElementById("username").value.trim();
  if (name === "") {
    document.getElementById("name-output").innerText = "Please enter your name.";
  } else {
    document.getElementById("name-output").innerText = "Hello, " + name + "!";
  }
}

function doCalculate() {
  const investment = document.getElementById("investment").value.trim();
  const rate = document.getElementById("rate").value.trim();
  const period = document.getElementById("period").value.trim();

  const errorMsg = document.getElementById("error-message");

  if (investment === "") {
    errorMsg.innerText = "Please enter Investment.";
    return;
  }
  if (rate === "") {
    errorMsg.innerText = "Please enter Annual Rate.";
    return;
  }
  if (period === "") {
    errorMsg.innerText = "Please enter Time Period.";
    return;
  }

  errorMsg.innerText = "";

  // SIP formula:
  // FV = P * [(1 + r)^n - 1] * (1 + r) / r

  const P = parseFloat(investment);
  const annualRate = parseFloat(rate);
  const years = parseFloat(period);

  const r = annualRate / 100 / 12;
  const n = years * 12;

  const futureValue = P * (((Math.pow(1 + r, n) - 1) * (1 + r)) / r);
  const roundedFV = futureValue.toFixed(2);

  alert("Future Value: ₹" + roundedFV);
}
