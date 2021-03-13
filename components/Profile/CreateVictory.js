import { useState } from "react"
import {uid} from 'uid'
import axios from 'axios'
import TextareaAutosize from 'react-textarea-autosize';
//redux
import {useSelector, useDispatch} from 'react-redux'
import {updateUserData} from '../../actions'


export default function CreateVictory({setFunctionView}) {
    const dispatch = useDispatch();
    const userData = useSelector(state => state.userData);

    const [title, setTitle] = useState('');
    const [titleError, setTitleError] = useState(null);
    const [description, setDescription] = useState('');
    const [descriptionError, setDescriptionError] = useState(null);

    const createVictory = (e) => {
        e.preventDefault()

        //reset errors
        setTitleError(null); setDescriptionError(null);

        //validation
        if (title .length == 0) {setTitleError('Too short'); return setTitle('')}
        if (description.length == 0) {setDescriptionError('Too short'); return setDescription('')}

        const payload = {
            userId: userData._id,
            _id: uid(),
            title: title,
            description: description,
            date_created: Date.now(),
            authorId: userData._id,
            author: userData.username
        }
        axios.post('/api/victories/create', payload)
        .then(result => {
            dispatch(updateUserData(result.data))
            setFunctionView('')
        }).catch(err => console.log(err))
    }

    return (
        <div className="w-full h-screen flex justify-center items-center absolute top-0 left-0 z-40">
            <div className="w-full h-full bg-gray-800 bg-opacity-50" onClick={() => setFunctionView('')} />
            <div className="w-6/12 absolute px-6 py-4 rounded bg-gray-200 shadow">
                <h1 className='mb-8 text-4xl text-center'>Add your victory</h1>
                <form>
                    <input className={`w-full mb-8 p-4 text-xl ${titleError !== null && 'border-2 border-red-500'}`}
                        type='text' placeholder={titleError === null ? "title" : titleError}
                        value={title} onChange={(e) => setTitle(e.target.value)} />

                    <TextareaAutosize className={`w-full mb-8 p-4 text-xl ${descriptionError !== null && 'border-2 border-red-500'}`}
                        placeholder={descriptionError === null ? "description" : descriptionError}
                        value={description} onChange={(e) => setDescription(e.target.value)} />
                    <button className="w-full p-2 text-2xl text-gray-100 bg-blue-800" onClick={(e) => createVictory(e)}>Add</button>
                </form>
            </div>
        </div>
    )
}