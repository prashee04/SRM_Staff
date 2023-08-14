import React, { useState } from "react";
import api, { researchPaperEndpoint } from "../api";
import "./formstyle.css";
import { AiOutlineSwapRight } from "react-icons/ai";

function ResearchPaperForm({ onNextStep }) {
  const [employeeId, setEmployeeId] = useState("");
  const [noOfPaper, setNoOfPaper] = useState(0);
  const [position, setPosition] = useState(1); // Default position
  const [cumulative, setCumulative] = useState(0);
  const [result, setResult] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post(researchPaperEndpoint, {
        employee_id: employeeId,
        no_ofPaper: noOfPaper,
        position: position,
        cumulative: cumulative,
      });

      setResult(response.data);

      // Move to the next step
      onNextStep();
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="form-container">
      <h2>Research Paper Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label className="form-label">Employee ID:</label>
          <input
            className="form-input"
            type="text"
            value={employeeId}
            onChange={(e) => setEmployeeId(e.target.value)}
          />
        </div>
        <div>
          <label className="form-label">Number of Papers:</label>
          <input
            className="form-input"
            type="number"
            value={noOfPaper}
            onChange={(e) => setNoOfPaper(parseInt(e.target.value))}
          />
        </div>
        <div>
          <label className="form-label">Position:</label>
          <select
            className="form-select"
            value={position}
            onChange={(e) => setPosition(parseInt(e.target.value))}
          >
            <option value={1}>Position 1</option>
            <option value={2}>Position 2</option>
            <option value={3}>Position 3</option>
          </select>
        </div>
        <div>
          <label className="form-label">Cumulative:</label>
          <input
            className="form-input"
            type="number"
            value={cumulative}
            onChange={(e) => setCumulative(parseInt(e.target.value))}
          />
        </div>
        <button type="submit" className="btn dflex">
          <span>Next</span>
          <AiOutlineSwapRight className="icon" />
        </button>
      </form>
      {result && (
        <div className="result-container">
          <p>Day: {result.day}</p>
          <p>Score: {result.score}</p>
        </div>
      )}
    </div>
  );
}

export default ResearchPaperForm;
