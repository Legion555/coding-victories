import { useEffect, useState } from "react";
import axios from 'axios';
//redux
import {useSelector} from 'react-redux';
//components
import VictoryCard from './VictoryCard';



export default function ListVictories() {
    const victories = useSelector(state => state.victories);

    const colorGen = () => {
        let options = ['yellow', 'blue', 'green', 'red', 'purple'];
        let choice = options[Math.floor(Math.random() * 4)];
        return choice;
    }

    return (
        <div className="w-full">
            <div className="w-full md:w-6/12 mx-auto flex justify-center items-center">
                <div className="w-full h-1 bg-gray-400" />
                <h1 className="mx-4 text-center text-4xl font-bold">Recent</h1>
                <div className="w-full h-1 bg-gray-400" />
            </div>
            <div className="flex justify-evenly flex-wrap p-4">
                {victories.map(victory => 
                    <VictoryCard key={victory._id} victoryData={victory} color={colorGen()} />
                )}
            </div>
        </div>
    )
}