import { useState } from "react";
import {useSelector} from 'react-redux';
//components
import Login from './Login'
import Register from './Register'
import VictoryCard from './VictoryCard';



export default function Index() {
    const victories = useSelector(state => state.victories);

    const [view, setView] = useState('login') //change to login

    return (
        <div className="w-full min-h-screen flex flex-col md:flex-row">
            {/* Hero */}
            <div className="authentication w-full md:w-7/12 p-8 flex justify-center items-center relative select-none">
                <div className="hidden md:block">
                    {victories &&
                    <>
                        <VictoryCard victoryData={victories[0]} offset={'top-1/4 left-4'} animationDur={'4s'} />
                        <VictoryCard victoryData={victories[1]} offset={'top-4 right-1/4'} animationDur={'3s'} />
                        <VictoryCard victoryData={victories[2]} offset={'top-3/4 left-2/4'} animationDur={'7s'} />
                        <VictoryCard victoryData={victories[3]} offset={'bottom-16 left-12'} animationDur={'5s'} />
                    </>
                    }
                </div>
                <div className="w-max h-max px-4 py-8 flex items-center text-center relative">
                    <div className="w-full h-full bg-blue-400 absolute top-0 left-0
                        rounded-xl shadow transform rotate-6" />
                    <div className="w-full h-full bg-green-400 absolute top-0 left-0
                        rounded-xl shadow transform -rotate-6" />
                    <div className="w-full h-full bg-yellow-400 absolute top-0 left-0 rounded-xl shadow" />
                    <div className="flex flex-col relative">
                        <h1 className="mb-8 text-3xl lg:text-4xl xl:text-5xl text-gray-700">Welcome to<br/>
                            <span className="text-4xl lg:text-5xl xl:text-6xl">Coding Victories</span></h1>
                        <button className="w-max mx-auto p-2 rounded text-2xl xl:text-3xl text-gray-100 bg-blue-800
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