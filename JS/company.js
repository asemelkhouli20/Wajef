const companyItem = [
  {
    image: "https://www.tawuniya.com/static/media/Tawuniya-Logo.b70789ab.svg",
    link: "https://www.tawuniya.com",
  },
  {
    image: "https://aljaziratakaful.com.sa/Content/media/svg-icons/logo.svg",
    link: "https://aljaziratakaful.com.sa",
  },
  {
    image: "https://www.acig.com.sa/theme/ar/images/ACIGSaudi.png",
    link: "https://www.acig.com.sa",
  },
  {
    image:
      "https://www.arabianshield.com/Resources/site_1/Main/ASIC-logo-1.jpg",
    link: "https://www.arabianshield.com",
  },
  {
    image:
      "https://www.alrajhitakaful.com/assets/images/icons/logo-horizontal-colour.svg",
    link: "https://www.alrajhitakaful.com",
  },
  {
    image: "https://www.aicc.com.sa/theme/assets/img/logo_ar.png",
    link: "https://www.aicc.com.sa",
  },
  {
    image: "https://online.amana.sa/assets/amana/images/logo.png",
    link: "https://online.amana.sa",
  },
  {
    image: "https://www.aletihad.sa/assets/images/logo.png",
    link: "https://www.aletihad.sa",
  },
  {
    image: "https://www.ggi-sa.com/assets/frontend/ggci/images/logo.png",
    link: "https://www.ggi-sa.com",
  },
  {
    image: "https://buruj.sa/assets/img/logo%20hi%20res.png",
    link: "https://buruj.sa",
  },
  {
    image:
      "https://www.allianzsf.com/content/dam/onemarketing/mena/saudi-arabia/logos/AzSF_Logo_PNG.png",
    link: "https://www.allianzsf.com",
  },
  //   {
  //     image: "",
  //     link: "",
  //   },
  //   {
  //     image: "",
  //     link: "",
  //   },
  //   {
  //     image: "",
  //     link: "",
  //   },
  //   {
  //     image: "",
  //     link: "",
  //   },
];

function setCompany() {
  const feature = document.getElementById("company");
  var htmlCode = "";
  for (let i = 0; i < companyItem.length; i++) {
    var item = companyItem[i];
    htmlCode += `<img src="${item.image}"/>`;
  }
  feature.innerHTML = htmlCode;

  var copy = document.querySelector(".logos-slide").cloneNode(true);
  document.querySelector(".logos").appendChild(copy);
}
document.addEventListener("DOMContentLoaded", function () {

setCompany();
});