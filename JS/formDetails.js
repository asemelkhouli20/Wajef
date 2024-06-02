export const form_detalis = `
 <form action="">
        <span>قدم طلبك الان</span>
        <h2>سيتم الرد في اقل من ٢٤ ساعة</h2>
        <input
          class="margin-bottom"
          type="text"
          name="company"
          placeholder="الشركة / المؤسسة"
        />

        <input
          class="margin-bottom"
          type="number"
          name="phone"
          placeholder="رقم الهاتف"
        />
        <input
          class="margin-bottom"
          type="email"
          name="email"
          placeholder="البريد الالكتروني"
        />
        <select
          id="insurance-type"
          name="insuranceType"
          class="margin-bottom"
        ></select>
        <div class="myFile margin-bottom">
          <h5>خطاب التفويض</h5>
          <input
            type="file"
            id="AuthorizationLetter"
            name="AuthorizationLetter"
          />
        </div>
        <div class="myFile margin-bottom">
          <h5>سجل تجاري</h5>
          <input
            type="file"
            id="CommercialRegistry"
            name="CommercialRegistry"
          />
        </div>
        <div class="myFile margin-bottom">
          <h5>قائمة الاعضاء</h5>
          <input type="file" id="MembersList" name="MembersList" />
        </div>
        <textarea
          class="margin-bottom"
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="Your Message"
        ></textarea>
        <button class="normal">إرسال طلب</button>
      </form>
      <div id="insurance-type-value">
        <img src="Img/logo.png" />
        <h4>منصة وجيف</h4>
        <p id="service_wajef"></p>
      </div>
`;