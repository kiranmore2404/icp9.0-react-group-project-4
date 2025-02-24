import React, { useState } from "react";
import Background from "../../assets/images/bg7.jpg";
import languageInfo from "../../config/languageInfo";

const About = () => {
  const [language, setLanguage] = useState("en");

  return (
    <div
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${Background})` }}
    >
      <div className="md:w-[80%] w-full flex items-center justify-center md:mt-20 mt-25">
        <div className="w-[90%] bg-white shadow-lg rounded-lg p-8 border border-gray-300">
          <div className="flex justify-end mb-4">
            <select
              className="p-2 border border-gray-400 rounded px-2 md:text-lg text-sm"
              onChange={(e) => setLanguage(e.target.value)}
              value={language}
            >
              <option value="en">English</option>
              <option value="hi">हिन्दी</option>
              <option value="mr">मराठी</option>
            </select>
          </div>

          <h1 className="md:text-3xl text-2xl font-bold text-green-700 text-center md:mb-6 mb-3">
            {languageInfo.translations[language].title}
          </h1>
          <p className="text-gray-700 md:text-lg text-sm text-justify md:mb-4 mb-2">
            {languageInfo.translations[language].description}
          </p>
          <h2 className="md:text-2xl text-lg font-semibold text-green-600 mt-6">
            {languageInfo.translations[language].whyChoose}
          </h2>
          <ul className="list-disc list-inside text-gray-700 md:text-lg text-sm mt-2">
            {languageInfo.translations[language].features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
          <p className="text-center text-green-700 md:text-lg text-sm font-semibold mt-6">
            {languageInfo.translations[language].slogan}
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
