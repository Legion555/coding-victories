import { useEffect, useState } from "react";
import axios from 'axios';
//redux
import {useSelector} from 'react-redux';
//components
import VictoryCard from './VictoryCard';



export default function ListVictories() {
    const victories = useSelector(state => state.victories.value);

    return (
        <div className="w-full">
            <div className="w-full md:w-6/12 mx-auto flex justify-center items-center">
                <div className="w-full h-1 bg-gray-400" />
                <h1 className="mx-4 text-center text-4xl font-bold">Recent</h1>
                <div className="w-full h-1 bg-gray-400" />
            </div>
            <div className="flex justify-evenly flex-wrap p-4">
                {victories ?
                    victories.slice(0).reverse().map(victory => 
                        <VictoryCard key={victory._id} victoryData={victory} />
                    )
                :
                <>
                    <SkeletonCard />
                    <SkeletonCard />
                    <SkeletonCard />
                </>
                }
            </div>
        </div>
    )
}

const SkeletonCard = () => {
    return (
        <div className="w-10/12 md:w-5/12 lg:w-4/12 xl:w-3/12 h-64 m-4
            relative rounded-xl shadow text-gray-800">
            <div className="w-full h-full relative flex flex-col justify-between rounded-xl bg-gray-100 animate-pulse">
                <div>
                    <h1 className='w-full h-8 text-2xl bg-gray-400 animate-pulse'></h1>
                    <p className="h-4 mt-4 mx-4 bg-gray-400 text-xl overflow-y-auto"></p>
                    <p className="h-4 mt-4 mx-4 bg-gray-400 text-xl overflow-y-auto"></p>
                    <p className="h-4 mt-4 mx-4 bg-gray-400 text-xl overflow-y-auto"></p>
                </div>
                <div className="flex justify-between items-center p-2">
                    <a className="w-8 h-4 bg-gray-400"></a>
                    <p className="w-16 h-4 bg-gray-400"></p>
                </div>
            </div>
        </div>
    )
}