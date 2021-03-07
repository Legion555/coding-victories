import { useState } from "react"
//redux
import {useSelector} from 'react-redux'


export default function Main() {
    const userData = useSelector(state => state.userData);

    return (
        <div className="w-full h-screen flex bg-blue-400">
            <h1 className="mx-auto text-8xl">Hello: {userData.username}</h1>
        </div>
    )
}