let inputForm = document.querySelector("#tableform");
let inputform = document.querySelector("#inputID");
let table = document.querySelector("#time-table");

inputform.addEventListener("submit", (event) => {
  event.preventDefault();

  let tableoF = input.value;

  table.innerHTML = "";

  for (let i = 1; i <= 12; i++) {
    console.log(tableoF + "x" + i + " =", tableoF * i);
    const meassage = `${tableoF} X ${i} = ${tableoF * i}`;

    table.innerHTML += `${message} <br>`;
  }
});
