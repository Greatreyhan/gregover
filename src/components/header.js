import React from 'react'
import {Logo, Profile} from '../assets'

const Header = () => {
  return (
    <div className='flex w-6/12 mx-auto items-center justify-between'>
        <div className='flex-1'>
            <img src={Logo} className='w-14 h-full' />
        </div>
        <div className='flex-1 flex items-center justify-end'>
            <div className='rounded-full w-10 h-10'>
                <img src={Profile} className='rounded-full object-cover' />
            </div>
            <div>
                <p className='ml-4 text-md font-semibold'>Bapak Pukon</p>
                <p className='ml-4 text-sm font-light -mt-1'>Penjaga Kebun</p>
            </div>
        </div>
    </div>
  )
}

export default Header