import { useState } from "react"
//redux
import {useSelector} from 'react-redux'
//components
import AddVictory from "./AddVictory";
import ListVictories from "./ListVictories";


export default function DefaultView() {
    const userData = useSelector(state => state.userData);

    const [functionView, setFunctionView] = useState('')

    return (
        <div className="w-full h-full mt-24">
            <div className="flex justify-center items-center">
                <h1 className="mr-4 text-4xl">My victories</h1>
                <button className="p-2 text-2xl text-gray-200 bg-blue-600" onClick={() => setFunctionView('AddVictory')}>Add victory</button>
            </div>
            {functionView === 'AddVictory' &&
                <AddVictory setFunctionView={setFunctionView} />
            }
            <ListVictories />
        </div>
    )
}