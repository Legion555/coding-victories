import { useEffect, useState } from "react"
import axios from 'axios';
//redux
import {useSelector} from 'react-redux';
//components



export default function ListVictories() {
    const victories = useSelector(state => state.victories);

    return (
        <div className="w-full">
            <div className="flex justify-evenly flex-wrap p-4">
            {victories.map(victory => 
                <VictoryCard key={victory._id} victoryData={victory} />
            )}
            </div>
        </div>
    )
}

const VictoryCard = ({victoryData}) => {
    return (
        <div className="w-3/12 h-64 flex flex-col justify-between rounded shadow bg-gray-100">
            <div>
                <h1 className="p-2 text-2xl bg-white border-b border-gray-400">{victoryData.title}</h1>
                <p className="pl-4 py-2 text-xl">{victoryData.description}</p>
            </div>
            <div className="flex justify-between items-center p-2">
                <p>@{victoryData.author}</p>
                <p>{Date(victoryData.date_created).slice(0,16)}</p>
            </div>
            
        </div>
    )
}