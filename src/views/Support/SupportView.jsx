import React, { useState, useEffect } from "react";

const Support = () => {
  const [faqs, setFaqs] = useState([]);
  const [expanded, setExpanded] = useState(null); 

  useEffect(() => {
    const savedFaqs = JSON.parse(localStorage.getItem("faqs"));
    if (savedFaqs) {
      setFaqs(savedFaqs);
    } else {
      const defaultFaqs = [
        { question: "How to book a ticket?", answer: "You can book tickets through our website or mobile app." },
        { question: "How to check PNR status?", answer: "Use the PNR number on our website to check the status." },
        { question: "How to cancel a booking?", answer: "Bookings can be canceled through the 'My Bookings' section." }
      ];
      setFaqs(defaultFaqs);
      localStorage.setItem("faqs", JSON.stringify(defaultFaqs)); 
    }
  }, []);

  const handleToggle = (index) => {
    setExpanded(expanded === index ? null : index); 
  };

  const handleRefresh = () => {
    const savedFaqs = JSON.parse(localStorage.getItem("faqs"));
    if (savedFaqs) {
      setFaqs(savedFaqs);
    } else {
      const defaultFaqs = [
        { question: "How to book a ticket?", answer: "You can book tickets through our website or mobile app." },
        { question: "How to check PNR status?", answer: "Use the PNR number on our website to check the status." },
        { question: "How to cancel a booking?", answer: "Bookings can be canceled through the 'My Bookings' section." }
      ];
      setFaqs(defaultFaqs);
      localStorage.setItem("faqs", JSON.stringify(defaultFaqs));
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-green-700 mb-4">Support</h1>
      <p className="text-lg text-gray-700 text-center max-w-2xl">
        If you need any help or have any questions, feel free to reach out to our support team. 
        We are here to assist you with your train booking experience.
      </p>

      

      <div className="mt-6">
        <h2 className="text-2xl font-semibold text-green-600">FAQs</h2>
        <button
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md"
          onClick={handleRefresh}
        >
          Refresh FAQs
        </button>
        <ul className="mt-2 text-gray-700">
          {faqs.map((faq, index) => (
            <li key={index} className="mt-4">
              <div
                className="cursor-pointer font-semibold text-green-600"
                onClick={() => handleToggle(index)}
              >
                {faq.question}
              </div>
              {expanded === index && (
                <div className="mt-2 text-gray-800">{faq.answer}</div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Support;
