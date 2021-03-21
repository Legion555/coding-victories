import { useState } from "react";
import Head from 'next/head';
//redux
import {useSelector} from 'react-redux';
//components
import Nav from '../components/Nav';
import ListVictories from '../components/Default/ListVictories';



export default function Main() {
    const userData = useSelector(state => state.userData.value);
    
    const [view, setView] = useState('default');

    return (
      <div className="w-full h-screen">

        <Head>
            <title>Main</title>
        </Head>

        <Nav />
        {/* Hero */}
        <div className="w-full h-320 md:h-500 flex justify-center items-center mb-8 bg-gray-800"
            style={{backgroundImage: "url('/assets/hero_bg.jpg')", backgroundPosition: 'bottom'}}>
            <div className="p-4 text-center">
                <div className="w-max mb-8">
                    <div className="w-full h-4 md:h-8 relative top-12 md:top-24 bg-blue-800" />
                    <div className="w-full h-4 md:h-8 relative top-16 md:top-32 bg-green-800" />
                    <h1 className="relative text-3xl md:text-6xl text-yellow-200">Victories are meant<br/>to be celebrated</h1>
                </div>
                <button className="p-4 text-3xl rounded shadow text-gray-100 bg-yellow-600 hover:text-yellow-600 hover:bg-gray-200 transition-all ease-in duration-150"
                    onClick={userData ? () => setView('profile')  : () => setViewMain(false) } >Share yours today</button>
            </div>
        </div>
        <ListVictories />
  </div>
    )
}