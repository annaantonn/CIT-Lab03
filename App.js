import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const [language, setLanguage] = useState("");
  const greetings = [
    { language: "English", greeting: "Hello" },
    { language: "Spanish", greeting: "Hola" },
    { language: "French", greeting: "Bonjour" },
    { language: "Klingon", greeting: "huqneH" },
    { language: "Shyriiwook", greeting: "Wyaaaaaa" }
  ];
  const greeting = () => {
    const filtered = greetings.filter((item) => item.language === language);
    if (filtered.length > 0) return filtered[0].greeting;
    else return "";
  };

  return (
    <div>
      <h1>Lab 4</h1>
      <div>
        {greetings.map(({ language }) => (
          <button key={language} onClick={() => setLanguage(language)}>
            {language}
          </button>
        ))}
      </div>
      <h3>Current language: {language}</h3>
      <h4>Greeting: {greeting()}</h4>
    </div>
  );
}
