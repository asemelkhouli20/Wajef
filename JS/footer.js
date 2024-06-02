const footerContent = `
  <div class="col">
        <img src="Img/logo.png" class="logo" />
        <h4>للتواصل</h4>
        <p>
          <strong>العنوان:</strong> 
         الرياض - حي الريان - ش.أحمد بن حنبل
        </p>
        <p>
          <strong>رقم الهاتف:</strong>
          011 507 6789
        </p>
        <p>
          <strong>ساعات العمل:</strong>
          الاحد - الخميس 10:00 : 16:00
        </p>
        <p>
          <strong>الايميل:</strong>
         info@wajeef.com.sa
        </p>
      </div>
      

      
`;

function setFooter() {
  const footer = document.getElementById("footer");
  footer.innerHTML = footerContent;
}
setFooter();