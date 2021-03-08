import { useState } from "react"
//redux
import {useSelector} from 'react-redux'
//components


export default function DefaultView() {
    const userData = useSelector(state => state.userData);

    return (
        <div className="w-full h-screen">
            {/* Hero */}
            <div className="w-full flex justify-center items-center bg-gray-800" style={{height: '500px', backgroundImage: "url('/assets/hero_bg.jpg')", backgroundPosition: 'bottom'}}>
                <div className="p-4 text-center">
                    <div className="w-max mb-8">
                        <div className="w-full h-8 relative top-24 bg-blue-800" />
                        <div className="w-full h-8 relative top-32 bg-green-800" />
                        <h1 className="relative text-6xl text-yellow-200">Victories are meant<br/>to be celebrated</h1>
                    </div>
                    <button className="p-4 text-3xl rounded shadow text-gray-100 bg-yellow-600">Share yours today</button>
                </div>
            </div>
        </div>
    )
}