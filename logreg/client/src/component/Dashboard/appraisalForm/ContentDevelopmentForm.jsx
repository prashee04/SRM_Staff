import { AiOutlineSwapRight } from "react-icons/ai";
import React, { useState } from "react";
import api, { contentDevelopmentEndpoint } from "../api";
import "./formstyle.css"; // Make sure to use the correct CSS file name

function ContentDevelopmentForm({ onNextStep }) {
  const [employeeId, setEmployeeId] = useState("");
  const [
    numberOfcontent_development,
    setNumberOfcontent_development,
  ] = useState(0);
  const [result, setResult] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post(contentDevelopmentEndpoint, {
        employee_id: employeeId,
        numberOfcontent_development: numberOfcontent_development,
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
      <h2>Content Development Form</h2>
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
          <label className="form-label">
            Number of Content Development Projects:
          </label>
          <input
            className="form-input"
            type="number"
            value={numberOfcontent_development}
            onChange={(e) =>
              setNumberOfcontent_development(parseInt(e.target.value))
            }
          />
        </div>
        <button type="submit" className="btn dflex">
          <span>Submit</span>
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

export default ContentDevelopmentForm;
