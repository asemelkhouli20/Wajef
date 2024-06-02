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
<a href="index.html"><img src="./img/logo.png" class="logo" alt="logo" /></a>
      <div>
        <ul id="navbar">
          <li><a class="${activeWho.activeHome}" href="index.html">Home</a></li>
          <li><a class="${activeWho.activeShop}" href="shop.html">Shop</a></li>
          <li><a class="${activeWho.activeBlog}" href="blog.html">Blog</a></li>
          <li><a class="${activeWho.activeAbout}" href="about.html">About</a></li>
          <li><a class="${activeWho.activeContact}" href="contact.html">Contact Us</a></li>

          <i id="close" class="far fa-times"></i>
        </ul>
      </div>
      <div id="mobile">
         <i class="fal fa-phone-alt"></i>
        <i id="bar" class="fas fa-outdent"></i>
      </div>

`;
}
