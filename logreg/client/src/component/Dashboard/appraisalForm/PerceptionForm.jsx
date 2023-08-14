import React, { useState } from "react";
import api, { perceptionEndpoint } from "../api";
import "./formstyle.css";
import { AiOutlineSwapRight } from "react-icons/ai";

function PerceptionForm({ onNextStep }) {
  const [employeeId, setEmployeeId] = useState("");
  const [position, setPosition] = useState("");
  const [cumulative, setCumulative] = useState(0);
  const [result, setResult] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post(perceptionEndpoint, {
        employee_id: employeeId,
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
      <h2>Perception Form</h2>
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
          <label className="form-label">Position:</label>
          <select
            className="form-select"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
          >
            <option value="">Select Position</option>
            <option value="convener">Convener</option>
            <option value="co-covener">Co-Convener</option>
            <option value="committeMember">Committee Member</option>
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

export default PerceptionForm;
