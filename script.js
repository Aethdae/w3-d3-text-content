const submitButton = document.getElementById("submitButton");
const textArea = document.querySelector("textarea");
const output = document.getElementById("outPut");
const form = document.getElementById("jsonForm");

// console.log(submitButton.innerHTML, textArea.placeholder);
jsonForm.addEventListener("submit", textToJson);

function textToJson(event) {
  const string = textArea.value;
  event.preventDefault();
  console.log(`Logging: ${string}`);
  try {
    const json = JSON.parse(string);
    createTextElement(json);
  } catch (err) {
    output.textContent = `Error parsing text: ${err}`;
    console.error(`Error parsing text: ${err}`);
  }
}

function createTextElement(jsonObject) {
  output.textContent = "";
  const element = document.createElement("p");
  const jsonString = JSON.stringify(jsonObject, null, 2);
  element.textContent = jsonString;
  output.appendChild(element);
}
