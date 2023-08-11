import React, { useState } from "react";
import api, { fdpEndpoint } from "../api";
import "./formstyle.css";

function FDPForm({ onNextStep }) {
  const [employeeId, setEmployeeId] = useState("");
  const [weeks, setWeeks] = useState(1);
  const [program, setProgram] = useState(0);
  const [cumulative, setCumulative] = useState(0);
  const [result, setResult] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post(fdpEndpoint, {
        employee_id: employeeId,
        weeks: weeks,
        program: program,
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
      <h2>FDP Form</h2>
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
          <label className="form-label">Weeks:</label>
          <select
            className="form-select"
            value={weeks}
            onChange={(e) => setWeeks(parseInt(e.target.value))}
          >
            <option value={1}>1 week</option>
            <option value={2}>2 weeks</option>
          </select>
        </div>
        <div>
          <label className="form-label">Program:</label>
          <input
            className="form-input"
            type="number"
            value={program}
            onChange={(e) => setProgram(parseInt(e.target.value))}
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
        <button className="submit-button" type="submit">
          Next
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

export default FDPForm;
