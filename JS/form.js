import { featuresItem } from "./features.js";
document
  .getElementById("insurance-type")
  .addEventListener("change", myFunction);

function myFunction(e) {
  var value = document.getElementById("insurance-type-value");
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
