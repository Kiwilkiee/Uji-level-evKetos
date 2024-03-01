import React, { useEffect } from 'react';
// import '../dist/css/Admin/admin.css'; // Import CSS file for notification styles

const Notification = ({ visible, type, message, onHide }) => {
  useEffect(() => {
    // Sembunyikan notifikasi setelah 5 detik
    if (visible) {
      const timeout = setTimeout(() => {
        onHide();
      }, 5000);

      return () => clearTimeout(timeout);
    }
  }, [visible, onHide]);

  return (
    <div className={`notification ${type}`} style={{ display: visible ? 'block' : 'none' }}>
      {message}
    </div>
  );
};

export default Notification;
