// borrar elementos del array despues de resetear
const inputContainer = document.querySelector(".input-container");
const agregarElementos = document.getElementsByClassName("add-elements");
const inputs = document.getElementsByName("inputs");

const calculateList = [];
function createBoxes() {
  const article = document.createRange().createContextualFragment(
    ` <span class="plus">+</span>
    <input type="number" name="inputs" min="1"  oninput="if (this.value > 10) this.value = 10; if (this.value < 1) this.value = '';" onKeypress="if (event.keyCode < 45 || event.keyCode > 57 ) event.returnValue = false;"></input> `
  );

  inputContainer.append(article);
}

function reset() {
  const containerH4 = document.querySelector(".average-container");
  calculateList.length = 0;
  inputContainer.replaceChildren(
    document.createRange()
      .createContextualFragment(`<input type="number" name="inputs" min="1"  oninput="if (this.value > 10) this.value = 10; if (this.value < 1) this.value = '';" onKeypress="if (event.keyCode < 45 || event.keyCode > 57 ) event.returnValue = false;"></input>
      <span class="plus">+</span>
      <input type="number" name="inputs" min="1"  oninput="if (this.value > 10) this.value = 10; if (this.value < 1) this.value = '';" onKeypress="if (event.keyCode < 45 || event.keyCode > 57 ) event.returnValue = false;"></input>
      <span class="plus">+</span>
      <input type="number"  min="1" name="inputs" oninput="if (this.value > 10) this.value = 10; if (this.value < 1) this.value = '';" onKeypress="if (event.keyCode < 45 || event.keyCode > 57 ) event.returnValue = false;"></input>
      <span class="plus">+</span>
      <input type="number"  min="1" name="inputs" oninput="if (this.value > 10) this.value = 10; if (this.value < 1) this.value = '';" onKeypress="if (event.keyCode < 45 || event.keyCode > 57 ) event.returnValue = false;"></input>`)
  );
  containerH4.replaceChildren(
    document.createRange().createContextualFragment(``)
  );
  calculateList.splice(0, calculateList.length);
}
async function calculate() {
  const divContainer = document.querySelector(".average-container");
  divContainer.replaceChildren(
    document.createRange().createContextualFragment(``)
  );
  for (let index = 0; index < inputs.length; index++) {
    calculateList.push(Number(inputs[index].value));
  }
  for (let index = 0; index < calculateList.length; index++) {
    if (calculateList[index] == 0) {
      calculateList.shift();
    }
  }

  console.log(calculateList);
  const average = await MathFunction.calculatorAverage(calculateList);
  const averageText = document.createElement("h4");
  averageText.innerText = `Your average is ${average}`;
  divContainer.append(averageText);
  const median = await MathFunction.calculatorMedian(calculateList);
  const medianText = document.createElement("h4");
  medianText.innerText = `Your median is ${median}`;
  divContainer.append(medianText);
  calculateList.splice(0, calculateList.length);
  calculateList.length = 0;
}
