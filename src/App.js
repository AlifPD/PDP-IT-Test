import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import InputPage from "./pages/InputPage";
import ApprovalPage from "./pages/ApprovalPage";
import FormListPage from "./pages/FormListPage";

const App = () => {
  const [formList, setFormList] = useState([]);

  const addForm = (form) => {
    setFormList([...formList, { ...form, status: "Pending" }]);
  };

  const updateFormStatus = (index, status) => {
    const updatedForms = [...formList];
    updatedForms[index].status = status;
    setFormList(updatedForms);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<FormListPage formList={formList} />} />
        <Route path="/input" element={<InputPage addForm={addForm} />} />
        <Route path="/approval/:index" element={<ApprovalPage formList={formList} updateFormStatus={updateFormStatus} />} />
      </Routes>
    </Router>
  );
};

export default App;
