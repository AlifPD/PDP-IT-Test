import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const ApprovalPage = ({ formList, updateFormStatus }) => {
    const { index } = useParams();
    const navigate = useNavigate();
    const formData = formList[index];

    if (!formData) {
        return (
            <div className="container mt-5">
                <h2>Form Not Found</h2>
                <button className="btn btn-secondary mt-3" onClick={() => navigate("/")}>Back to List</button>
            </div>
        );
    }

    return (
        <div className="container mt-5">
            <h2>Approval Page</h2>
            <div className="card p-4 shadow">
                <h4>Data Konsumen</h4>
                <ul className="list-group">
                    {Object.entries(formData).map(([key, value]) => (
                        <li key={key} className="list-group-item">
                            <strong>{key.replace(/([A-Z])/g, " $1").trim().replace(/\b\w/g, (char) => char.toUpperCase())}:</strong> {value}
                        </li>
                    ))}
                </ul>
                <button className="btn btn-success mt-3 me-2" onClick={() => { updateFormStatus(index, "Approved"); navigate("/"); }}>Approve</button>
                <button className="btn btn-danger mt-3 me-2" onClick={() => { updateFormStatus(index, "Rejected"); navigate("/"); }}>Reject</button>
                <button className="btn btn-secondary mt-3" onClick={() => navigate("/")}>Back to List</button>
            </div>
        </div>
    );
};

export default ApprovalPage;
