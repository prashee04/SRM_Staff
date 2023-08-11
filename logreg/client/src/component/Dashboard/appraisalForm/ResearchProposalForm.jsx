import React, { useState } from "react";
import api, { researchProposalEndpoint } from "../api";
import "./formstyle.css"; // Make sure to use the correct CSS file name

function ResearchProposalForm({ onNextStep }) {
  const [employeeId, setEmployeeId] = useState("");
  const [proposal, setProposal] = useState(0);
  const [result, setResult] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post(researchProposalEndpoint, {
        employee_id: employeeId,
        proposal: proposal,
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
      <h2>Research Proposal Form</h2>
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
          <label className="form-label">Number of Proposals:</label>
          <input
            className="form-input"
            type="number"
            value={proposal}
            onChange={(e) => setProposal(parseInt(e.target.value))}
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

export default ResearchProposalForm;
