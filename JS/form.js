import { featuresItem } from "./features.js";

setChange();
function setChange() {
  document
    .getElementById("insurance-type")
    .addEventListener("change", myFunction);
}

function myFunction(e) {
  var value = document.getElementById("insurance-type-value");
  if (value) {
    var indexFound = 0;
    for (let index = 0; index < featuresItem.length; index++) {
      const element = featuresItem[index];
      if (element.title == e.target.value) {
        indexFound = index;
        break;
      }
    }
    var item = featuresItem[indexFound];
    value.innerHTML = `
  <img src="Img/features/${item.image}" />
        <h4>${item.title}</h4>
        <p>${item.des}</p>
  `;
  }
}

function updateFileInputLabel(inputElement) {
  inputElement.addEventListener("change", function (event) {
    var input = event.target;
    var label = input.nextElementSibling;
    var fileName = input.files[0] ? input.files[0].name : "Choose file";
    label.textContent = fileName;
  });
}

document
  .querySelectorAll(".custom-file-input")
  .forEach(function (inputElement) {
    updateFileInputLabel(inputElement);
  });
