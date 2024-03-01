import React, { useState } from 'react';
// import '../../dist/css/Admin/admin.css'

const TambahSiswaPage = () => {
  const [formData, setFormData] = useState({
    nama: '',
    kelas: '',
    jurusan: '',
    role: 'user', // Set default role to 'user'
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Check if password and confirm password match
    if (formData.password !== formData.confirmPassword) {
      alert('Password dan konfirmasi password tidak cocok.');
      return;
    }
    
    try {
      const response = await fetch('http://localhost:8000/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Reset form data after successful submission
        setFormData({
          nama: '',
          kelas: '',
          jurusan: '',
          role: 'user',
          email: '',
          password: '',
          confirmPassword: ''
        });
        alert('Siswa berhasil ditambahkan!');
      } else {
        const data = await response.json();
        alert('Gagal menambahkan siswa: ' + data.error);
      }
    } catch (error) {
      console.error('Error adding siswa:', error);
      alert('Terjadi kesalahan saat menambahkan siswa.');
    }
  };

  return (
    <div className='form-container-admin'>
      <h2 className='blue-box-admin'> Tambah Siswa</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group-admin">
          <input type="text" name="nama" value={formData.nama} onChange={handleChange} required />
          <label htmlFor="nama" className="form-label-admin">Nama</label>
        </div>
        <div className="form-group-admin">
          <input type="text" name="kelas" value={formData.kelas} onChange={handleChange} required />
          <label htmlFor="kelas" className="form-label-admin">Kelas</label>
        </div>
        <div className="form-group-admin">
          <input type="text" name="jurusan" value={formData.jurusan} onChange={handleChange} required />
          <label htmlFor="jurusan" className="form-label-admin">Jurusan</label>
        </div>
        <div className="form-group-admin">
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          <label htmlFor="email" className="form-label-admin">Email</label>
        </div>
        <div className="form-group-admin">
          <input type="password" name="password" value={formData.password} onChange={handleChange} required />
          <label htmlFor="password" className="form-label-admin">Password</label>
        </div>
        <div className="form-group-admin">
          <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required />
          <label htmlFor="confirmPassword" className="form-label-admin">Konfirmasi Password</label>
        </div>
        
        <button className="Button-Submit-admin" type="submit">Submit</button>
      </form>
    </div>
  );
};

export default TambahSiswaPage;
