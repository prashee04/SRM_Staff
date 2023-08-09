import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation, useParams } from "react-router-dom";

const Dashboard = () => {
  const [staffDetails, setStaffDetails] = useState(null);
  // const { Employee_id } = useLocation;
  const location = useLocation();

  useEffect(() => {
    const fetchStaffDetails = async () => {
      // const { Employee_id } = employeeId;
      const Employee_id = location.pathname.split("/").pop();
      const response = await axios.get(
        `http://127.0.0.1:5000/staff/${Employee_id}`
      );
      setStaffDetails(response.data);
    };

    fetchStaffDetails();
  }, [location]);

  console.log("Hiii", staffDetails);

  return (
    <div className="page">
      <h1>Dashboard</h1>
      {/* Add your dashboard content */}
    </div>
  );
};

export default Dashboard;
