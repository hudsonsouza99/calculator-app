// main Js Start 
let outputscreen = document.getElementById('display');

function display(num) {

  if (outputscreen.value === "0") {
    outputscreen.value = num;
  } else {
    outputscreen.value += num;
  }
}

function calculate() {
  try {
    let expression = outputscreen.value.replace(/x/g, '*').replace(/÷/g, '/');
    outputscreen.value = eval(expression);

    if (outputscreen.value === '') {
      outputscreen.value = '0';
    }

  } catch (err) {
    alert("Invalid");
    outputscreen.value = '';
  }
}

function clr() {
  outputscreen.value = "0";
}

function del() {
  outputscreen.value = outputscreen.value.slice(0, -1);

  if (outputscreen.valuie === '') {
    outputscreen.value = "0";
  }
}