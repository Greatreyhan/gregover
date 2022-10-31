import React from 'react'
import {MdBattery90, MdWaterDrop} from 'react-icons/md'
import {FaDatabase} from 'react-icons/fa'

const Condition = () => {
  return (
    <div className=' w-6/12 mx-auto'>
      <h2 className='text-sky-900 font-semibold text-2xl'>Kondisi Kebun Terkini</h2>
      <div className='flex w-full flex-wrap items-center'>
        <img className='rounded-lg w-5/12 m-2' src="https://radarutara.disway.id/upload/2017/08/Buah-Naga.jpg?fit=800%2C534&ssl=1" />
        <img className='rounded-lg w-5/12 m-2' src="https://radarutara.disway.id/upload/2017/08/Buah-Naga.jpg?fit=800%2C534&ssl=1" />
        <img className='rounded-lg w-5/12 m-2' src="https://radarutara.disway.id/upload/2017/08/Buah-Naga.jpg?fit=800%2C534&ssl=1" />
        <img className='rounded-lg w-5/12 m-2' src="https://radarutara.disway.id/upload/2017/08/Buah-Naga.jpg?fit=800%2C534&ssl=1" />
      </div>
      <div className='flex flex-wrap'>
        <div className='flex m-2 w-5/12 items-center bg-slate-100 text-sky-900 rounded-lg py-2 mt-8'>
            <MdBattery90 className='w-20 h-20 px-3' />
          <div className='border-l-2 border-sky-900 border-opacity-50'>
            <p className='ml-4'>Tegangan <spa className="font-bold">600 Vp</spa></p>
            <p className='ml-4'>Kapasitas <spa className="font-bold">250 Ah</spa></p>
            <p className='ml-4'>Daya <spa className="font-bold">75%</spa></p>
          </div>
        </div>

        <div className='flex m-2 w-5/12 items-center bg-slate-100 text-sky-900 rounded-lg py-2 mt-8'>
            <FaDatabase className='w-20 h-20 px-4' />
          <div className='border-l-2 border-sky-900 border-opacity-50'>
            <p className='ml-4'>Total Data <spa className="font-bold">56 Mb</spa></p>
            <p className='ml-4'>Kapasitas <spa className="font-bold">5 Gb</spa></p>
            <p className='ml-4'>Client <spa className="font-bold">2</spa></p>
          </div>
        </div>

        <div className='flex m-2 w-5/12 items-center bg-slate-100 text-sky-900 rounded-lg py-2 mt-8'>
            <MdWaterDrop className='w-20 h-20 px-3' />
          <div className='border-l-2 border-sky-900 border-opacity-50'>
            <p className='ml-4'>Volume Air <spa className="font-bold">300 m<sup>3</sup></spa></p>
            <p className='ml-4'>Penyiraman <spa className="font-bold">2.23 m<sup>3</sup></spa></p>
            <p className='ml-4'>Total Penyiraman <spa className="font-bold">71</spa></p>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Condition