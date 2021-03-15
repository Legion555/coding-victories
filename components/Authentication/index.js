import { useState } from "react";
import {useSelector} from 'react-redux';
//components
import Login from './Login'
import Register from './Register'



export default function Index({setViewMain}) {
    const victories = useSelector(state => state.victories);

    const [view, setView] = useState('login') //change to login

    return (
        <div className="w-full min-h-screen flex flex-col md:flex-row">
            {/* Hero */}
            <div className="authentication w-full md:w-7/12 p-8 flex justify-center items-center relative select-none">
                <div className="hidden md:block">
                    <VictoryCard victoryData={victories[0]} offset={'top-1/4 left-4'} animationDur={'4s'} />
                    <VictoryCard victoryData={victories[1]} offset={'top-4 right-1/4'} animationDur={'3s'} />
                    <VictoryCard victoryData={victories[2]} offset={'top-3/4 left-2/4'} animationDur={'7s'} />
                    <VictoryCard victoryData={victories[3]} offset={'bottom-16 left-12'} animationDur={'5s'} />
                </div>
                <div className="w-max h-72 px-4 flex items-center text-center relative">
                    <div className="w-full h-full bg-blue-400 absolute top-0 left-0
                        rounded-xl shadow transform rotate-6" />
                    <div className="w-full h-full bg-green-400 absolute top-0 left-0
                        rounded-xl shadow transform -rotate-6" />
                    <div className="w-full h-full bg-yellow-400 absolute top-0 left-0 rounded-xl shadow" />
                    <div className="flex flex-col relative">
                        <h1 className="mb-8 text-3xl lg:text-5xl xl:text-6xl text-gray-700">Welcome to<br/>
                            <span className="text-4xl lg:text-6xl xl:text-8xl">Coding Victories</span></h1>
                        <button className="w-max mx-auto p-2 rounded text-2xl text-gray-100 bg-blue-800
                            hover:bg-blue-600 transition ease-in-out duration-150"
                            onClick={() => setViewMain(true)} >View victories</button>
                    </div>
                </div>
            </div>
            {/* Authentication */}
            <div className="w-full lg:w-5/12 text-center bg-gray-100">
                {view === 'login' ?
                    <Login setView={setView} />
                :
                    <Register setView={setView} />
                }
            </div>
        </div>
    )
}

const VictoryCard = ({victoryData, offset, animationDur}) => {

    const parseDescr = (descr) => {
        if (descr.length > 30) {
            return `${descr.slice(0,28)}...`
        }
        return descr
    }

    if (victoryData) {
        return (
        <div className={`w-64 h-max absolute ${offset} rounded-xl shadow animate-lighthouse bg-gray-100`} style={{'animationDuration': animationDur}}>
            <div className="w-full h-full relative flex flex-col justify-between rounded-xl bg-gray-100">
                <div>
                    <h1 className={`p-2 text-xl rounded-xl border-b border-gray-400 bg-${victoryData.color}-200`}>{victoryData.title}</h1>
                    <p className="pl-4 py-2">{parseDescr(victoryData.description)}</p>
                </div>
                <div className="flex justify-between items-center p-2">
                    <p>@{victoryData.author}</p>
                    <p>{Date(victoryData.date_created).slice(0,16)}</p>
                </div>
            </div>
        </div>
        )
    }
    return null;
}