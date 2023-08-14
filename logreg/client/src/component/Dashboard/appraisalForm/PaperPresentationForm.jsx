import React, { useState } from "react";
import api, { paperPresentationEndpoint } from "../api";
import "./formstyle.css";
import { AiOutlineSwapRight } from "react-icons/ai";

function PaperPresentationForm({ onNextStep }) {
  const [employeeId, setEmployeeId] = useState("");
  const [conference, setConference] = useState("");
  const [noOfPaper, setNoOfPaper] = useState(0);
  const [cumulative, setCumulative] = useState(0);
  const [result, setResult] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post(paperPresentationEndpoint, {
        employee_id: employeeId,
        conference: conference,
        no_ofPaper: noOfPaper,
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
      <h2>Paper Presentation Form</h2>
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
          <label className="form-label">Conference:</label>
          <select
            className="form-select"
            value={conference}
            onChange={(e) => setConference(e.target.value)}
          >
            <option value="">Select Conference</option>
            <option value="National">National</option>
            <option value="International">International</option>
          </select>
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

export default PaperPresentationForm;
