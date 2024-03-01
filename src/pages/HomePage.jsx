import React, { useState, useEffect } from 'react';
import Aos from 'aos';
// import 'aos/dist/aos.css';
// import '../dist/css/index.css'
import logo from '/public/img/Logo-EV.png'
import about from '/public/img/about.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import FooterComponent from '../Component/FooterComponent';
import NavabarComponent from '../Component/NavabarComponent';

const HomePage = () => {

  const [userId, setUserId] = useState('nilai_awal_user_id');
  
  

  const handleVote = (userId, kandidatId) => {
    fetch('http://localhost:8000/api/vote', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user_id: userId,
        kandidat_id: kandidatId,
      }),
    })
    .then(response => {
      console.log(response); // Log response before parsing
      return response.json();
    })
    .then(data => {
      console.log(data.message); // Log the success message
      // Handle any UI updates or redirects as needed
    })
    .catch(error => console.error('Error voting:', error));
  };
  
  const [kandidats, setKandidats] = useState([]);

  useEffect(() => {
      Aos.init();
  }, []);

  useEffect(() => {
    fetch('http://localhost:8000/api/kandidats')
      .then(response => response.json())
      .then(data => {
        console.log(data); // Log the data to inspect the structure
        setKandidats(data);
      })
      .catch(error => console.error('Error fetching kandidats:', error));
  }, []);

  return (
    <>
      <NavabarComponent/>

      <div>
        <div className="content">
          <div className="text-content">
            <h1>Sistem Informasi E-Voting Ketua Osis Berbasis Web</h1>
            <p>Aplikasi ini dibuat untuk memudahkan para siswa memilih kandidat calon ketua osis secara online.</p>
            <a href="#pemilihan">
              
              <button className="action-btn">
                Yok Pilih <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </a>
          </div>
          <div className="image-content" data-aos="fade-left" data-aos-duration="2000">
            <img src={logo} alt="E-Voting Image" />
          </div>
        </div>

        {/* About */}


        <div className="about">
          <div className="about-content">

            <img src={about} alt="" />
            <h2>About</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti voluptatum fugiat inventore optio ex! Quod cupiditate debitis praesentium.</p>
        
            <button>Pemilihan</button>
          </div>
        </div>
        



        {/* Pemilihan page */}

        <div className='pemilihan-page' id='pemilihan'>
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            className="pemilihan-text" style={{ color: 'black' }}  >
            <h3>
              Ayo Pilih pilihan kamu
              <br />
              Kandidat Calon Ketua Osis Periode 2023/2024
            </h3>
          </div>

              <div className="box-voting" data-aos="flip-up" data-aos-duration="1500">
            {kandidats.map(kandidat => (
              <div key={kandidat.id} className="container">
                <img src={`http://localhost:8000/storage/${kandidat.gambar}`} alt="Avatar" className="avatar" />
                <div className="nama-calon">{kandidat.nama}</div>
                <div className="text-container">{kandidat.visi_misi}</div>
                <div className="voting-button" onClick={() => handleVote(kandidat.id)}>
                  Voting
                </div>
              </div>
            ))}
          </div>  
        </div>
      </div>

      <FooterComponent />
    </>
  );
};

export default HomePage;
