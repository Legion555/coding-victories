import {GiTrophyCup} from 'react-icons/gi'

export default function Nav({setView}) {
    return (
        <div className="w-full h-20 px-8 fixed top-0 flex justify-between items-center text-gray-100 bg-gray-800">
            <h1 className="text-2xl">Coding<GiTrophyCup className="inline text-yellow-600" />Victories</h1>
            <div>
                <button onClick={() => setView('default')}>View victories</button>
            </div>
            <div className="flex">
                <button className="mr-4">Add victory</button>
                <button onClick={() => setView('profile')}>Profile</button>
            </div>
        </div>
    )
}