import React,{useEffect, useState} from 'react'
import database from './firebaseinit';
import mqtt from 'mqtt/dist/mqtt'

function Activity({ id, title, time, tag, date}) {

    const [message,setMessage] = useState("");


    const dateObj = new Date(date);

    const hour = parseInt(time.slice(0,2));
    const minute = parseInt(time.slice(3,5));
    const dateNew = new Date(dateObj.getFullYear(), dateObj.getMonth(), dateObj.getDate(), hour, minute, 0, 0)
    const now = new Date();
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const handleDelete = (e) =>{
        e.preventDefault();
        database.ref(`reyhan/${id}`).remove()
    }

    function formatDate(date) {
        var d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();
    
        if (month.length < 2) 
            month = '0' + month;
        if (day.length < 2) 
            day = '0' + day;
    
        return [year, month, day].join('-');
    }

    React.useEffect(()=>{
        if(message != ""){
        const options = {
            // clean: true,
            // connectTimeout: 4000,
            // useSSL : true,
            // clientId: 'doratheexplolor',
            // username: 'mamangracing',
            // password: 'mamangracing',
            protocol: 'mqtts',
	        clientId: 'b0908853booxlflad' 
          }
        // const client  = mqtt.connect('ws://broker.emqx.io:8083/mqtt', options)
        const client  = mqtt.connect('mqtt://test.mosquitto.org:8081', options)
        client.on('connect', function () {
          console.log('Connected')
          client.subscribe('soto', function (err) {
            if (!err) {
                client.publish('soto', message);
                client.unsubscribe('soto', error => console.log(error));
                client.end();
                setMessage("");
                console.log('Publised');
            }
            })
        })
    }
    },[message])
    
    
    useEffect(()=>{
            
        if(tag == "daily" && (dateNew.getTime() - now.getTime()) <= 0 ){
            dateNew.setDate(dateNew.getDate()+7)
            const newdate = formatDate(dateNew)
            setMessage(`#${title}`)
            database.ref(`reyhan`).child(`${id}`).set({
                
                date: newdate,
                tag: tag,
                time: time,
                title: title
                    
            })
            
        }
        if(tag != "daily" && (dateNew.getTime() - now.getTime()) <= 0 ){
            setMessage(`#${title} $${tag}`)
            database.ref(`reyhan/${id}`).remove()
        }
    },[now])

    
    return (
        <a href="#" onClick={handleDelete} className='bg-red w-full flex justify-between items-center p-4 border-b-2 hover:border-red-600 hover:text-gray-500' key={id}>
            <div className='text-left'>
                <p className='font-bold text-lg '>{title}</p>
                <div className='flex'>
                    <p className='mr-2'>{days[dateObj.getDay()]+", "+months[dateObj.getMonth()]+" "+dateObj.getDate()}</p>
                    <p>{time}</p>
                </div>   
            </div>
            <div>
                {tag == "daily" ? 
                <p className='bg-opacity-50 bg-green-300 rounded-full py-1 px-2 font-semibold text-gray-700'>#{tag}</p>
                : 
                tag == "event" ?
                <p className='bg-opacity-50 bg-blue-300 rounded-full py-1 px-2 font-semibold text-gray-700'>#{tag}</p>
                :
                tag == "learn" ?
                <p className='bg-opacity-50 bg-orange-300 rounded-full py-1 px-2 font-semibold text-gray-700'>#{tag}</p>
                :
                tag == "important" ?
                <p className='bg-opacity-50 bg-red-300 rounded-full py-1 px-2 font-semibold text-gray-700'>#{tag}</p>
                :
                <p className='bg-opacity-50 bg-gray-300 rounded-full py-1 px-2 font-semibold text-gray-700'>#{tag}</p>
                }
            </div>
        </a>
    )
}

export default Activity
