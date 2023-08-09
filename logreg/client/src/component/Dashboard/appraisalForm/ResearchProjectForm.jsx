import React, { useState } from "react";
import api, { researchProjectEndpoint } from "../api";
import "./formstyle.css"; // Make sure to use the correct CSS file name

function ResearchProjectForm({ onNextStep }) {
  const [employeeId, setEmployeeId] = useState("");
  const [numberOfProject, setNumberOfProject] = useState(0);
  const [cumulative, setCumulative] = useState(0);
  const [price, setPrice] = useState(0);
  const [fstAuthor, setFstAuthor] = useState("");
  const [secdAuthor, setSecdAuthor] = useState("");
  const [result, setResult] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post(researchProjectEndpoint, {
        employee_id: employeeId,
        number_of_project: numberOfProject,
        cumulative: cumulative,
        price: price,
        fstAuthor: fstAuthor,
        secdAuthor: secdAuthor,
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
      <h2>Research Project Form</h2>
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
          <label className="form-label">Number of Projects:</label>
          <input
            className="form-input"
            type="number"
            value={numberOfProject}
            onChange={(e) => setNumberOfProject(parseInt(e.target.value))}
          />
        </div>
        <div>
          <label className="form-label">Price:</label>
          <input
            className="form-input"
            type="number"
            value={price}
            onChange={(e) => setPrice(parseFloat(e.target.value))}
          />
        </div>
        <div>
          <label className="form-label">First Author:</label>
          <input
            className="form-input"
            type="text"
            value={fstAuthor}
            onChange={(e) => setFstAuthor(e.target.value)}
          />
        </div>
        <div>
          <label className="form-label">Second Author:</label>
          <input
            className="form-input"
            type="text"
            value={secdAuthor}
            onChange={(e) => setSecdAuthor(e.target.value)}
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
          Submit
        </button>
      </form>
      {result && (
        <div className="result-container">
          <p>Day: {result.day}</p>
          <p>
            {result.FstAuthor}: {result.FstScore}
          </p>
          <p>
            {result.SecAuthor}: {result.SecScore}
          </p>
        </div>
      )}
    </div>
  );
}

export default ResearchProjectForm;
