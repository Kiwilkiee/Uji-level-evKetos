import React, { useState } from 'react';

const AddKandidatForm = ({ onAdd, onCancel }) => {
  const [formData, setFormData] = useState({
    nama: '',
    visiMisi: '',
    gambar: null
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      gambar: e.target.files[0]
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Kirim data kandidat baru ke parent component
    onAdd(formData);
  };

  const handleCancel = () => {
    onCancel(); // Panggil fungsi untuk menutup formulir
  };

  return (
    <div className="edit-form">
      <h2>Tambah Kandidat</h2>
      <form onSubmit={handleSubmit}>
        <label>Nama:</label>
        <input type="text" name="nama" value={formData.nama} onChange={handleChange} required />
        <label>Visi Misi:</label>
        <textarea name="visiMisi" value={formData.visiMisi} onChange={handleChange} required />
        <label>Gambar:</label>
        <input type="file" name="gambar" accept="image/*" onChange={handleFileChange} required />
        <button type="submit">Tambah</button>
        <button type="button" onClick={handleCancel}>Batal</button>
      </form>
    </div>
  );
};

export default AddKandidatForm;
