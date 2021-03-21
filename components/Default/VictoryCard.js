import axios from 'axios';
import Link from 'next/link';
import { useEffect, useState } from 'react';
//redux
import {updateUserData} from '../../slices/userDataSlice';
import {useSelector, useDispatch} from 'react-redux';
//functions
import { parseDate } from '../Functions/parseDate';
//icons
import {AiFillHeart} from 'react-icons/ai';

export default function VictoryCard({victoryData}) {
    const dispatch = useDispatch();
    const userData = useSelector(state => state.userData.value);

    const [likes, setLikes] = useState(victoryData.likes);
    const [likeStatus, setLikeStatus] = useState(false);

    useEffect(() => {
        evalLike();
    }, [])

    const toggleLike = () => {
        // if victory is already liked
        if (likeStatus) {
            const payload = {
                authorId: victoryData.authorId,
                userId: userData._id,
                victoryId: victoryData._id
            }
            axios.put('/api/victories/removeLike', payload)
            .then(result => {
                setLikes(likes - 1);
                //add like to userData
                let tempUserData = userData;
                let tempLikes = tempUserData.likes.filter(like => like._id !== victoryData._id);
                tempUserData.likes = tempLikes;
                dispatch(updateUserData(tempUserData));
                //change like status
                setLikeStatus(false);
            }).catch(err => console.log(err));
        } else {
            // if victory is not liked yet
            const payload = {
                authorId: victoryData.authorId,
                userId: userData._id,
                victoryId: victoryData._id
            }
            axios.put('/api/victories/addLike', payload)
            .then(result => {
                setLikes(likes + 1);
                //add like to userData
                let tempUserData = userData;
                tempUserData.likes.push({_id: victoryData._id})
                dispatch(updateUserData(tempUserData));
                //change like status
                setLikeStatus(true);
            }).catch(err => console.log(err));
        }
        
    }
    
    const evalLike = () => {
        if (userData) {
            userData.likes.forEach(like => {
                if(like._id === victoryData._id) {
                    return setLikeStatus(true);
                }
                return null;
            })
        }
        return null;
    }

    const parseColor = () => {
        let color;
        switch (victoryData.color) {
            case 'blue':
                color = 'rgb(147,197,253)';
                break;
            case 'green':
                color = 'rgb(112,231,183)';
                break;
            case 'red':
                color = 'rgb(252,165,165)';
                break;
            case 'yellow':
                color = 'rgb(252,211,79)';
                break;
            default:
                break;
        }
        return color;
    }

    return (
        <div className="w-10/12 md:w-5/12 lg:w-4/12 xl:w-3/12 h-64 m-4 relative rounded-xl shadow text-gray-800
            transform hover:scale-105 transition ease-out duration-500 animate-fadeIn">
            <div className={`w-full h-full absolute top-2 left-2 rounded-xl shadow`} style={{backgroundColor: victoryData.color}} />
            <div className="w-full h-full relative flex flex-col justify-between rounded-xl bg-gray-100">
                <div>
                    <h1 className={`p-2 text-2xl rounded-xl border-b border-gray-400`} style={{backgroundColor: parseColor()}}>{victoryData.title}</h1>
                    <p className="h-36 pl-6 py-2 text-xl overflow-y-auto">{victoryData.description}</p>
                </div>
                <div className="flex justify-between items-center p-2">
                    <Link href="/u/[id]" as={`/u/${victoryData.authorId}`}><a>@{victoryData.author}</a></Link>
                    <p>{parseDate(victoryData.date_created)}</p>
                </div>
                <div className="w-max absolute bottom-2 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
                    <p>{victoryData.likes && likes}</p>
                    <AiFillHeart className={`text-xl cursor-pointer hover:text-red-800
                        ${likeStatus ? 'text-red-800' : 'text-red-300' }`}
                        onClick={userData && toggleLike} />
                </div>
            </div>
        </div>
    )
}