const q = [
  {
    Q: "What services does WAJEEF offer?",
    A: "WAJEEF offers a wide range of insurance services, including health insurance, properties insurance, marine insurance, engineering insurance, medical errors insurance, vehicle insurance, protection & savings insurance, and general insurance.",
  },
  {
    Q: "Why should I choose WAJEEF?",
    A: "WAJEEF simplifies the insurance process by offering various plans from different insurance companies, allowing you to compare and choose the perfect fit easily. You can also benefit from exclusive rates and expert help available 24/7. Additionally, WAJEEF facilitates electronic payment and contract processes for your convenience.",
  },
  {
    Q: " How does WAJEEF simplify insurance comparison?",
    A: "WAJEEF simplifies insurance comparison by offering a wide range of insurance offers from various insurance companies in the Kingdom. This allows users to easily compare prices and services to find the best value.",
  },
  {
    Q: "How does WAJEEF ensure efficiency in the insurance process?",
    A: "WAJEEF ensures efficiency through its support team, which simplifies the request process, resolves issues quickly, and guarantees a response within 24 hours.",
  },
  {
    Q: "What types of insurance does WAJEEF specialize in?",
    A: "WAJEEF specializes in various types of insurance, including health insurance, properties insurance, marine insurance, engineering insurance, medical errors insurance, vehicle insurance, protection & savings insurance, and general insurance.",
  },
  {
    Q: "How can I contact WAJEEF for assistance?",
    A: "You can contact WAJEEF by phone at 011 507 6789 or via email at info@wajeef.com.sa. Additionally, you can visit their office at Al-Imam Ahmad Bin Hanbal St, Ar Rayyan, Riyadh.",
  },
  {
    Q: "What services does WAJEEF offer for after-sales support?",
    A: "WAJEEF provides after-sales support, including ongoing assistance, pricing negotiation, coverage optimization, and protection of client rights throughout the insurance policy period.",
  },
  {
    Q: "How can I make a request with WAJEEF?",
    A: "To make a request with WAJEEF, you can fill out the form provided on their website, including details such as your company name, phone number, email, insurance type, and any necessary authorization or documents.",
  },
  {
    Q: " What is WAJEEF's mission and vision?",
    A: "WAJEEF's mission is to provide the best insurance services and coverage to both companies and individuals in compliance with regulations approved by the Saudi Arabian Monetary Authority. Their vision is to be leaders in insurance brokerage by providing exceptional insurance solutions to clients.",
  },
  {
    Q: " Does WAJEEF offer exclusive savings on insurance commissions?",
    A: "Yes, WAJEEF offers exclusive savings on insurance commissions for a limited time. Be sure to unlock these savings and take advantage of the offer.",
  },
];

function setFAQ() {
  var value = document.getElementById("faq-list");
  var htmlConent = "";
  for (let index = 0; index < q.length; index++) {
    const item = q[index];
    htmlConent += `

<li data-aos="fade-up">
  <i class="bx bx-help-circle icon-help"></i>
  <a
    data-bs-toggle="collapse"
    class="collapse"
    data-bs-target="#faq-list-${index}"
  >
    ${item.Q}
    <i class="bx bx-chevron-down icon-show icon-show-en"></i>
    <i class="bx bx-chevron-up icon-close icon-close-en"></i>
  </a>
  <div id="faq-list-${index}" class="collapse" data-bs-parent=".faq-list">
    <p>${item.A}</p>
  </div>
</li>
        `;
  }
  value.innerHTML = htmlConent;
}
setFAQ();