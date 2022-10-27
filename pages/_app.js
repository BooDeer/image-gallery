import '../styles/globals.css'
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from "react-redux";
import configureStore from '../store/configureStore';

function MyApp({ Component, pageProps }) {
  return <Provider store={configureStore}>
	 <Component {...pageProps} />
  </Provider>
}

export default MyApp
