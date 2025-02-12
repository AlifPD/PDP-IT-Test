import React from "react";
import { useNavigate } from "react-router-dom";

const FormListPage = ({ formList }) => {
    const navigate = useNavigate();

    return (
        <div className="container mt-5">
            <h2 className="text-center">Credit Applications</h2>
            <button className="btn btn-primary mb-3" onClick={() => navigate("/input")}>+ Add New Application</button>
            <div className="card p-4 shadow">
                {formList.length === 0 ? (
                    <p className="text-center">No applications submitted yet</p>
                ) : (
                    <ul className="list-group">
                        {formList.map((form, index) => (
                            <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                                <span>{form.nama} - <strong>{form.status}</strong></span>
                                <button className="btn btn-info btn-sm" onClick={() => navigate(`/approval/${index}`)}>Review</button>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default FormListPage;
