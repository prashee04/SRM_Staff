import React, { useState } from "react";
import api, { onlineFeedbackEndpoint } from "../api";
import "./formstyle.css";
import { AiOutlineSwapRight } from "react-icons/ai";

function OnlineFeedbackForm({ onNextStep }) {
  const [employeeId, setEmployeeId] = useState("");
  const [feedback, setFeedback] = useState(8);
  const [cumulative, setCumulative] = useState(0);
  const [result, setResult] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post(onlineFeedbackEndpoint, {
        employee_id: employeeId,
        feedback: feedback,
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
      <h2>Online Feedback Form</h2>
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
          <label className="form-label">Feedback (8-10):</label>
          <input
            className="form-input"
            type="number"
            value={feedback}
            min={8}
            max={10}
            onChange={(e) => setFeedback(parseFloat(e.target.value))}
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

export default OnlineFeedbackForm;
