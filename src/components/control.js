import React, { useEffect, useState } from 'react';
import mqtt from 'mqtt/dist/mqtt';
import {FaRegLightbulb} from 'react-icons/fa'
import {BsFillCloudRainFill, BsWifi, BsWifiOff, BsBatteryFull, BsBattery, BsBatteryCharging, BsFillSunFill} from 'react-icons/bs'
import {MdDangerous} from 'react-icons/md'

const Control = () => {
    const [client, setClient] = useState(null);
    const [isSubed, setIsSub] = useState(false);
    const [payload, setPayload] = useState({});
    const [connectStatus, setConnectStatus] = useState('Connect');
  
  // Connection -----------------------------------------------------
  
    useEffect(()=>{
      if(connectStatus === 'Connect'){
      const url = `wss://broker.emqx.io:8084/mqtt`;
      const options = {
        keepalive: 30,
        protocolId: 'MQTT',
        protocolVersion: 4,
        clean: true,
        reconnectPeriod: 1000,
        connectTimeout: 30 * 1000,
        will: {
          topic: 'WillMsg',
          payload: 'Connection Closed abnormally..!',
          qos: 0,
          retain: false
        },
        rejectUnauthorized: false
      };
      options.clientId = 'Reyhan007';
      options.username = 'Reyhan007';
      options.password = 'Reyhan007';
      setConnectStatus('Connecting');
      setClient(mqtt.connect(url, options));
      console.log('connected')
      }
    },[])
  
  // Main ------------------------------------------------------
  
    useEffect(() => {
  
      if (client) {
        client.on('connect', () => {
          setConnectStatus('Connected');
        });
        client.on('error', (err) => {
          console.error('Connection error: ', err);
          client.end();
        });
        client.on('reconnect', () => {
          setConnectStatus('Connect');
        });
        client.on('message', (topic, message) => {
          const payload = { topic, message: message.toString() };
          setPayload(payload);
          console.log(payload);
        });
      }
    }, [client]);
  
  // Subscription ------------------------------------------------
  
    useEffect(() => {
  
      if (client) {
        client.subscribe('aldeatech/send', 0, (error) => {
          if (error) {
            console.log('Subscribe to topics error', error)
            return
          }
          setIsSub(true)
          console.log('Subscription success')
        });
      }
  
    }, [client]);
  
  // Publish ------------------------------------------------------
  
  const handlePublish = (e) => {
    if (client) {
      client.publish('aldeatech/get', e, 0, error => {
        if (error) {
          console.log('Publish error: ', error);
        }
      });
      console.log('success publish')
    }
  };
  
  //// Controls ------------------------------------------
  
    const runTanam = ()=>{
      handlePublish('001');
  
  
    }
  
    const runBerhenti = ()=>{
      handlePublish('110');
  
    }
  
    const runAtas = ()=>{
      handlePublish('010');
  
    }

    const runAtasKanan = ()=>{
      handlePublish('111');
    }

    const runAtasKiri = () =>{
      handlePublish('111');
    }

    const runBawahKanan = () =>{
      handlePublish('111');
    }

    const runBawahKiri = ()=>{
      handlePublish('111');
    }
    
    const runBawah = ()=>{
      handlePublish('011');
  
    }
  
    const runKanan = ()=>{
      handlePublish('100');
  
    }
  
    const runKiri = ()=>{
      handlePublish('101');
  
    }
  
    const runIdle = ()=>{
      handlePublish('110');
  
    }
   
  
    return (
      <>
        <div className="App pt-8 bg-sky-50">
        <h1 className='text-xl md:text-3xl font-bold text-sky-900 mx-auto text-center'>Grover Robot System Controls</h1>
  
        <div className='flex w-3/12 mx-auto justify-center mt-12 mb-2 p-5 bg-white rounded-lg'>
          {/* <img src={payload.message} /> */}
          <img src="https://radarutara.disway.id/upload/2017/08/Buah-Naga.jpg?fit=800%2C534&ssl=1" className='w-full rounded-lg'/>
        </div>

        <div className='flex w-full mx-auto justify-center mb-2'>
        <div className='bg-green-100 flex items-center m-1 py-2 px-4 rounded-full text-center font-sans text-green-900'>
                <BsWifi />
                <p className='text-md font-semibold ml-2'>Terhubung Dengan Jaringan</p>
            </div>
            {/* <div className='bg-rose-100 flex items-center m-1 py-2 px-4 rounded-full text-center font-sans text-rose-900'>
                <BsWifiOff />
                <p className='text-md font-semibold ml-2'>Terputus Dengan Jaringan</p>
            </div> */}
            {/* <div className='bg-sky-100 flex items-center m-1 py-2 px-4 rounded-full text-center font-sans text-sky-900'>
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
            </div>
            <div className='bg-rose-100 flex items-center m-1 py-2 px-4 rounded-full text-center font-sans text-rose-900'>
                <MdDangerous />
                <p className='text-md font-semibold ml-2'>Halangan Di Sebelah Kanan</p>
            </div> */}
        </div>
  
        <div className='flex md:w-8/12 w-11/12 rounded-t-lg h-full overflow-hidden mx-auto items-center md:flex-nowrap flex-wrap bg-white pt-8 pb-8'>
          <div className='w-full flex mx-auto flex-row justify-center '>
              <button onClick={runTanam}  className='bg-teal-600 justify-center hover:bg-teal-800 shadow-sm px-7 py-1 text-lg font-semibold text-white rounded-md m-3 flex items-center'>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
                Tanam
              </button>
            <button onClick={runBerhenti}  className='bg-rose-600 hover:bg-rose-800 px-7 py-1 text-lg font-semibold text-white rounded-md m-3 flex items-center'>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
              Berhenti
            </button>
          </div>
          <div className=' w-full flex-col mt-24 md:mt-0'>
            <div className='flex justify-center'>
              <button  onClick={runAtasKiri} className=' m-5 -rotate-45 bg-emerald-600 hover:bg-emerald-800 w-16 h-16 flex justify-center items-center rounded-full text-white'><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7l4-4m0 0l4 4m-4-4v18" />
                </svg>
              </button>
              <button  onClick={runAtas} className=' m-5 bg-emerald-600 hover:bg-emerald-800 w-16 h-16 flex justify-center items-center rounded-full text-white'><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7l4-4m0 0l4 4m-4-4v18" />
                </svg>
              </button>
              <button  onClick={runAtasKanan} className=' m-5 rotate-45 bg-emerald-600 hover:bg-emerald-800 w-16 h-16 flex justify-center items-center rounded-full text-white'><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7l4-4m0 0l4 4m-4-4v18" />
                </svg>
              </button>
              
            </div>
                  <div className='flex justify-center'>
                    <button  onClick={runKiri} className=' bg-emerald-600 hover:bg-emerald-800 w-16 h-16 flex justify-center items-center rounded-full text-white m-5 mx-5'><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                      </svg>
                    </button>
                    <button  onClick={runIdle} className=' bg-emerald-600 hover:bg-emerald-800 w-16 h-16 flex justify-center items-center rounded-full text-white m-5'><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 10a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z" />
                    </svg>
                  </button>
                    <button  onClick={runKanan} className=' bg-emerald-600 hover:bg-emerald-800 w-16 h-16 flex justify-center items-center rounded-full text-white m-5 mx-5'><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </button>
                  </div>
                  <div className='flex justify-center'> 
                    <button  onClick={runBawahKiri} className=' m-5 rotate-45 bg-emerald-600 hover:bg-emerald-800 w-16 h-16 flex justify-center items-center rounded-full text-white'><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16 17l-4 4m0 0l-4-4m4 4V3" /></svg>
                    </button>
                    <button  onClick={runBawah} className=' m-5 bg-emerald-600 hover:bg-emerald-800 w-16 h-16 flex justify-center items-center rounded-full text-white'><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16 17l-4 4m0 0l-4-4m4 4V3" /></svg>
                    </button>
                    <button  onClick={runBawahKanan} className=' m-5 -rotate-45 bg-emerald-600 hover:bg-emerald-800 w-16 h-16 flex justify-center items-center rounded-full text-white'><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16 17l-4 4m0 0l-4-4m4 4V3" /></svg>
                    </button>
                    
                  </div>
          </div>
        </div>
      </div>
      </>
    );
  }

export default Control