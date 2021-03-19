import {useState, useEffect} from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import axios from 'axios';
//components
import Authentication from '../components/Authentication/';
import Main from '../components/Main';
//redux
import {updateUserData, updateIsLoggedIn, updateVictories} from '../actions';
import {useDispatch, useSelector} from 'react-redux';



export default function Home() {
  const dispatch = useDispatch();
  const router = useRouter();

  const isLoggedIn = useSelector(state => state.isLoggedIn);
  const [viewMain, setViewMain] = useState(false);



  const loginEmail = typeof window !== 'undefined' ? localStorage.getItem('loginEmail') : null;
  const loginPassword = typeof window !== 'undefined' ? localStorage.getItem('loginPassword') : null;
  if (loginEmail) {
    const payload = {
      email: loginEmail,
      password: loginPassword
    }
    axios.post('/api/users/login', payload)
    .then(result => {
      const userData = result.data.userData;
      userData.authToken = result.data.authToken;
      dispatch(updateUserData(result.data.userData));
      dispatch(updateIsLoggedIn(true));
    }).catch(err => console.log(err))
  }

  useEffect(() => {
    axios.get('/api/victories/getAll')
        .then(result => {
            let temp = result.data;
            let arr = [];
            temp.forEach(user => {
                user.victories.forEach(victory => {
                    arr.push(victory);
                })
            });
            dispatch(updateVictories(arr));
        }).catch(err => console.log(err));
  }, [])

  return (
    <div>
      <Head>
        <title>Coding Victories</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {isLoggedIn || viewMain ?
        <Main setViewMain={setViewMain} />
      :
        <Authentication setViewMain={setViewMain} />
      }
    </div>
  )
}