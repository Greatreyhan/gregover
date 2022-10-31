import React,{useEffect, useState} from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import database from "../firebaseinit";

const Analysis = () => {

  const [temp, setTemp] = useState(false);
  const [hum, setHum] = useState(false)
  const [dataTempHum, setDataTempHum] = useState(false);

    useEffect(()=>{
        let onDataChange = database.ref('/').on('value', function(snapshot) {
          snapshot.forEach(function(childSnapshot) {
            let childKey = childSnapshot.key;
            let childData = childSnapshot.val();
            setTemp({
                keys: Object.keys(childData.temperature),
                values: Object.values(childData.temperature),
                length: Object.values(childData.temperature).length
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
                values: Object.values(childData.humidity),
                length: Object.values(childData.humidity).length
            })
          });
        });
      },[database])
    
      useEffect(()=>{
        let dataset = [];
        if(temp && hum){
          for(let i = 0; i < temp.length; i++){
            let obj = {
              name : `Tanggal ${i}`,
              suhu : temp.values[i],
              kelembapan: hum.values[i]
            }
            if(i < 30 ){
              dataset.push(obj)
            }
          }
        }
        setDataTempHum(dataset)
      },[temp])

  return (
    <div className='w-6/12 mx-auto mt-6 flex flex-col items-center'>
      <h2 className='font-semibold text-sky-900 text-2xl text-center'>Analisis Suhu dan Kelembapan Bulan Januari</h2>
      
      <LineChart
      width={600}
      height={300}
      data={dataTempHum}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
      className="mt-8"
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="suhu" stroke="#8884d8" activeDot={{ r: 30 }} />
      <Line type="monotone" dataKey="kelembapan" stroke="#82ca9d" activeDot={{ r: 30 }} />
    </LineChart>

      
    </div>
  )
}

export default Analysis