import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import "../styles/FAQSection.css";
import FAQImage from "../assets/images/DeFi-graphic.svg";

const FAQSection = () => {
  const [activeIndices, setActiveIndices] = useState([]);

  const questions = [
    "How do I know that my investment is safe?",
    "What kind of encryption do you use?",
    "Is Stratus available in my country?",
    "What are the fees involved?",
    "What is the asset allocation?",
    "Who is the team behind Stratus?",
    "How can I protect against scammers?",
  ];

  const answers = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
  ];

  const toggleAccordion = (index) => {
    setActiveIndices((prev) => {
      if (prev.includes(index)) {
        return prev.filter((i) => i !== index);
      } else {
        return [...prev, index];
      }
    });
  };

  return (
    <div className="faq-section">
      <div className="container">
        <div className="faq-content">
          <h2>Questions</h2>
          <p>
            Aliquam hendrerit ligula eu lobortis maximus. Praesent element
            rhoncus ex eu sodales convallis ultricies sit amet.
          </p>
          <div className="faq-items">
            {questions.map((question, index) => (
              <div className="faq-item" key={index}>
                <div
                  className="faq-question"
                  onClick={() => toggleAccordion(index)}
                >
                  <span
                    className={`icon ${
                      activeIndices.includes(index) ? "active" : ""
                    }`}
                  >
                    &#8250;
                  </span>
                  <span className="question-text">{question}</span>
                </div>
                <CSSTransition
                  in={activeIndices.includes(index)}
                  timeout={700}
                  classNames="faq-answer"
                  unmountOnExit
                >
                  <div className="faq-answer">
                    <p>{answers[index]}</p>
                  </div>
                </CSSTransition>
              </div>
            ))}
          </div>
        </div>
        <div className="faq-image">
          <img src={FAQImage} alt="FAQ Illustration" />
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
