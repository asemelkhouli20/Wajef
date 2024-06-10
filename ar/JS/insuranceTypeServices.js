import { featuresItem } from "./features.js";

function setInsuranceTypeServices() {
  var value = document.getElementById("insurance-type-services");
  var htmlConent = "";
  for (let index = 0; index < featuresItem.length; index++) {
    const item = featuresItem[index];
    var extra = "";
    if (index != 0) {
      extra += " mt-4 ";
      if (index < 3) {
        extra += " mt-md-0 ";
      }
    }
    htmlConent += `

<div class="col-md-4 d-flex align-items-stretch ${extra}" data-aos="fade-up">
  <div class="card" style="background-image: url(../Img/insurance/${item.image});">
    <div class="card-body">
      <h5 class="card-title">
        <a>${item.title}</a>
      </h5>
      <p class="card-text">${item.des}</p>
      <div class="read-more">
        <a href="details/?name=${item.title}">
           اقرا المزيد
       <i class="bi bi-arrow-left"></i> </a>
      </div>
    </div>
  </div>
</div>
    `;
  }
  value.innerHTML = htmlConent;
}
setInsuranceTypeServices();

function setInsurances() {
  const insurance = document.getElementById("insurance-type");
  var htmlCodeInsurance = `<option disabled selected value> -- اختر نوع التامين -- </option>`;
  for (let i = 0; i < featuresItem.length; i++) {
    var item = featuresItem[i];
    htmlCodeInsurance += `<option value="${item.title}">${item.title}</option>`;
  }
  insurance.innerHTML = htmlCodeInsurance;
}
setInsurances();
