export const serviceContent = [
  {
    title: " تقييم المخاطر : ",
    des: "تحديد وتقييم المخاطر من قبل متخصصين معتمدين وذلك بغرض تحديد التغطيات التأمينية وفقا لطبيعة نشاط العمل",
  },
  {
    title: " البحث والتفاوض على افضل العروض : ",
    des: "التفاوض مع شركات التأمين لتقديم أفضل عروض أسعار تنافسية للعميل",
  },
  {
    title: " تحليل ودراسة طبيعية العمل : ",
    des: "تحليل بيانات العميل وطبيعة أعماله لتقديم األنسب واألفضل",
  },
  {
    title: " تقديم الإستشارات : ",
    des: "تقديم االستشارات التأمينية للعميل وتوضيح جميع الشروط وااللتزامات لجميع أطراف التعاقد",
  },
  {
    title: " حمياة حقوق المؤمن : ",
    des: "حماية حقوق المؤمن له من خالل متابعة شؤونه واالستجابة لجميع متطلباته طوال فترة سريان وثيقة التأمين",
  },
];


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