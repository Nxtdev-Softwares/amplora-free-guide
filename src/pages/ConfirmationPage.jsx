import React from "react";

const ConfirmationPage = () => {
  return (
    <div className="confirmation-container">
      <div className="confirmation-card">
        <div className="icon-wrap">
          <span className="mail-icon">📩</span>
        </div>
        <h1 className="confirmation-title">Your free guide is on its way! 🎉</h1>

        <p className="confirmation-text">
          We just sent your copy of <strong>"The Ultimate Growth PDF"</strong> straight to your inbox.  
          It’s packed with insights gathered from <strong>100+ successful creators</strong> - you’re going to love it.
        </p>

        <div className="check-inbox-section">
          <h2>Don’t see it yet?</h2>
          <ul>
            <li>Check your <strong>Spam</strong> or <strong>Promotions</strong> tab, sometimes emails hide there.</li>
            <li>Mark our email as <strong>"Not Spam"</strong> so you don’t miss future updates.</li>
            <li>It’ll come from <strong>Amplora (by Nxtdev & Bro)</strong> - keep an eye out for that name.</li>
          </ul>
        </div>

        <div className="while-you-wait">
          <h2>💡 While you wait...</h2>
          <p>
            If you’re serious about building your own audience, you’ve just taken the first step.  
            This guide will help you understand what top creators are doing differently - and how you can do it too.  
            Check your inbox - and start learning what works. 🚀
          </p>
        </div>

        <footer className="footer">
          Built with ❤️ by <span className="brand">Nxtdev & Bininstructions</span> in collaboration with <span className="brand">Amplora</span>
        </footer>
      </div>
    </div>
  );
};

export default ConfirmationPage;
