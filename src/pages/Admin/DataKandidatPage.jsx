import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash, faPlus } from '@fortawesome/free-solid-svg-icons';
// import '../../dist/css/Admin/admin.css'
import AddKandidatForm from '../../Component/AddKandidatForm';
import Notification from '../../component/Notification'; // Import Notification component

const DataKandidatPage = () => {
  const [dataKandidat, setDataKandidat] = useState([]);
  const [editFormVisible, setEditFormVisible] = useState(false);
  const [notificationVisible, setNotificationVisible] = useState(false);
  const [notificationType, setNotificationType] = useState('');
  const [notificationMessage, setNotificationMessage] = useState('');

  useEffect(() => {
    fetchDataKandidat();
  }, []);

  const fetchDataKandidat = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/kandidats');
      const data = await response.json();
      setDataKandidat(data);
    } catch (error) {
      console.error('Error fetching data kandidat:', error);
    }
  };

  const handleEdit = (id) => {
    // Logika untuk menangani edit kandidat
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:8000/api/kandidats/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        // Hapus kandidat dari state setelah berhasil dihapus dari server
        setDataKandidat(dataKandidat.filter(kandidat => kandidat.id !== id));
        // Tampilkan notifikasi
        showNotification('success', 'Kandidat berhasil dihapus');
      } else {
        console.error('Failed to delete kandidat:', response.statusText);
        // Tampilkan notifikasi gagal
        showNotification('error', 'Gagal menghapus kandidat');
      }
    } catch (error) {
      console.error('Error deleting kandidat:', error);
      // Tampilkan notifikasi gagal
      showNotification('error', 'Gagal menghapus kandidat');
    }
  };

  const showNotification = (type, message) => {
    setNotificationType(type);
    setNotificationMessage(message);
    setNotificationVisible(true);
  };

  const handleAddKandidat = async (formData) => {
    try {
      const formDataToSend = new FormData();
      formDataToSend.append('nama', formData.nama);
      formDataToSend.append('visi_misi', formData.visiMisi);
      formDataToSend.append('gambar', formData.gambar);

      const response = await fetch('http://localhost:8000/api/kandidats', {
        method: 'POST',
        body: formDataToSend
      });

      if (response.ok) {
        const data = await response.json();
        setDataKandidat([...dataKandidat, data]);
        setEditFormVisible(false); // Tutup form setelah berhasil menambahkan kandidat baru
      } else {
        console.error('Failed to add kandidat:', response.statusText);
        // Tampilkan notifikasi gagal
        showNotification('error', 'Gagal menambahkan kandidat');
      }
    } catch (error) {
      console.error('Error adding kandidat:', error);
      // Tampilkan notifikasi gagal
      showNotification('error', 'Gagal menambahkan kandidat');
    }
  }; 

  return (
    <>
      <div className="title-admin">
        <h4>SISTEM INFORMASI EV-KETOS</h4>
        <button className="Button-add-admin" onClick={() => setEditFormVisible(true)}>
          <FontAwesomeIcon icon={faPlus} /> Tambah Kandidat
        </button>
      </div>
      <div className="table-container-admin">
        <table>
          <thead>
            <tr>
              <th>No</th>
              <th>Gambar</th>
              <th>Nama</th>
              <th>Visi_misi</th>
              <th>Voting</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {dataKandidat.map((kandidat, index) => (
              <tr key={index + 1}>
                <td>{index + 1}</td>
                <td><img src={`http://localhost:8000/storage/${kandidat.gambar}`} alt={kandidat.nama} /></td>
                <td>{kandidat.nama}</td>
                <td>{kandidat.visi_misi}</td>
                <td>{kandidat.voting}</td>
                <td>
                  <button onClick={() => handleEdit(kandidat.id)}><FontAwesomeIcon icon={faEdit} /></button>
                  <button className="Button-delete-admin" onClick={() => handleDelete(kandidat.id)}><FontAwesomeIcon icon={faTrash} /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {editFormVisible && (
        <AddKandidatForm onAdd={handleAddKandidat} />
      )}
      <Notification
        visible={notificationVisible}
        type={notificationType}
        message={notificationMessage}
        onHide={() => setNotificationVisible(false)}
      />
    </>
  );
};

export default DataKandidatPage;
