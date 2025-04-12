import React, { useState } from "react";
import * as XLSX from "xlsx";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from "chart.js";
import * as pdfjsLib from "pdfjs-dist";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const CashFlow = () => {
  const [data, setData] = useState([]);
  const [totals, setTotals] = useState({ inflow: 0, outflow: 0, net: 0 });
  const [monthlyData, setMonthlyData] = useState({ labels: [], inflow: [], outflow: [] });

  const parsePDF = async (file) => {
    const reader = new FileReader();
    reader.onload = async () => {
      const typedArray = new Uint8Array(reader.result);
      const pdf = await pdfjsLib.getDocument({ data: typedArray }).promise;
      let extractedText = "";
      for (let i = 1; i <= pdf.numPages; i++) {
        const page = await pdf.getPage(i);
        const content = await page.getTextContent();
        extractedText += content.items.map((item) => item.str).join(" ") + "\n";
      }

      const lines = extractedText.split("\n").filter(line => line.match(/\d{4}-\d{2}-\d{2}/));
      const parsed = lines.map(line => {
        const [date, description, amountStr] = line.split(/\s{2,}|\t/); // crude split
        const amount = parseFloat(amountStr?.replace(/[^-\d.]/g, ""));
        return { date, description, amount };
      }).filter(row => row.amount && row.date);

      processTransactions(parsed);
    };
    reader.readAsArrayBuffer(file);
  };

  const parseExcelOrCSV = (file) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const workbook = XLSX.read(e.target.result, { type: "binary" });
      const sheet = workbook.Sheets[workbook.SheetNames[0]];
      const rows = XLSX.utils.sheet_to_json(sheet);
      const cleaned = rows.map(row => ({
        date: row.Date || row.date,
        description: row.Description || row.description,
        amount: parseFloat(row.Amount || row.amount || 0)
      })).filter(row => row.amount && row.date);
      processTransactions(cleaned);
    };
    reader.readAsBinaryString(file);
  };

  const processTransactions = (transactions) => {
    const inflow = transactions.filter(t => t.amount > 0).reduce((sum, t) => sum + t.amount, 0);
    const outflow = transactions.filter(t => t.amount < 0).reduce((sum, t) => sum + t.amount, 0);
    const net = inflow + outflow;

    const monthly = {};
    transactions.forEach(t => {
      const month = new Date(t.date).toLocaleString("default", { month: "short", year: "numeric" });
      if (!monthly[month]) monthly[month] = { inflow: 0, outflow: 0 };
      if (t.amount > 0) monthly[month].inflow += t.amount;
      else monthly[month].outflow += Math.abs(t.amount);
    });

    setMonthlyData({
      labels: Object.keys(monthly),
      inflow: Object.values(monthly).map(m => m.inflow),
      outflow: Object.values(monthly).map(m => m.outflow),
    });

    setData(transactions);
    setTotals({ inflow, outflow, net });
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const isPDF = file.name.endsWith(".pdf");
    const isExcelOrCSV = file.name.endsWith(".xlsx") || file.name.endsWith(".csv");

    if (isPDF) parsePDF(file);
    if (isExcelOrCSV) parseExcelOrCSV(file);
  };

  return (
    <div className="page-section">
      <h2>📊 Cash Flow Hub</h2>
      <input type="file" accept=".xlsx,.csv,.pdf" onChange={handleFileUpload} className="file-upload" />

      {data.length > 0 && (
        <>
          <div className="summary-cards">
            <div className="card">💵 Inflow: ${totals.inflow.toFixed(2)}</div>
            <div className="card">💸 Outflow: ${Math.abs(totals.outflow).toFixed(2)}</div>
            <div className="card net">Net Cash: ${totals.net.toFixed(2)}</div>
          </div>

          {totals.outflow < -5000 && totals.net < 0 && (
            <div className="alert">⚠️ Warning: High monthly burn rate</div>
          )}

          {monthlyData.labels.length > 0 && (
            <Bar
              data={{
                labels: monthlyData.labels,
                datasets: [
                  { label: "Inflow", data: monthlyData.inflow, backgroundColor: "#4caf50" },
                  { label: "Outflow", data: monthlyData.outflow, backgroundColor: "#f44336" },
                ],
              }}
              options={{ responsive: true, plugins: { legend: { position: "bottom" } } }}
            />
          )}
        </>
      )}
    </div>
  );
};

export default CashFlow;
