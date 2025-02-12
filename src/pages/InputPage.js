import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

const InputPage = ({ addForm }) => {
    const navigate = useNavigate();
    const [statusPerkawinan, setStatusPerkawinan] = useState("Belum Menikah");
    const [formData, setFormData] = useState({
        nama: "",
        nik: "",
        tanggalLahir: "",
        statusPerkawinan: "Belum Menikah",
        dataPasangan: "",
        dealer: "",
        merkKendaraan: "",
        modelKendaraan: "",
        tipeKendaraan: "",
        warnaKendaraan: "",
        hargaKendaraan: "",
        asuransi: "",
        downPayment: "",
        lamaKredit: "",
        angsuran: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addForm(formData); 
        navigate("/");
    };

    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">Form Pengajuan Kredit</h2>
            <div className="card p-4 shadow">
                <form onSubmit={handleSubmit}>
                    <h4>Data Konsumen</h4>
                    <div className="mb-3">
                        <label className="form-label">Nama</label>
                        <input type="text" className="form-control" name="nama" onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">NIK</label>
                        <input type="text" className="form-control" name="nik" onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Tanggal Lahir</label>
                        <input type="date" className="form-control" name="tanggalLahir" onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Status Perkawinan</label>
                        <div>
                            <input type="radio" name="statusPerkawinan" value="Belum Menikah" checked={statusPerkawinan === "Belum Menikah"} onChange={(e) => setStatusPerkawinan(e.target.value)} /> Belum Menikah
                            <input type="radio" name="statusPerkawinan" value="Menikah" className="ms-3" checked={statusPerkawinan === "Menikah"} onChange={(e) => setStatusPerkawinan(e.target.value)} /> Menikah
                        </div>
                    </div>
                    {statusPerkawinan === "Menikah" && (
                        <div className="mb-3">
                            <label className="form-label">Data Pasangan</label>
                            <input type="text" className="form-control" name="dataPasangan" onChange={handleChange} />
                        </div>
                    )}

                    <h4 className="mt-4">Data Kendaraan</h4>
                    {['dealer', 'merkKendaraan', 'modelKendaraan', 'tipeKendaraan', 'warnaKendaraan', 'hargaKendaraan'].map((field, index) => (
                        <div className="mb-3" key={index}>
                            <label className="form-label">
                                {field.replace(/([A-Z])/g, ' $1').trim().replace(/\b\w/g, (char) => char.toUpperCase())}
                            </label>
                            <input type="text" className="form-control" name={field} onChange={handleChange} />
                        </div>
                    ))}

                    <h4 className="mt-4">Data Pinjaman</h4>
                    {['asuransi', 'downPayment', 'lamaKredit', 'angsuran'].map((field, index) => (
                        <div className="mb-3" key={index}>
                            <label className="form-label">
                                {field.replace(/([A-Z])/g, ' $1').trim().replace(/\b\w/g, (char) => char.toUpperCase())}
                            </label>
                            <input type="text" className="form-control" name={field} onChange={handleChange} />
                        </div>
                    ))}

                    <button type="submit" className="btn btn-primary w-100">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default InputPage;
