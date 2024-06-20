import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
//balizaredux
import { Provider } from 'react-redux';

import { configureClient } from './api/client';
import storage from './utils/storage';
import './index.css';
import App from './components/app';
//xx import { AuthProvider } from './components/auth/context';

//balizaredux
import configureStore from './store';
//xx const store = configureStore();


const accessToken = storage.get('auth');
configureClient({ accessToken });

const store = configureStore({ auth: !!accessToken });

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
);
