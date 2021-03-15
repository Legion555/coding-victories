import {useState} from 'react';
import axios from 'axios';
//redux
import {useSelector, useDispatch} from 'react-redux';
import {updateUserData} from '../../actions'
//icons
import {AiOutlineArrowRight} from 'react-icons/ai';
import {FaTrashAlt} from 'react-icons/fa';

export default function VictoryCard({victoryData}) {
    const dispatch = useDispatch();
    const userData = useSelector(state => state.userData);

    const [view, setView] = useState('default');

    const deleteVictory = (e) => {
        e.preventDefault()

        const payload = {
            userId: userData._id,
            victoryId: victoryData._id
        }
        axios.post('/api/victories/delete', payload)
        .then(result => {
            dispatch(updateUserData(result.data))
        }).catch(err => console.log(err))
    }

    return (
        <div className="victory-card w-80 mx-auto my-16 relative
            transform hover:scale-105 transition ease-out duration-700 animate-fadeIn" key={victoryData._id}>
            {view === 'default' &&
                <div className="relative">
                    <div className={`w-full h-full absolute top-0 left-0 rounded shadow bg-${victoryData.color}-300
                        transform rotate-6`} />
                    <div className={`w-full h-full absolute top-0 left-0 rounded shadow bg-${victoryData.color}-600
                        transform -rotate-6`} />
                    <div className="w-full h-full p-2 flex flex-col justify-between relative rounded shadow bg-gray-100">
                        <div className="mb-4">
                            <h1 className="text-xl">{victoryData.title}</h1>
                            <p className="text">{victoryData.description}</p>
                        </div>
                        <p>{Date(victoryData.date_created).slice(0,16)}</p>
                    </div>
                    <FaTrashAlt className="icon-delete hidden absolute top-2 right-2 text-xl text-red-600 hover:text-red-800 cursor-pointer"
                        onClick={() => setView('delete')} />
                </div>
            }
            {view === 'delete' &&
                <div className="h-32">
                    <div className={`w-full h-full absolute top-0 left-0 rounded shadow bg-${victoryData.color}-300
                        transform rotate-6`} />
                    <div className={`w-full h-full absolute top-0 left-0 rounded shadow bg-${victoryData.color}-600
                        transform -rotate-6`} />
                    <div className="w-full h-full p-4 relative rounded shadow bg-gray-100">
                        <h1 className="mb-4 text-xl text-center">Are you sure?</h1>
                        <div className="flex justify-evenly">
                            <button className="px-4 py-2 rounded bg-green-400" onClick={(e) => deleteVictory(e)}>Yes</button>
                            <button className="px-4 py-2 rounded bg-red-400" onClick={() => setView('default')}>No</button>
                        </div>
                    </div>
                    <AiOutlineArrowRight className="icon-delete hidden absolute top-2 right-2 text-xl text-green-600 hover:text-green-800 cursor-pointer" />
                </div>
            }
        </div>
    )
}