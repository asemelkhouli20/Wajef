// import { serviceContent, form_detalis } from "./service.js";
import { featuresItem } from "./features.js";

// export function setFormDetalis() {
//   const form_details = document.getElementById("form-details");
//   if (form_details) {form_details.innerHTML = form_detalis;}
// }

// export function setService() {
//   const service = document.getElementById("service_wajef");
//   var htmlCode = "";
//   for (let i = 0; i < serviceContent.length; i++) {
//     var item = serviceContent[i];
//     htmlCode += `<strong>${item.title}</strong>${item.des}<br/><br/>`;
//   }
// if (service){ service.innerHTML = htmlCode;}
// }

export function setInsurance() {
  const insurance = document.getElementById("insurance-type");
  var htmlCodeInsurance = `<option disabled selected value> -- Select Insurance Type -- </option>`;
  for (let i = 0; i < featuresItem.length; i++) {
    var item = featuresItem[i];
    htmlCodeInsurance += `<option value="${item.title}">${item.title}</option>`;
  }
  insurance.innerHTML = htmlCodeInsurance;
}
