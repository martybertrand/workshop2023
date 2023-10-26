import React, { useEffect, useState } from 'react'
import ventil from '../img/ventil.png'
import { Switch } from 'antd';
import axios from 'axios'

export default function Consumption() {

    const temp = 'rounded-2xl bg-white p-4 shadow-lg w-full'
    const btnTemp = 'bg-gray-600 text-white font-bold py-2 px-8 rounded-full hover:bg-gray-500'

    const [ appartment, setAppartment ] = useState([])

    const onChange = (checked) => {
        console.log(`switch to ${checked}`);
    };

    useEffect(() => {
        axios.get('https://api-green-chauffage-n58glv11t-calvincs-projects.vercel.app/appartements')
        .then((res) => res.data)
        .then((data) => {
            setAppartment(data)                             
        })
    }, [])

    return (
        <div className='flex flex-col p-8 leading-normal w-full'>
            <h1 className='text-white font-bold text-3xl'>Tableu de bord : Température des appartements</h1>

            <div className='grid grid-cols-4 w-full h-full gap-2'>
                {
                    appartment.map((appart, index) => (
                        <div key={appart.id} className={temp}>
                            <div className='flex justify-between'>
                                <span className='font-bold'>Appartement {appart.num_appartement}</span>
                                <Switch defaultChecked onChange={onChange} />
                            </div>

                            <div className='flex w-full justify-between items-center h-full'>
                                <div className='flex flex-col justify-center items-center'>
                                    <span className='text-5xl font-bold'>{appart.temperature_choisie} °C</span>
                                    <div>
                                        <button className={btnTemp} onClick={() => {
                                            const newAppartment = [...appartment]
                                            newAppartment[index] = newAppartment[index] - 1
                                            setAppartment(newAppartment)
                                        }}>-</button>
                                        <button className={btnTemp} onClick={() => {
                                            const newAppartment = [...appartment]
                                            newAppartment[index] = newAppartment[index] + 1
                                            setAppartment(newAppartment)
                                        }}>+</button>
                                    </div>
                                </div>
                                <img className='w-16 h-16' src={ventil} alt='ventil'/>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    ) 
}
