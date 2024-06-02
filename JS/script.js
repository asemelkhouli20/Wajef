import { getHead } from "./header.js";
import { featuresItem } from "./features.js";

function setFeatures() {
  const feature = document.getElementById("feature");

  var htmlCodeFeature = "";
 
  for (let i = 0; i < featuresItem.length; i++) {
    var item = featuresItem[i];
    htmlCodeFeature += `
      <div class="fe-box">
        <img src="Img/features/${item.image}" alt="${item.title} img" />
        <h6>${item.title}</h6>
      </div>
      `;
    
  }
  feature.innerHTML = htmlCodeFeature;
}

function setHead(active) {
  const header = document.getElementById("header");
  header.innerHTML = getHead(active);
}
setFeatures();

export function setHome(){
setHead("activeHome");
}

export function setAbout() {
  setHead("activeAbout");
}

export function setProduct() {
  setHead("activeProduct");
}

export function setService() {
  setHead("activeService");
}