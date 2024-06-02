import { getHead } from "./header.js";
import { featuresItem } from "./features.js";
import { footerContent } from "./footer.js";
import { companyItem } from "./company.js";
import { serviceContent } from "./service.js";

function setFooter() {
  const footer = document.getElementById("footer");
  footer.innerHTML = footerContent;
}

function setFeatures() {
  const feature = document.getElementById("feature");
  const insurance = document.getElementById("insurance-type");

  var htmlCodeFeature = "";
  var htmlCodeInsurance =
    "<option disabled selected value> -- اختر نوع التأمين -- </option>";
  for (let i = 0; i < featuresItem.length; i++) {
    var item = featuresItem[i];
    htmlCodeFeature += `
      <div class="fe-box">
        <img src="img/features/${item.image}" alt="${item.title} img" />
        <h6>${item.title}</h6>
      </div>
      `;
    htmlCodeInsurance += `
<option value="${item.title}">${item.title}</option>
      `;
  }
  feature.innerHTML = htmlCodeFeature;
  insurance.innerHTML = htmlCodeInsurance;
}
function setService() {
  const service = document.getElementById("service_wajef");
  var htmlCode = "";

  for (let i = 0; i < serviceContent.length; i++) {
    var item = serviceContent[i];
    htmlCode += `
     <strong>${item.title}</strong>${item.des}<br /><br />
    `;
  }

  service.innerHTML = htmlCode;
}

function setHead(active) {
  const header = document.getElementById("header");
  header.innerHTML = getHead(active);
}
function setCompany() {
  const feature = document.getElementById("company");
  var htmlCode = "";
  for (let i = 0; i < companyItem.length; i++) {
    var item = companyItem[i];
    htmlCode += `<img src="${item.image}" alt="${item.image}"/>`;
  }
  feature.innerHTML = htmlCode;
}

setCompany();

setHead("activeHome");
setFooter();
setFeatures();
setService();

 var Tawk_API = Tawk_API || {},
   Tawk_LoadStart = new Date();
 (function () {
   var s1 = document.createElement("script"),
     s0 = document.getElementsByTagName("script")[0];
   s1.async = true;
   s1.src = "https://embed.tawk.to/665c68259a809f19fb37eb12/1hvcfdlcc";
   s1.charset = "UTF-8";
   s1.setAttribute("crossorigin", "*");
   s0.parentNode.insertBefore(s1, s0);
 })();