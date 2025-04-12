import React, { useRef } from 'react';
import * as XLSX from 'xlsx';

const UploadPanel = ({ onDataParsed }) => {
  const fileInputRef = useRef();

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, { type: 'array' });

      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      const parsedData = XLSX.utils.sheet_to_json(sheet);

      onDataParsed(parsedData); // Send data to Dashboard
    };

    reader.readAsArrayBuffer(file);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '2rem' }}>
      <input
        type="file"
        accept=".xlsx,.xls,.csv"
        onChange={handleFileUpload}
        ref={fileInputRef}
        style={{ display: 'none' }}
      />
      <button className="retro-button" onClick={() => fileInputRef.current.click()}>
        Upload Financial File
      </button>
    </div>
  );
};

export default UploadPanel;
