import React from 'react'
import {Link} from "react-router-dom";
import {BsPersonFill} from 'react-icons/bs'
import {MdHistory,MdAnalytics} from 'react-icons/md'
import {AiFillControl} from 'react-icons/ai'
import {FaStreetView} from 'react-icons/fa'
import {FiLogOut} from 'react-icons/fi'

const Navigation = () => {
  return (
    <div className='bg-slate-100 w-1/12 ml-8 text-sky-900 py-4 rounded-lg fixed'>
      <Link to="/" className='flex flex-col items-center w-full '>
        <BsPersonFill className='w-7 h-7' />
        <p className='font-semibold text-md'>Profil</p>
      </Link>
      <Link to="/data" className='flex flex-col items-center w-full mt-6'>
        <MdHistory className='w-7 h-7' />
        <p className='font-semibold text-md'>Data</p>
      </Link>
      <Link to="/kontrol" className='flex flex-col items-center w-full mt-6'>
        <AiFillControl className='w-7 h-7' />
        <p className='font-semibold text-md'>Kotrol</p>
      </Link>
      <Link to="/analisis" className='flex flex-col items-center w-full mt-6'>
        <MdAnalytics className='w-7 h-7' />
        <p className='font-semibold text-md'>Analysis</p>
      </Link>
      <Link to="/kondisi" className='flex flex-col items-center w-full mt-6'>
        <FaStreetView className='w-7 h-7' />
        <p className='font-semibold text-md'>Kondisi</p>
      </Link>
      <hr className='w-8/12 mx-auto mt-3' />
      <a href="#" className='flex flex-col items-center w-full mt-3'>
        <FiLogOut className='w-7 h-7' />
        <p className='font-semibold text-md'>Keluar</p>
      </a>
    </div>
  )
}

export default Navigation