import React, { useState } from 'react';
import * as XLSX from 'xlsx';

const FileDropzone = ({ onFilesParsed }) => {
  const [files, setFiles] = useState([]);

  const handleDrop = (e) => {
    e.preventDefault();
    const droppedFiles = Array.from(e.dataTransfer.files);
    processFiles(droppedFiles);
  };

  const handleFileSelect = (e) => {
    const selectedFiles = Array.from(e.target.files);
    processFiles(selectedFiles);
  };

  const processFiles = (fileList) => {
    const parsedResults = [];
    let filesProcessed = 0;

    fileList.forEach((file) => {
      const reader = new FileReader();

      reader.onload = (e) => {
        const data = new Uint8Array(e.target.result);
        const workbook = XLSX.read(data, { type: 'array' });
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];
        const jsonData = XLSX.utils.sheet_to_json(sheet);

        parsedResults.push({ name: file.name, data: jsonData });
        filesProcessed++;

        if (filesProcessed === fileList.length) {
          setFiles(fileList);
          onFilesParsed(parsedResults);
        }
      };

      reader.readAsArrayBuffer(file);
    });
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        style={{
          border: '2px dashed #cb4722',
          borderRadius: '10px',
          padding: '2rem',
          textAlign: 'center',
          backgroundColor: '#fffbe6',
        }}
      >
        <p style={{ fontWeight: 'bold' }}>📂 Drag & drop financial files here (Excel or CSV)</p>
        <p style={{ fontSize: '0.9rem' }}>Or click below to select files manually:</p>
        <input type="file" multiple accept=".xlsx,.xls,.csv" onChange={handleFileSelect} />
      </div>

      {files.length > 0 && (
        <ul style={{ marginTop: '1rem', textAlign: 'left' }}>
          {files.map((file, i) => (
            <li key={i}>{file.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FileDropzone;
