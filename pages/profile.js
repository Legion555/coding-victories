import {useState, useEffect} from 'react';
import Head from 'next/head';
//redux
import { useSelector } from 'react-redux';
//components
import Nav from '../components/Nav';
import ListVictories from "../components/Profile/ListVictories";
import CreateVictory from "../components/Profile/CreateVictory";



export default function profile() {
  const userData = useSelector(state => state.userData.value);

  const [functionView, setFunctionView] = useState('');

  useEffect(() => {
      console.log(userData)
  })

  return (
    <div className="w-full h-full mt-24">

        <Head>
            <title>Profile</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <Nav />

        <div className="flex justify-center items-center">
            <h1 className="mr-4 text-4xl">My victories</h1>
            <button className="p-2 text-2xl text-gray-200 bg-blue-600" onClick={() => setFunctionView('CreateVictory')}>New victory</button>
        </div>
        <ListVictories setFunctionView={setFunctionView} />

        {functionView === 'CreateVictory' &&
            <CreateVictory setFunctionView={setFunctionView} />
        }
        {functionView === 'DeleteVictory' &&
            <DeleteVictory setFunctionView={setFunctionView} />
        }
    </div>
  )
}