import React, { useState } from 'react'
import ventil from '../img/ventil.png'
import { Switch } from 'antd';

export default function Consumption() {

    const temp = 'rounded-2xl bg-white p-4 shadow-lg w-full'
    const btnTemp = 'bg-gray-600 text-white font-bold py-2 px-8 rounded-full hover:bg-gray-500'

    const [ appartment, setAppartment ] = useState([ 18, 21, 22, 22, 21, 21, 19, 23, 18, 20, 23, 23, 23, 21, 20, 21, 21, 19, 19, 22 ])

    const onChange = (checked) => {
        console.log(`switch to ${checked}`);
    };

    return (
        <div className='flex flex-col p-8 leading-normal w-full'>
            <h1 className='text-white font-bold text-3xl'>Tableu de bord : Température des appartements</h1>

            <div className='grid grid-cols-4 w-full h-full gap-2'>
                {
                    appartment.map((appart, index) => (
                        <div key={index} className={temp}>
                            <div className='flex justify-between'>
                                <span className='font-bold'>Appartement {index + 1}</span>
                                <Switch defaultChecked onChange={onChange} />
                            </div>

                            <div className='flex w-full justify-between items-center h-full'>
                                <div className='flex flex-col justify-center items-center'>
                                    <span className='text-5xl font-bold'>{appart}</span>
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
