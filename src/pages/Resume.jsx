/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import resume from "../assets/Muhammad Hammad Aslam.pdf";
import { Button, Typography } from "@mui/material";

pdfjs.GlobalWorkerOptions.workerSrc = `/pdf.worker.mjs`;

const Resume = () => {
  // const [numPages, setNumPages] = useState(null);
  // const [error, setError] = useState(null); // For handling load errors

  // const onDocumentLoadSuccess = ({ numPages }) => {
  //   setNumPages(numPages);
  // };

  // const onLoadError = (error) => {
  //   console.error("Error while loading document:", error);
  //   setError(error); // Set error state
  // };
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = resume;
    link.download = "Muhammad Hammad Aslam.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div className="flex flex-col items-center overflow-hidden p-5 bg-[#121212]">
      <Typography sx={{ fontSize: "40pt" }}>My Resume</Typography>
      <Button
        variant="contained"
        onClick={handleDownload}
        sx={{
          color: "#121212",
          textTransform: "capitalize",
          backgroundColor: "#e6e6e6",
          "&:hover": {
            backgroundColor: "#232323",
            color: "#e6e6e6",
          },
        }}
      >
        Download Resume
      </Button>
      {/* PDF Pages are rendered as individual "web-like" pages */}
      {/* <Document
        file={resume}
        onLoadSuccess={onDocumentLoadSuccess}
        onLoadError={onLoadError}
      >
        {Array.from(new Array(numPages), (el, index) => (
          <div
            key={`page_${index + 1}`}
            style={{
              marginTop: "20px",
              padding: 'none',
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Page scale={1.5} pageNumber={index + 1} className={"page"} />
          </div>
        ))}
      </Document> */}
      <object
        data={`${resume}#toolbar=0`}
        type="application/pdf"
        className="mt-5 mx-auto p-0 w-full h-[1200px] "
      >
        <div className="w-full h-full flex items-center justify-center bg-gray-100">
          <div className="text-center p-4">
            <p className="mb-4">
              Your browser does not support embedded PDF viewing.
            </p>
            <a
              href={`${resume}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
            >
              Download PDF
            </a>
          </div>
        </div>
      </object>
    </div>
  );
};

export default Resume;
