import React from 'react'
// import 'assets/css/admin.css'
// import SidebarComponent from '../../Component/SidebarComponent'
import { BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill } from 'react-icons/bs'


const DashboardPage = () => {
  return (
    <div>
      <div className='main-title-admin'>
        <h3>DASHBOARD</h3>
      </div>
      <div className='main-cards-admin'>
        <div className='card-admin'>
          <div className='card-inner-admin'>
            <h3>Jumlah Pemilih</h3>
            <BsFillArchiveFill className='card_icon-admin' />
          </div>
          <h1>300</h1>
        </div>
        <div className='card-admin'>
          <div className='card-inner-admin'>
            <h3>Sudah Memilih</h3>
            <BsFillGrid3X3GapFill className='card_icon-admin' />
          </div>
          <h1>12</h1>
        </div>
        <div className='card-admin'>
          <div className='card-inner-admin'>
            <h3>Belum Memilih</h3>
            <BsPeopleFill className='card_icon-admin' />
          </div>
          <h1>33</h1>
        </div>
        <div className='card-admin'>
          <div className='card-inner-admin'>
            <h3>Kandidat</h3>
            <BsFillBellFill className='card_icon-admin' />
          </div>
          <h1>3</h1>
        </div>
      </div>
    </div>
  )
}

export default DashboardPage
