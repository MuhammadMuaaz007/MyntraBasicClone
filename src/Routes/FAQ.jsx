import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How do I place an order?",
      answer: "Simply browse our products, add items to your bag, and proceed to checkout. You'll need to provide your shipping address and payment information to complete the order."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, debit cards, UPI, net banking, and cash on delivery (COD) for eligible orders."
    },
    {
      question: "How long does shipping take?",
      answer: "Standard shipping typically takes 3-7 business days. Express shipping options are available at checkout for faster delivery (1-3 business days)."
    },
    {
      question: "Can I return or exchange items?",
      answer: "Yes! We offer a 14-day return policy. Items must be unworn, unwashed, and in original packaging with tags attached. You can initiate a return from your order history."
    },
    {
      question: "How do I track my order?",
      answer: "Once your order is shipped, you'll receive a tracking number via email. You can track your order status in the 'My Orders' section of your profile."
    },
    {
      question: "What if I receive a damaged item?",
      answer: "If you receive a damaged or defective item, please contact us immediately at mrmuaaz31@gmail.com with photos of the damage. We'll arrange a replacement or refund."
    },
    {
      question: "Do you offer size exchanges?",
      answer: "Yes, you can exchange items for a different size within 14 days of delivery. Simply initiate an exchange from your order details page."
    },
    {
      question: "How do I cancel my order?",
      answer: "You can cancel your order from the 'My Orders' section if it hasn't been shipped yet. Once shipped, you'll need to return it after delivery."
    },
    {
      question: "Are there any shipping charges?",
      answer: "Shipping is free on orders above PKR 999. For orders below this amount, a nominal shipping fee applies. Express shipping charges vary based on location."
    },
    {
      question: "How do I create an account?",
      answer: "Click on the Profile icon in the header, and you can create an account by providing your email address and setting a password. You can also sign up during checkout."
    },
    {
      question: "Can I modify my order after placing it?",
      answer: "You can cancel your order if it hasn't been shipped. For modifications, please contact our customer support at mrmuaaz31@gmail.com as soon as possible."
    },
    {
      question: "What is your refund policy?",
      answer: "Refunds are processed within 5-7 business days after we receive the returned item. The refund will be credited to your original payment method."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main className="faq-page">
      <div className="faq-container">
        <div className="faq-header">
          <h1>Frequently Asked Questions</h1>
          <p>Find answers to common questions about shopping, shipping, returns, and more.</p>
        </div>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div key={index} className={`faq-item ${openIndex === index ? "open" : ""}`}>
              <div className="faq-question" onClick={() => toggleFAQ(index)}>
                <h3>{faq.question}</h3>
                <span className="faq-icon">
                  {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                </span>
              </div>
              {openIndex === index && (
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="faq-footer">
          <p>Still have questions?</p>
          <a href="/contact" className="btn-contact">
            Contact Us
          </a>
        </div>
      </div>
    </main>
  );
};

export default FAQ;

