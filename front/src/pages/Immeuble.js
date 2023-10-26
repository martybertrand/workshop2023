import React from 'react'

export default function Immeuble() {

    const appartment = [
        { appart: 1, consommation: 110.3, co2: 0.52, habitant: 4, surface: 120,   choosenT: 18  },
        { appart: 2, consommation: 55.3, co2: 0.65, habitant: 2, surface: 60,     choosenT: 21  },
        { appart: 3, consommation: 76.34, co2: 0.12, habitant: 3, surface: 80,    choosenT: 22  },
        { appart: 4, consommation: 70.88, co2: 0.53, habitant: 4, surface: 120,   choosenT: 22  },
        { appart: 5, consommation: 80.56, co2: 0.12, habitant: 2, surface: 60,    choosenT: 21  },
        { appart: 6, consommation: 90.45, co2: 0.23, habitant: 3, surface: 80,    choosenT: 21  },
        { appart: 7, consommation: 56.34, co2: 0.49, habitant: 2, surface: 60,    choosenT: 19  },
        { appart: 8, consommation: 57.03, co2: 0.19, habitant: 3, surface: 80,    choosenT: 23  },
        { appart: 9, consommation: 89.23, co2: 0.69, habitant: 4, surface: 120,   choosenT: 18  },
        { appart: 10, consommation: 115.76, co2: 0.34, habitant: 4, surface: 120, choosenT: 20 },
        { appart: 11, consommation: 76.34, co2: 0.67, habitant: 2, surface: 60,   choosenT: 23  },
        { appart: 12, consommation: 78.41, co2: 0.23, habitant: 3, surface: 80,   choosenT: 23  },
        { appart: 13, consommation: 101.23, co2: 0.54, habitant: 4, surface: 120, choosenT: 23  },
        { appart: 14, consommation: 86.09, co2: 0.66, habitant: 2, surface: 60,   choosenT: 21  },
        { appart: 15, consommation: 110.3, co2: 0.31, habitant: 4, surface: 120,  choosenT:  20 },
        { appart: 16, consommation: 55.3, co2: 0.71, habitant: 2, surface: 60,    choosenT:  21 },
        { appart: 17, consommation: 76.67, co2: 0.59, habitant: 3, surface: 80,   choosenT:  21 },
        { appart: 18, consommation: 70.88, co2: 0.38, habitant: 4, surface: 120,  choosenT:  19 },
        { appart: 19, consommation: 80.56, co2: 0.38, habitant: 2, surface: 60,   choosenT:  19 },
        { appart: 20, consommation: 90.45, co2: 0.29, habitant: 3, surface: 80,   choosenT:  22 },
    ]
 
    const tdData = 'p-2 text-center'
    const tdHead = 'p-2 font-bold text-xl'

    return (
        <div className='text-white p-8 w-full'>
             <h1 className='font-bold text-2xl'>Informations des appartements dans l'immeuble</h1>

             <div className='w-full flex justify-center items-center mt-8 rounded-2xl border-2 border-gray-600'>
                <table className='w-full'>
                    <thead>
                        <tr className='border-b-4 border-gray-600'>
                            <th className={tdHead}>Appartement</th>
                            <th className={tdHead}>Consommation (kW)</th>
                            <th className={tdHead}>Co2</th>
                            <th className={tdHead}>Habitants</th>
                            <th className={tdHead}>Surface</th>
                            <th className={tdHead}>Température (°C) désirée</th>
                        </tr>
                    </thead>
                    <tbody>
                        {appartment.map((appart, index) => (
                            <tr key={index} className='hover:bg-slate-800  border-t-2 border-gray-600'>
                                <td className={tdData}>{appart.appart}</td>
                                <td className={tdData}>{appart.consommation}</td>
                                <td className={tdData}>{appart.co2}</td>
                                <td className={tdData}>{appart.habitant}</td>
                                <td className={tdData}>{appart.surface}</td>
                                <td className={tdData}>{appart.choosenT}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
             </div>
        </div>
    ) 
}
