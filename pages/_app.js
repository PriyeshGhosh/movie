import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import { useEffect } from "react";
import store from "../redux/store";
import { Provider } from "react-redux";
import { UserProvider } from "@auth0/nextjs-auth0";
// import { BrowserRouter as Router } from 'react-router-dom';
// import { Auth0Provider } from "@auth0/auth0-react";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);
  return (
    <Provider store={store}>
      <UserProvider>
        
        <Component {...pageProps} />
        
      </UserProvider>
    </Provider>
  );
}

export default MyApp;
