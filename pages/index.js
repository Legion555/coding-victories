import Head from 'next/head'
//components
import Authentication from '../components/Authentication'
import Main from '../components/Main'
//redux
import {useSelector} from 'react-redux'

export default function Home() {
  const isLoggedIn = useSelector(state => state.isLoggedIn);

  return (
    <div>
      <Head>
        <title>Coding Victories</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {isLoggedIn ?
        <Main />
      :
        <Authentication />
      }
      
      
    </div>
  )
}
