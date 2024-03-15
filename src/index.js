import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './Redux/Store';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <div>

    <Auth0Provider
      domain="dev-880h0ert24zx4m0f.us.auth0.com"
      clientId="4HUAV0g1ANdYo11rVlSDRukhJ5RJj3Ct"
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
    >
      <Provider store={store}>
        <BrowserRouter>
          <App />
          <ToastContainer />
        </BrowserRouter>
      </Provider>
    </Auth0Provider>,

  </div>
);
