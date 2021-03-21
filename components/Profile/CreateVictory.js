import { useState } from "react"
import {uid} from 'uid'
import axios from 'axios'
import TextareaAutosize from 'react-textarea-autosize';
//redux
import {useSelector, useDispatch} from 'react-redux'
import {updateUserData} from '../../slices/userDataSlice'
//functions
import {parseLightColor} from '../Functions/parseLightColor';


export default function CreateVictory({setFunctionView}) {
    const dispatch = useDispatch();
    const userData = useSelector(state => state.userData.value);

    const [title, setTitle] = useState('');
    const [titleError, setTitleError] = useState(null);
    const [description, setDescription] = useState('');
    const [descriptionError, setDescriptionError] = useState(null);
    const [color, setColor] = useState('blue')

    const createVictory = (e) => {
        e.preventDefault()

        //reset errors
        setTitleError(null); setDescriptionError(null);

        //validation
        if (title .length == 0) {setTitleError('Too short'); return setTitle('')}
        if (title .length == 90) {setTitleError('Too long'); return setTitle('')}
        if (description.length == 0) {setDescriptionError('Too short'); return setDescription('')}
        if (description.length > 360) {return setDescriptionError('Too long')}

        const payload = {
            userId: userData._id,
            _id: uid(),
            title: title,
            description: description,
            date_created: Date.now(),
            authorId: userData._id,
            author: userData.username,
            color: color
        }
        axios.post('/api/victories/create', payload)
        .then(result => {
            dispatch(updateUserData(result.data))
            setFunctionView('')
        }).catch(err => console.log(err))
    }

    return (
        <div className="w-full h-screen flex justify-center items-center fixed top-0 left-0 z-50 duration-300 animate-fadeIn">
            <div className="w-full h-full bg-gray-800 bg-opacity-50" onClick={() => setFunctionView('')} />
            <div className="w-full md:w-500 absolute rounded-xl bg-gray-100 shadow">
                <form>
                    <input className={`w-full mb-4 p-4 text-xl rounded-xl focus:outline-none
                        ${titleError !== null && 'border-2 border-red-500'}`} style={{backgroundColor: parseLightColor(color)}}
                        type='text' placeholder={titleError === null ? "Title" : titleError}
                        value={title} onChange={(e) => setTitle(e.target.value)} autoFocus />
                    
                    <TextareaAutosize className={`w-full p-4 text-xl bg-gray-100 focus:outline-none
                        ${descriptionError !== null && 'border-2 border-red-500'}`}
                        placeholder={descriptionError === null ? "Write about your victory..." : descriptionError}
                        value={description} onChange={(e) => setDescription(e.target.value)} />

                    {descriptionError === 'Too long' && <p className="text-center text-red-600">Description too long. Only 360 characters allowed.</p>}

                    <div className="mt-8 mb-4 px-4 flex justify-between items-end">
                        <div>
                            <h1 className="text-xl text-center">Choose a color:</h1>
                            <div className="flex justify-center mt-4">
                                <div className={`w-6 h-6 mx-2 bg-blue-400 cursor-pointer ${color == 'blue' && 'outline-black'}`} onClick={() => setColor('blue')} />
                                <div className={`w-6 h-6 mx-2 bg-green-400 cursor-pointer ${color == 'green' && 'outline-black'}`} onClick={() => setColor('green')} />
                                <div className={`w-6 h-6 mx-2 bg-red-400 cursor-pointer ${color == 'red' && 'outline-black'}`} onClick={() => setColor('red')} />
                                <div className={`w-6 h-6 mx-2 bg-yellow-400 cursor-pointer ${color == 'yellow' && 'outline-black'}`} onClick={() => setColor('yellow')} />
                            </div>
                        </div>
                        <CharactersLeft description={description} />
                    </div>
                </form>
               
                <button className="w-full p-2 text-2xl text-gray-100 bg-blue-800 hover:bg-blue-600 transition ease-in-out duration-150"
                    onClick={(e) => createVictory(e)}>Add</button>
            </div>
        </div>
    )
}

const CharactersLeft = ({description}) => {
    return (
        <div className="flex">
            <h1 className="mr-4 text-center">Characters left:</h1>
            <p className="text-center">{360 - description.length}</p>
        </div>
    )
}