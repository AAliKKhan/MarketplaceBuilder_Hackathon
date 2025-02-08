import { useState } from "react";

interface FAQ {
  question: string;
  answer: string;
}

const FAQs = () => {
  const faqs: FAQ[] = [
    {
      question: "Is my payment secure?",
      answer:
        "Yes! We use encrypted payment methods to ensure your transactions remain secure.",
    },
    {
      question: "Can I get a refund?",
      answer:
        "Yes, refunds are processed within 5-7 business days after request approval.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept Visa, MasterCard, PayPal, and digital wallets like Apple Pay & Google Pay.",
    },
    {
      question: "Will I receive a payment confirmation?",
      answer:
        "Yes, a confirmation email will be sent once your payment is successfully processed.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="max-w-6xl w-full mx-auto px-6 py-8">
      <h2 className="text-3xl font-bold text-center text-blue-800 dark:text-blue-200 mb-6">
       Frequently Asked Questions
      </h2>

      <div className="grid gap-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white dark:bg-blue-800 shadow-md rounded-lg p-4 transition-transform transform hover:scale-[1.02]"
          >
            <button
              className="flex justify-between items-center w-full text-left text-lg font-semibold text-blue-700 dark:text-blue-400"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              {faq.question}
              <span className="text-xl text-gray-500">
                {openIndex === index ? "➖" : "➕"}
              </span>
            </button>
            <div
              className={`transition-all overflow-hidden ${
                openIndex === index ? "max-h-40 mt-2" : "max-h-0"
              }`}
            >
              <p className="text-gray-600 dark:text-gray-300 mt-2 text-md leading-relaxed">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQs;
