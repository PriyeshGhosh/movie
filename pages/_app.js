import '../styles/globals.css'
import "bootstrap/dist/css/bootstrap.css";
import { useEffect } from "react"
import store from '../redux/store';
import { Provider } from "react-redux";
import { Auth0Provider } from '@auth0/auth0-react';


function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  },

 []);
  return (
    <Provider store={store}>
      <Auth0Provider>
      <><Component {...pageProps} /></>
      </Auth0Provider>
      
      
    </Provider>
  );
}

export default MyApp
