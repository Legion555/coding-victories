//icons
import {GiTrophyCup} from 'react-icons/gi'
import {RiShutDownLine} from 'react-icons/ri'
//redux
import {updateUserData, updateIsLoggedIn} from '../actions'
import {useSelector, useDispatch} from 'react-redux'



export default function Nav({setView, setViewMain}) {
    const dispatch = useDispatch();
    const userData = useSelector(state => state.userData);

    const logout = () => {
        //remove cookies
        localStorage.removeItem('loginEmail');
        localStorage.removeItem('loginPassword');
        //set userData redux
        dispatch(updateUserData(null))
        dispatch(updateIsLoggedIn(false))
    }

    return (
        <div className="w-full h-20 px-8 fixed top-0 flex justify-between items-center text-gray-100 bg-gray-800">
            <div className="flex items-center">
                <h1 className="mr-12 text-2xl cursor-pointer" onClick={() => setView('default')}>
                    Coding<GiTrophyCup className="inline text-yellow-600" />Victories</h1>
                <button onClick={() => setView('default')}>View victories</button>
            </div>
            {userData ?
                <div className="flex">
                    <button className="mr-4" onClick={() => setView('profile')}>Add victory</button>
                    <button className="mr-4" onClick={() => setView('profile')}>{userData.username}</button>
                    <RiShutDownLine className="text-3xl text-red-800 cursor-pointer" onClick={logout} />
                </div>
            :
                <div className="flex">
                    <button className="mr-4" onClick={() => setViewMain(false)}>Login/register</button>
                </div>
            }
        </div>
    )
}