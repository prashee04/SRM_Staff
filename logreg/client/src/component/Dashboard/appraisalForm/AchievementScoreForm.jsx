import React, { useState } from "react";
import api, { achievementScoreEndpoint } from "../api";

import { AiOutlineSwapRight } from "react-icons/ai";
import "./formstyle.css";
function AchievementScoreForm({ onNextStep }) {
  const [employeeId, setEmployeeId] = useState("");
  const [target, setTarget] = useState(0);
  const [cumulative, setCumulative] = useState(0);
  const [result, setResult] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post(achievementScoreEndpoint, {
        employee_id: employeeId,
        target: target,
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
      <h2>Achievement Score Form</h2>
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
          <label className="form-label">Target:</label>
          <input
            className="form-input"
            type="number"
            value={target}
            onChange={(e) => setTarget(parseInt(e.target.value))}
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

export default AchievementScoreForm;
