import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css"; // Optional: for interactive features like links
import resume from "../assets/Muhammad Hammad Aslam.pdf"; // Import your PDF file here
import { Button, Typography } from "@mui/material";

pdfjs.GlobalWorkerOptions.workerSrc = `/pdf.worker.mjs`;

const CV = () => {
  const [numPages, setNumPages] = useState(null);
  const [error, setError] = useState(null); // For handling load errors

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const onLoadError = (error) => {
    console.error("Error while loading document:", error);
    setError(error); // Set error state
  };
  const handleDownload = () => {
    // Create an anchor element
    const link = document.createElement('a');
    link.href = resume; // URL of the PDF
    link.download = 'Muhammad Hammad Aslam.pdf'; // The filename for the downloaded file
    document.body.appendChild(link); // Append the link to the body
    link.click(); // Programmatically click the link to trigger the download
    document.body.removeChild(link); // Remove the link after triggering the download
  };
  return (
    <div
      style={{
        padding: "20px",
        overflow: 'hidden'
      }}
    >
      <Typography sx={{ fontSize: "40pt" }}>My Resume</Typography>
      {error && <div>Error loading PDF: {error.message}</div>}{" "}
      {/* Display error if any */}
      <Button
      variant="contained"
          onClick={handleDownload}
          sx={{ color: "#121212", textTransform: 'capitalize', backgroundColor: '#e6e6e6', "&:hover": {
            backgroundColor: '#232323',
            color: '#e6e6e6'
          } }}
        >
          Download CV
        </Button>
      {/* PDF Pages are rendered as individual "web-like" pages */}
      <Document
        file={resume}
        onLoadSuccess={onDocumentLoadSuccess}
        onLoadError={onLoadError}
      >
        {Array.from(new Array(numPages), (el, index) => (
          <div key={`page_${index + 1}`} style={{ marginTop: "20px", display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Page scale={1.5} pageNumber={index + 1} className={"page"} />
          </div>
        ))}
      </Document>
    </div>
  );
};

export default CV;
