import {useState, useEffect} from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import axios from 'axios';



export default function Home() {
  const [userData, setUserData] = useState(null);
  const router = useRouter();

  const userId = router.query.id;

  useEffect(() => {
    const payload = {
      _id: userId
    }
    axios.post('/api/users/getById', payload)
        .then(result => {
            setUserData(result.data[0])
        }).catch(err => console.log(err));
  }, [])

  return (
    <div>
      <Head>
        <title>{userData && userData.username}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="text-center text-4xl">{userData && userData.username}</h1>

    </div>
  )
}
