import { useState } from "react"
//redux
import {useSelector} from 'react-redux'
//components
import Nav from './Nav'
import DefaultView from "./DefaultView";
import Profile from "./Profile/Profile";

export default function Home() {
    const userData = useSelector(state => state.userData);
    const [view, setView] = useState('default');

    return (
        <div className="w-full h-full">
            <Nav setView={setView} />
            {/* Hero */}
            {view === 'default' &&
                <DefaultView />
            }
            {view === 'profile' &&
                <Profile />
            }
        </div>
    )
}
