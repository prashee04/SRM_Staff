import React, { useState } from "react";
import api, { consultancyEndpoint } from "../api";
import "./formstyle.css"; // Make sure to use the correct CSS file name
import { AiOutlineSwapRight } from "react-icons/ai";

function ConsultancyForm({ onNextStep }) {
  const [employeeId, setEmployeeId] = useState("");
  const [numberOFcouncil, setNumberOFcouncil] = useState(0);
  const [price, setPrice] = useState(0);
  const [result, setResult] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post(consultancyEndpoint, {
        employee_id: employeeId,
        numberOFcouncil: numberOFcouncil,
        price: price,
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
      <h2>Consultancy Form</h2>
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
          <label className="form-label">Number of Councils:</label>
          <input
            className="form-input"
            type="number"
            value={numberOFcouncil}
            onChange={(e) => setNumberOFcouncil(parseInt(e.target.value))}
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

export default ConsultancyForm;
