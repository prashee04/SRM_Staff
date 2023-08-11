// // import React, { useState } from "react";
// // import Sidebar from "./components/sidebar/Sidebar";
// // import Topbar from "./components/topbar/topbar";
// // import AppraisalForm from "./components/appraisalForm/AppraisalForm";

// // function App() {
// //   const [isSidebar, setIsSidebar] = useState(true);

// //   return (
// //     <div className="app">
// //       <Topbar />
// //       {isSidebar && <Sidebar />}
// //       <AppraisalForm />
// //     </div>
// //   );
// // }

// // export default App;

// import React, { useState } from "react";
// import "./dapp.css";

// function App() {
//   const [activeTab, setActiveTab] = useState("dashboard");

//   const handleTabChange = (tab) => {
//     setActiveTab(tab);
//   };

//   return (
//     <div className="App">
//       <div className="sidebar">
//         <ul>
//           <li
//             className={activeTab === "dashboard" ? "active" : ""}
//             onClick={() => handleTabChange("dashboard")}
//           >
//             Dashboard
//           </li>
//           <li
//             className={activeTab === "reports" ? "active" : ""}
//             onClick={() => handleTabChange("reports")}
//           >
//             Reports
//           </li>
//           <li
//             className={activeTab === "settings" ? "active" : ""}
//             onClick={() => handleTabChange("settings")}
//           >
//             Settings
//           </li>
//         </ul>
//       </div>
//       <div className="main-content">
//         {activeTab === "dashboard" && <h1>Dashboard Content</h1>}
//         {activeTab === "reports" && <h1>Reports Content</h1>}
//         {activeTab === "settings" && <h1>Settings Content</h1>}
//       </div>
//     </div>
//   );
// }

// export default App;

// import React from "react";
// import { useState } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Sidebar from "./components/Sidebar";
// import Dashboard from "./pages/dashboard";
// import Appraisal from "./pages/Appraisal";
// import Topbar from "./components/Topbar";
// import { CssBaseline, ThemeProvider } from "@mui/material";
// import "./app.css";

// const App = () => {
//   const [isSidebar, setIsSidebar] = useState(true);
//   return (
//     // // <Router>
//     // <div className="app">
//     //   <Sidebar />
//     //   <div className="content">{/* <Appraisal /> */}</div>
//     // </div>
//     // // </Router>
//     <>
//       <CssBaseline />
//       <div className="app">
//         {/* <Sidebar /> */}

//         <Sidebar isSidebar={isSidebar} />
//         <main className="content">
//           {/* <Topbar /> */}
//           <Topbar setIsSidebar={setIsSidebar} />
//           <Routes>
//             <Route path="/dasboard" element={<Dashboard />} />
//           </Routes>
//           <Routes>
//             <Route path="/appraisal" element={<Appraisal />} />
//           </Routes>
//         </main>
//       </div>
//     </>
//   );
// };

// export default App;
