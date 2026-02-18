const submitButton = document.getElementById("submitButton");
const textArea = document.querySelector("textarea");

// console.log(submitButton.innerHTML, textArea.placeholder);
submitButton
  .addEventListener("click", textToJson(textArea.textContent))
  .preventDefault();

function textToJson(string) {
  try {
    const json = JSON.parse(string);
  } catch (err) {
    console.error(`Error parsing text: ${err}`);
  }
}
