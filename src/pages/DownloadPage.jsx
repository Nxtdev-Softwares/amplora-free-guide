import React from "react";
import "../styles.css";
import pdfFile from "../assets/YourPDF.pdf"; // Put your PDF in assets folder

const DownloadPage = () => {
  return (
    <div className="download-page">
      <h1>Your Free PDF is Ready!</h1>
      <p>Click the button below to download your free guide:</p>
      <a href={pdfFile} download>
        <button>Download PDF</button>
      </a>
      <p>Enjoy and implement the strategies to grow faster!</p>
    </div>
  );
};

export default DownloadPage;
