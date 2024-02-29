import React, { useState, useEffect } from 'react';
import '../../dist/css/Admin/admin.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import Sidebar from '../../Component/SidebarComponent'

const DaftarSiswaPage = () => {
  const [dataSiswa, setDataSiswa] = useState([]);

  useEffect(() => {
    fetchDataSiswa();
  }, []);

  const fetchDataSiswa = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/users?type=siswa');
      const data = await response.json();
      setDataSiswa(data.users); // Mengambil data siswa dari properti "users" dalam respons
    } catch (error) {
      console.error('Error fetching data siswa:', error);
    }
  };

  const handleEdit = (id) => {
    console.log(`Edit siswa dengan ID ${id}`);
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:8000/api/users/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setDataSiswa(dataSiswa.filter(siswa => siswa.id !== id));
        alert('Siswa Berhasil Di Hapus!')
      } else {
        const data = await response.json();
        alert('Gagal Menghapus Siswa: ' + data.error);
      }
    } catch (error) {
      console.error('Error deleting siswa:', error);
    }
  };

  return (
    <div>
      <Sidebar />
      <h2 className="title-admin">Daftar Siswa</h2>
      <table className="table-admin">
        <thead>
          <tr>
            <th>No</th>
            <th>Nama</th>
            <th>Kelas</th>
            <th>Jurusan</th>
            <th>Email</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {dataSiswa.map((siswa, index) => (
            <tr key={siswa.id}>
              <td>{index + 1}</td>
              <td>{siswa.nama}</td> {/* Menggunakan siswa.nama dari data siswa */}
              <td>{siswa.kelas}</td>
              <td>{siswa.jurusan}</td>
              <td>{siswa.email}</td>
              <td>{siswa.status}</td>
              <td>
                <button className='Button-Edit-admin' onClick={() => handleEdit(siswa.id)}>
                  <FontAwesomeIcon icon={faEdit} />
                </button>
                <button className='Button-delete-admin' onClick={() => handleDelete(siswa.id)}>
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DaftarSiswaPage;
