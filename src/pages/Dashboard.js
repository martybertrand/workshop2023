import React from 'react'
import { Bar, Radar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    RadialLinearScale,
    PointElement,
    LineElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';

ChartJS.register(
    CategoryScale,
    RadialLinearScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export default function Dashboard() {

    const options = {
        
    };

    const labels = [
        { label: '01/10/2023', produit: 105.54,     consommation: 110.3,  co2: 0.52   },
        { label: '02/10/2023', produit: 92.65,      consommation: 55.3,   co2: 0.65   },
        { label: '03/10/2023', produit: 95.97,      consommation: 76.34,  co2: 0.12   },
        { label: '04/10/2023', produit: 120.43,     consommation: 70.88,  co2: 0.53   },
        { label: '05/10/2023', produit: 136.9,      consommation: 80.56,  co2: 0.12    },
        { label: '06/10/2023', produit: 88.34,      consommation: 90.45,  co2: 0.23   },
        { label: '07/10/2023', produit: 86.12,      consommation: 56.34,  co2: 0.49   },
        { label: '08/10/2023', produit: 77.47,      consommation: 57.03,  co2: 0.19   },
        { label: '09/10/2023', produit: 92.04,      consommation: 89.23,  co2: 0.69   },
        { label: '10/10/2023', produit: 99.12,      consommation: 115.76, co2: 0.34   },
        { label: '11/10/2023', produit: 134.56,     consommation: 76.34,  co2: 0.67   },
        { label: '12/10/2023', produit: 124.92,     consommation: 78.41,  co2: 0.23   },
        { label: '13/10/2023', produit: 108.32,     consommation: 101.23, co2: 0.54   },
        { label: '14/10/2023', produit: 107.89,     consommation: 86.09,  co2: 0.66   },
        { label: '15/10/2023', produit: 105.54,     consommation:  110.3, co2: 0.31   },
        { label: '16/10/2023', produit: 92.65,      consommation: 55.3,   co2: 0.71   },
        { label: '17/10/2023', produit: 95.97,      consommation: 76.34,  co2: 0.59   },
        { label: '18/10/2023', produit: 120.43,     consommation:  70.88, co2: 0.38   },
        { label: '19/10/2023', produit: 136.9,      consommation: 80.56,  co2: 0.38   },
        { label: '20/10/2023', produit: 88.34,      consommation: 90.45,  co2: 0.29   },
        { label: '21/10/2023', produit: 86.12,      consommation: 56.34,  co2: 0.46   },
        { label: '22/10/2023', produit: 77.47,      consommation: 57.03,  co2: 0.44   },
        { label: '23/10/2023', produit: 92.04,      consommation: 89.23,  co2: 0.62   },
        { label: '24/10/2023', produit: 99.12,      consommation: 115.76, co2: 0.47  },
        { label: '25/10/2023', produit: 134.56,     consommation:  76.34, co2: 0.21   },
        { label: '26/10/2023', produit: 124.92,     consommation:  78.41, co2: 0.48   },
        { label: '27/10/2023', produit: 108.32,     consommation:  101.23, co2: 0.50  },
        { label: '27/10/2023', produit: 107.89,     consommation:  86.09,  co2: 0.22  }
    ];

    const data = {
        labels: labels.map((item) => item.label),
        datasets: [
            {
                label: 'Energie produite',
                data: labels.map((item) => item.produit),
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
            {
                label: 'Energie consommée',
                data: labels.map((item) => item.consommation),
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
        ],
    };

    const dataRadar = {
        labels: labels.map((item) => item.label),
        datasets: [
          {
            label: 'Emission en CO2',
            data: labels.map((item) => item.co2),
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,
          },
        ],
      };

    return (
        <div className='flex leading-normal w-full h-screen p-4 text-white flex-col'>
            <div className='w-full h-1/3 flex flex-row'>
                <div className=' flex flex-row w-1/2 p-2'>
                    <div className='bg-green-500 h-full w-1/2 rounded-2xl flex justify-center items-center flex-col'>
                        <span className='text-4xl font-bold'>12,78 kW</span>
                        <span className='font-bold'>Consommation actuelle</span>
                    </div>
                    <div className='flex flex-col w-1/2 h-full'>
                        <div className='flex justify-center items-center flex-col bg-green-500 w-full h-1/2 rounded-2xl ml-4 mr-4 mb-2'>
                            <span className='text-4xl font-bold'>21,2 °C</span>
                            <span className='font-bold'>Température moyenne immeuble</span>
                        </div>
                        <div className='flex justify-center items-center flex-col bg-green-500 w-full h-1/2 rounded-2xl ml-4 mr-4 mt-2'>
                            <span className='text-4xl font-bold'>53,15 %</span>
                            <span className='font-bold'>Humidité extérieure</span>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col w-1/2 p-2 justify-center items-center ml-4'>
                    <div className='bg-orange-100 rounded-2xl w-full h-full px-8'>
                        <Bar options={options} data={data}/>
                    </div>
                </div>
            </div>

            <div className='w-full h-2/3 rounded-2xl ml-2 mt-2 flex'>
                <Radar className='w-1/3 bg-orange-100 rounded-2xl p-2' data={dataRadar}/>
                <div className='w-2/3 grid grid-cols-2 gap-4 px-4'>
                    <div className='bg-red-700 rounded-2xl flex justify-center items-center'>
                        <span className='text-2xl font-bold'>Informations Data Center</span>
                    </div>
                    <div className='bg-red-600 rounded-2xl flex justify-between items-center flex-col p-4'>
                        <span className='text-2xl font-bold'>Stockage restant</span>
                        <div className='w-full p-2 border-2 border-gray-400 rounded-xl'>
                            <div className='w-full flex justify-between'>
                                <span className='font-bold'>Data Center</span>
                                <span className='font-bold'>41,26 To sur 100 To utilisées</span>
                            </div>
                            <br/>
                            <div className='bg-slate-800 w-full h-4 rounded-lg flex flex-row items-center'>
                                <div className='bg-gray-400 w-5/12 h-full rounded-lg'></div>
                                <span className='ml-14 text-sm'>59,74 To </span>
                            </div>
                        </div>
                    </div>
                    <div className='bg-red-500 rounded-2xl flex justify-center items-center'>
                        <span className='text-2xl font-bold'>Température ressentie DataCenter</span>
                        <span className='text-2xl font-bold'></span>
                    </div>
                    <div className='bg-red-400 rounded-2xl flex items-center flex-col justify-between py-10'>
                        <span className='text-2xl font-bold'>Statistiques immeubles</span>
                        <div className='flex justify-center items-center flex-col'>
                            <span className='text-2xl'>Nombre d'appartements : <strong>20</strong></span>
                            <span className='text-2xl'>Nombre d'habitants : <strong>60</strong></span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
