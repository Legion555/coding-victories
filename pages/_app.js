import '../styles/globals.css'
import "tailwindcss/tailwind.css";
//Redux
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import rootReducer from '../reducers'

const store = createStore(
  rootReducer
)

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp