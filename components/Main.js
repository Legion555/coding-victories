import { useState } from "react"
//redux
import {useSelector} from 'react-redux'
//components
import Nav from './Nav'
import Index from "./Default/Index";
import Profile from "./Profile/Profile";



export default function Home({setViewMain}) {
    const userData = useSelector(state => state.userData.value);
    
    const [view, setView] = useState('default');

    return (
        <div className="w-full h-full animate-fadeIn">

            <Nav setView={setView} setViewMain={setViewMain} />

            {view === 'default' &&
                <Index setView={setView} setViewMain={setViewMain} />
            }
            {view === 'profile' &&
                <Profile />
            }
        </div>
    )
}