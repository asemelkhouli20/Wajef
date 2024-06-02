export function getHead(active) {
  const activeWho = {
    activeHome: "",
    activeShop: "",
    activeBlog: "",
    activeAbout: "",
    activeContact: "",
  };

  if (activeWho.hasOwnProperty(active)) {
    activeWho[active] = "active";
  }

  return `
<a href="index.html" class="logo-contet">
<img src="./Img/logo.png" class="logo" alt="logo" />
<h3 >شركة وجيف لخدمات وساطة التأمين</h3>
</a>
      <div>
        <ul id="navbar">
          <li><a class="${activeWho.activeHome}" href="index.html">الرئيسة</a></li>
          <li><a class="${activeWho.activeAbout}" href="about.html">من نحن</a></li>
          <li><a class="${activeWho.activeShop}" href="product.html">منتجات التأمين</a></li>
          <li><a class="${activeWho.activeBlog}" href="service.html">الخدمات</a></li>
          <li><a class="${activeWho.activeContact}" href="#">English</a></li>

          <i id="close" class="far fa-times"></i>
        </ul>
      </div>
      <div id="mobile">
         <i class="fal fa-phone-alt"></i>
        <i id="bar" class="fas fa-outdent"></i>
      </div>

`;
}
