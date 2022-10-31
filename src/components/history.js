import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const History = () => {

  const data = [
    {
      name: 'Tanggal 1',
      suhu: 36,
      kelembapan: 70,
    },
    {
      name: 'Tanggal 1',
      suhu: 38,
      kelembapan: 56,
    },
    {
      name: 'Tanggal 2',
      suhu: 31,
      kelembapan: 53,
    },
    {
      name: 'Tanggal 3',
      suhu: 33,
      kelembapan: 69,
    },
    {
      name: 'Tanggal 4',
      suhu: 35,
      kelembapan: 64,
    },
    {
      name: 'Tanggal 5',
      suhu: 29,
      kelembapan: 81,
    },
    {
      name: 'Tanggal 6',
      suhu: 31,
      kelembapan: 86,
    },
  ];
  
  return (
    <div className='w-6/12 mx-auto mt-6 flex flex-col items-center'>
      <h2 className='font-semibold text-sky-900 text-2xl text-center'>Data Suhu dan Kelembapan Hari Ini</h2>
      <LineChart
          width={500}
          height={300}
          data={data}
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
          <Line type="monotone" dataKey="suhu" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="kelembapan" stroke="#82ca9d" />
        </LineChart>
    </div>
  )
}

export default History