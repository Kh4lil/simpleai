import React, { useState, useEffect, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import useInViewAnimation from "../hooks/useInViewAnimation";
import { animated } from "react-spring";
import "../styles/FAQSection.css";
import FAQImage from "../assets/images/DeFi-graphic.svg";

const FAQSection = () => {
  const [activeIndices, setActiveIndices] = useState([]);
  const [animationTriggered, setAnimationTriggered] = useState(false);
  const { ref, animation } = useInViewAnimation(
    { opacity: 0, transform: "translateY(100px)" },
    { opacity: 1, transform: "translateY(0px)" }
  );

  const faqs = [
    {
      question: "What services do you offer?",
      answer:
        "We provide custom AI product development, system integrations, data analytics, web, mobile applications, and ongoing support and maintenance.",
    },
    {
      question: "How does your development process work?",
      answer:
        "We begin by understanding your business needs and goals. Then we design, build, test, and deploy your application, ensuring continuous support and maintenance.",
    },
    {
      question: "What technologies do you use?",
      answer:
        "We select the best technologies based on your project requirements. Our expertise includes a wide range of tools and frameworks for AI product development, web development, and data analytics, ensuring your applications are scalable, maintainable, and tailored to your needs.",
    },
    {
      question: "What are your pricing models?",
      answer:
        "We offer flexible pricing models including fixed price, time and material, and subscription-based pricing. Contact us for a free consultation and personalized quote.",
    },
    {
      question: "How long does it take to build a custom solution?",
      answer:
        "The timeline depends on the project's complexity and requirements. On average, it takes a few weeks to several months. We provide an estimated timeline during the planning phase.",
    },
    {
      question: "Why choose SimpleAI over hiring a full-time developer?",
      answer:
        "Hiring a full-time developer can be expensive and you might not always have enough work for them. Our flexible model allows you to pay only when you need our services, offering cost-efficiency and scalability.",
    },
    {
      question: "Can you work on our existing Github repository?",
      answer:
        "Yes, we can create a new repository, fork an existing one, or work on your repository with the access you provide.",
    },
    {
      question: "How do you ensure data security?",
      answer:
        "We sign an NDA and use best practices to secure your data, ensuring confidentiality and protection against unauthorized access.",
    },
    {
      question: "What if I have a large and complex task?",
      answer:
        "Large tasks are broken down into manageable sub-tasks to ensure progress tracking and timely completion. We keep you informed throughout the process.",
    },
    {
      question: "What if I'm not satisfied with the work?",
      answer:
        "We offer unlimited revisions until you are completely satisfied. If you're not happy within the first month, we provide a full refund.",
    },
    {
      question: "How does the satisfaction guarantee work?",
      answer:
        "If you're not happy with our service within the first month, let us know via Slack or email, and we'll close your account and issue a full refund.",
    },
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

  useEffect(() => {
    if (ref.current && !animationTriggered) {
      setAnimationTriggered(true);
    }
  }, [ref, animationTriggered]);

  return (
    <div className="faq-section">
      <div className="faq-container">
        <animated.div
          ref={ref}
          style={
            animationTriggered
              ? animation
              : { opacity: 1, transform: "translateY(0px)" }
          }
          className="faq-content"
        >
          <h2>Have a Question?</h2>
          <p>
            We've compiled a list of frequently asked questions to help you get
            started.
          </p>
          <div className="faq-items">
            {faqs.map((faq, index) => (
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
                  <span className="question-text">{faq.question}</span>
                </div>
                <CSSTransition
                  in={activeIndices.includes(index)}
                  timeout={700}
                  classNames="faq-answer"
                  unmountOnExit
                >
                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                </CSSTransition>
              </div>
            ))}
          </div>
        </animated.div>
        <div className="faq-image">
          <img src={FAQImage} alt="FAQ Illustration" />
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
