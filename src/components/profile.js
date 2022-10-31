import React,{useEffect, useState} from 'react'
import {FaRegLightbulb} from 'react-icons/fa'
import {BsFillCloudRainFill, BsWifi, BsWifiOff, BsBatteryFull, BsBattery, BsBatteryCharging, BsFillSunFill} from 'react-icons/bs'
import {MdDangerous} from 'react-icons/md'
import database from "../firebaseinit";

const Profile = () => {
    const [temp, setTemp] = useState({});
    const [hum, setHum] = useState({});
    const [soil, setSoil] = useState({});

    useEffect(()=>{
        let onDataChange = database.ref('/').on('value', function(snapshot) {
          snapshot.forEach(function(childSnapshot) {
            let childKey = childSnapshot.key;
            let childData = childSnapshot.val();
            setTemp({
                keys: Object.keys(childData.temperature),
                values: Object.values(childData.temperature)
            })
          });
        });
      },[database])

    useEffect(()=>{
        let onDataChange = database.ref('/').on('value', function(snapshot) {
          snapshot.forEach(function(childSnapshot) {
            let childKey = childSnapshot.key;
            let childData = childSnapshot.val();
            setHum({
                keys: Object.keys(childData.humidity),
                values: Object.values(childData.humidity)
            })
          });
        });
      },[database])

      useEffect(()=>{
        let onDataChange = database.ref('/').on('value', function(snapshot) {
          snapshot.forEach(function(childSnapshot) {
            let childKey = childSnapshot.key;
            let childData = childSnapshot.val();
            setSoil({
                keys: Object.keys(childData.soil),
                values: Object.values(childData.soil)
            })
          });
        });
      },[database])
    
  return (
    <div className='w-6/12 mx-auto'>
        {/* Heading */}
        <div className='flex flex-wrap justify-around w-full mx-auto bg-slate-100 rounded-xl py-8 m-4'>
            <div className='text-center font-sans text-sky-900'>
                <p className='font-bold text-3xl'> 1.4 Km</p>
                <p className='text-lg'>Total Perjalanan</p>
            </div>
            <div className='text-center font-sans text-sky-900'>
                <p className='font-bold text-3xl'>12 Hari</p>
                <p className='text-lg'>Total Aktif</p>
            </div>
            <div className='text-center font-sans text-sky-900'>
                <p className='font-bold text-3xl'>28</p>
                <p className='text-lg'>Tanaman</p>
            </div>
        </div>

        {/* Data */}
        <div className='flex flex-wrap justify-between w-full mx-auto rounded-xl'>
            <div className='bg-slate-100 flex-1 pb-8 pt-2 rounded-xl mr-4 text-center font-sans text-sky-900'>
                <p className='text-lg'>Suhu Udara</p>
                <p className='mt-4 font-bold text-4xl'>{temp.values ? temp.values[temp.values.length-1]: 0}°C</p>
            </div>
            <div className='bg-slate-100 flex-1 pb-8 pt-2 rounded-xl text-center font-sans text-sky-900'>
                <p className='text-lg'>Kelembapan</p>
                <p className='mt-4 font-bold text-4xl'>{hum.values ? hum.values[hum.values.length-1]: 0}%</p>
            </div>
            <div className='bg-slate-100 flex-1 pb-8 pt-2 rounded-xl ml-4 text-center font-sans text-sky-900'>
                <p className='text-lg'>Total Tanaman Tersedia</p>
                <p className='mt-4 font-bold text-4xl'>5 Bibit</p>
            </div>
        </div>

        {/* Notification */}
        <div className='flex items-center flex-wrap w-full mx-auto rounded-xl mt-4'>
            <div className='bg-green-100 flex items-center m-1 py-2 px-4 rounded-full text-center font-sans text-green-900'>
                <BsWifi />
                <p className='text-md font-semibold ml-2'>Terhubung Dengan Jaringan</p>
            </div>
            {/* <div className='bg-rose-100 flex items-center m-1 py-2 px-4 rounded-full text-center font-sans text-rose-900'>
                <BsWifiOff />
                <p className='text-md font-semibold ml-2'>Terputus Dengan Jaringan</p>
            </div>
            <div className='bg-sky-100 flex items-center m-1 py-2 px-4 rounded-full text-center font-sans text-sky-900'>
                <BsBatteryCharging />
                <p className='text-md font-semibold ml-2'>Mengisi Daya Baterai</p>
            </div>
            <div className='bg-yellow-100 flex items-center m-1 py-2 px-4 rounded-full text-center font-sans text-yellow-900'>
                <BsBattery />
                <p className='text-md font-semibold ml-2'>Daya Baterai Lemah</p>
            </div> */}
            <div className='bg-green-100 flex items-center m-1 py-2 px-4 rounded-full text-center font-sans text-green-900'>
                <BsBatteryFull />
                <p className='text-md font-semibold ml-2'>Daya Baterai Penuh</p>
            </div>
            <div className='bg-sky-100 flex items-center m-1 py-2 px-4 rounded-full text-center font-sans text-sky-900'>
                <FaRegLightbulb />
                <p className='text-md font-semibold ml-2'>Lampu Menyala</p>
            </div>
            <div className='bg-green-100 flex items-center m-1 py-2 px-4 rounded-full text-center font-sans text-green-900'>
                <BsFillSunFill />
                <p className='text-md font-semibold ml-2'>Kondisi Cerah</p>
            </div>
            {/* <div className='bg-rose-100 flex items-center m-1 py-2 px-4 rounded-full text-center font-sans text-rose-900'>
                <BsFillCloudRainFill />
                <p className='text-md font-semibold ml-2'>Kondisi Hujan</p>
            </div> */}
            {/* <div className='bg-rose-100 flex items-center m-1 py-2 px-4 rounded-full text-center font-sans text-rose-900'>
                <MdDangerous />
                <p className='text-md font-semibold ml-2'>Halangan Di Sebelah Kanan</p>
            </div> */}
        </div>
    </div>
  )
}

export default Profile