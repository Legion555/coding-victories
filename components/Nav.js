import Link from 'next/link';
import { useRouter } from 'next/router';
//icons
import {GiTrophyCup} from 'react-icons/gi'
import {RiShutDownLine} from 'react-icons/ri'
//redux
import {updateUserData} from '../slices/userDataSlice'
import {useSelector, useDispatch} from 'react-redux'



export default function Nav() {
    const dispatch = useDispatch();
    const router = useRouter();
    const userData = useSelector(state => state.userData.value);

    const logout = () => {
        //remove cookies
        localStorage.removeItem('loginEmail');
        localStorage.removeItem('loginPassword');
        //set userData redux
        dispatch(updateUserData(null))
        router.push('/')
    }

    return (
        <div className="w-full h-20 px-4 md:px-8 fixed top-0 flex justify-between items-center text-gray-100 bg-gray-800 z-50">
            <div className="flex items-center">
                <Link href="/" >
                <h1 className="md:mr-12 text-base md:text-2xl cursor-pointer">
                    Coding<GiTrophyCup className="inline text-yellow-600" />Victories</h1>
                </Link>
                <Link href="/main" >
                    <button className="hidden md:block">View victories</button>
                </Link>
            </div>
            {userData ?
                <div className="flex">
                    <Link href="/profile" >
                        <button className="hidden md:block mr-4">Add victory</button>
                    </Link>
                    <Link href="/profile" >
                        <button className="mr-4">{userData.username}</button>
                    </Link>
                    <RiShutDownLine className="text-3xl text-red-800 cursor-pointer" onClick={logout} />
                </div>
            :
                <div className="flex">
                    <button className="mr-4" onClick={() => router.push('/')}>Login/register</button>
                </div>
            }
        </div>
    )
}