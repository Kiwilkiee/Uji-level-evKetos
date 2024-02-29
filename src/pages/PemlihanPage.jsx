

import React, { useState, useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import '../dist/css/index.css'
import logo from '/public/img/Logo-EV.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import FooterComponent from '../Component/FooterComponent';
import NavabarComponent from '../Component/NavabarComponent'

const PemlihanPage = () => {
  return (
    
    <div>
        <NavabarComponent />
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
  )
}

export default PemlihanPage