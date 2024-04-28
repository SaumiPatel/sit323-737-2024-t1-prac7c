function display(value) {
  document.getElementById("display").value += value;
  console.log(value);
}

function clearScreen() {
  document.getElementById("display1").value = "";
  document.getElementById("display2").value = "";
}

function result() {
  var text = document.getElementById("display").value;
  var result = eval(text);
  document.getElementById("display").value = result;
}

const addBtn = document.getElementById("add");
const expBtn = document.getElementById("exp");
const modBtn = document.getElementById("%");
const resetBtn = document.getElementById("reset");
const divBtn = document.getElementById("div");
const subBtn = document.getElementById("sub");
const mulBtn = document.getElementById("mul");
const rootBtn = document.getElementById("root");
const ans = document.getElementById("ans");

addBtn.addEventListener("click", async () => {
  const value1 = document.getElementById("val1").value;
  const value2 = document.getElementById("val2").value;

  const response = await fetch(
    `http://localhost:3040/add?n1=${value1}&n2=${value2}`
  );
  const anotherResponse = await response.json();

  ans.innerHTML = anotherResponse.data;

  // document.getElementById("");
  console.log(anotherResponse.data);
});

subBtn.addEventListener("click", async () => {
  const value1 = document.getElementById("val1").value;
  const value2 = document.getElementById("val2").value;

  const response = await fetch(
    `http://localhost:3040/sub?n1=${value1}&n2=${value2}`
  );
  const anotherResponse = await response.json();

  console.log(anotherResponse);
});

mulBtn.addEventListener("click", async () => {
  const value1 = document.getElementById("val1").value;
  const value2 = document.getElementById("val2").value;

  const response = await fetch(
    `http://localhost:3040/mul?n1=${value1}&n2=${value2}`
  );
  const anotherResponse = await response.json();

  console.log(anotherResponse);
});

divBtn.addEventListener("click", async () => {
  const value1 = document.getElementById("val1").value;
  const value2 = document.getElementById("val2").value;

  const response = await fetch(
    `http://localhost:3040/div?n1=${value1}&n2=${value2}`
  );
  const anotherResponse = await response.json();

  console.log(anotherResponse);
});

expBtn.addEventListener("click", async () => {
  const value1 = document.getElementById("val1").value;
  const value2 = document.getElementById("val2").value;

  const response = await fetch(
    `http://localhost:3040/expo?n1=${value1}&n2=${value2}`
  );
  const anotherResponse = await response.json();

  console.log(anotherResponse);
});

modBtn.addEventListener("click", async () => {
  const value1 = document.getElementById("val1").value;
  const value2 = document.getElementById("val2").value;

  const response = await fetch(
    `http://localhost:3040/mod?n1=${value1}&n2=${value2}`
  );
  const anotherResponse = await response.json();

  console.log(anotherResponse);
});

rootBtn.addEventListener("click", async () => {
  const value1 = document.getElementById("val1").value;
  const value2 = document.getElementById("val2").value;

  const response = await fetch(
    `http://localhost:3040/root?n1=${value1}&n2=${value2}`
  );
  const anotherResponse = await response.json();

  console.log(anotherResponse);
});
