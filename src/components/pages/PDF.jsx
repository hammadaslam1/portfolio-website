/* eslint-disable no-unused-vars */
import React, { useRef } from "react";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

const GeneratePdf = ({ componentRef }) => {
  const pdfRef = useRef(null);

  const generatePdf = () => {
    const pdf = new jsPDF("p", "pt", "a4");
    html2canvas(componentRef.current).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      pdf.addImage(imgData, "PNG", 0, 0);
      pdf.save("my-pdf.pdf");
    });
  };

  return (
    <button onClick={generatePdf}>Generate PDF</button>
  );
};

export default GeneratePdf;