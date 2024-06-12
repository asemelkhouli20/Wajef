// import { serviceContent, form_detalis } from "./service.js";
import { featuresItem } from "./features.js";

export function setInsurance() {
  const insurance = document.getElementById("insurance-type");
  var htmlCodeInsurance = `<option disabled selected value> -- Select Insurance Type -- </option>`;
  for (let i = 0; i < featuresItem.length; i++) {
    var item = featuresItem[i];
    htmlCodeInsurance += `<option value="${item.title}">${item.title}</option>`;
  }
  insurance.innerHTML = htmlCodeInsurance;
}
