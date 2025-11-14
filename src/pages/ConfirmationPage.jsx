import React, {useState, useEffect} from "react";
import { CircleSmall } from 'lucide-react';

const ConfirmationPage = () => {

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const [response, setResponse] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleResponse = async (answer) => {
  const scriptURL = "YOUR_GOOGLE_WEB_APP_URL";

  await fetch(scriptURL + "?sheet=Feedback", {
    method: "POST",
    body: JSON.stringify({ response: answer }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  setSubmitted(true);
};

  return (
    <div className="thank-you-page">
      
      {/* Icon & Header */}
      <div className="icon-wrap">📩</div>
      <h1 className="confirmation-title">Your free guide is on its way! 🎉</h1>
      
      {/* Main text */}
      <p className="confirmation-text">
        We just sent <strong>"The Ultimate Growth PDF"</strong> straight to your inbox.  
        It’s packed with insights from <strong>100+ successful creators</strong> - you’re going to love it!
      </p>

      {/* Check Inbox Section */}
      <div className="check-inbox-section">
        <h2>Don’t see it yet?</h2>
        <ul>
          <li>Check your <strong>Spam</strong> or <strong>Promotions</strong> tab - sometimes emails hide there.</li>
          <li>Mark our email as <strong>"Not Spam"</strong> to receive future updates.</li>
          <li>It’ll come from <strong>nxtdev</strong> - keep an eye out! 👀</li>
        </ul>
      </div>

      {/* Optional Question Section */}
      <div className="question-section">
        <h2>💬 Quick question (optional)</h2>
        <p>
          We’re exploring ways to make <span className="bolded"> content creation easier </span> for creators. How would you feel about a tool that helps you generate content based on your style?
        </p>

        {!submitted ? (
          <div className="buttons">
            <button onClick={() => handleResponse("Yes, that would save me tons of time")}>
              <CircleSmall className="answers-bullets"/> Yes, that would save me tons of time
            </button>
            <button onClick={() => handleResponse("Maybe, if I could review before it posts")}>
              <CircleSmall className="answers-bullets"/> Maybe, if I could review before it posts
            </button>
            <button onClick={() => handleResponse("No, I prefer full control over every post")}>
              <CircleSmall className="answers-bullets"/> No, I prefer full control over every post
            </button>
          </div>
        ) : (
          <p className="thank-you-feedback">Thanks for your feedback! ✅</p>
        )}
      </div>

      {/* While you wait */}
      <div className="while-you-wait">
        <h2>💡 While you wait...</h2>
        <p>
          If you’re serious about building your audience, you’ve just taken the first step.  
          This guide will help you understand what top creators are doing differently - and how you can do it too. 🚀
        </p>
      </div>

      {/* Footer */}
      <footer className="footer">
        Built with ❤️ by <span className="brand">Nxtdev & Bininstructions</span> in collaboration with <span className="brand">Amplora</span>
      </footer>

      {/* Hidden Netlify Form */}
      <form name="creator-growth-question" netlify hidden>
        <input type="text" name="question-response" value={response} readOnly />
      </form>
    </div>
  );
};

export default ConfirmationPage;
