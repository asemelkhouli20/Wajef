// var main = document.getElementById("main-img");
// var item = document.getElementsByClassName("small-img");
// console.log(item.length);
// for (let i = 0; i < item.length; i++) {
//   item[i].onclick = function () {
//     main.src = item[i].src;
//   };
// }
// item[1].onclick = function () {
//   main.src = item[1].src;
// };
import { featuresItem } from "../JS/features.js";
const title = document.getElementById("name");

window.onload = function () {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("name");
  if (id) {
    console.log(id);
    title.innerHTML = id;
    searchInData(id);
  }
};
function searchInData(id) {
  for (let index = 0; index < featuresItem.length; index++) {
    const element = featuresItem[index];
    if (element.title == id) {
      console.log("found");
      setImg(element.image);
      setDes(element.long);
      setInsurances(element.title);
      return;
    }
  }
}
function setImg(img) {
  const item = document.getElementById("insurance");
  const style = `background-image: url("../Img/insurance/${img}")`;
  item.setAttribute("style", style);
}

function setDes(des) {
  const item = document.getElementById("details-des");
  item.innerHTML = des;
}

function setInsurances(selected) {
  const insurance = document.getElementById("insurance-type");
  var htmlCodeInsurance = `<option disabled value> -- Select Insurance Type -- </option>`;

  for (let i = 0; i < featuresItem.length; i++) {
    var item = featuresItem[i];
    var extra = "";
    if (item.title == selected) {
      extra = "selected";
    }
    htmlCodeInsurance += `<option ${extra} value="${item.title}">${item.title}</option>`;
  }
  insurance.innerHTML = htmlCodeInsurance;
}
