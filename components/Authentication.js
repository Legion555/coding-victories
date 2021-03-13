import { useState } from "react"
//components
import Login from './Login'
import Register from './Register'

export default function Authentication({setViewMain}) {
    const [view, setView] = useState('login') //change to login

    return (
        <div className="w-full min-h-screen flex flex-col md:flex-row">
            <div className="authentication w-full md:w-7/12 p-8 flex justify-center items-center relative">
                {/* <div className="w-full h-full absolute top-0 left-0 bg-gray-200 opacity-40" /> */}
                <div className="w-max h-72 px-4 flex items-center text-center relative">
                    <div className="w-full h-full bg-blue-400 absolute top-0 left-0
                        rounded-xl shadow transform rotate-6" />
                    <div className="w-full h-full bg-green-400 absolute top-0 left-0
                        rounded-xl shadow transform -rotate-6" />
                    <div className="w-full h-full bg-yellow-400 absolute top-0 left-0 rounded-xl shadow" />
                    <div className="flex flex-col relative">
                        <h1 className="mb-8 text-3xl lg:text-5xl xl:text-6xl text-gray-700">Welcome to<br/>
                            <span className="text-4xl lg:text-6xl xl:text-8xl">Coding Victories</span></h1>
                        <button className="w-max mx-auto p-2 rounded text-gray-100 bg-blue-800 hover:bg-blue-600"
                            onClick={() => setViewMain(true)} >View victories</button>
                    </div>
                </div>
            </div>
            <div className="w-full md:w-5/12 text-center bg-gray-100">
                {view === 'login' ?
                    <Login setView={setView} />
                :
                    <Register setView={setView} />
                }
            </div>
        </div>
    )
}