import React, { useState } from "react";
import api, { innovativeEndpoint } from "../api";
import "./formstyle.css"; // Make sure to use the correct CSS file name

function InnovativeForm({ onNextStep }) {
  const [employeeId, setEmployeeId] = useState("");
  const [number_of_inovative, setNumber_of_inovative] = useState(0);
  const [result, setResult] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post(innovativeEndpoint, {
        employee_id: employeeId,
        number_of_inovative: number_of_inovative,
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
      <h2>Innovative Form</h2>
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
          <label className="form-label">Number of Innovative Projects:</label>
          <input
            className="form-input"
            type="number"
            value={number_of_inovative}
            onChange={(e) => setNumber_of_inovative(parseInt(e.target.value))}
          />
        </div>
        <button className="submit-button" type="submit">
          Submit
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

export default InnovativeForm;
