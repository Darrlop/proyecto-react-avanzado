import './index.css';
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/app';
import storage from './utils/storage';
import { configureClient } from './api/client';
//import { BrowserRouter as Router } from 'react-router-dom';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from './store';
import ErrorBoundary from './components/errors/ErrorBoundary';


const accessToken = storage.get('auth');
configureClient({ accessToken });

const router = createBrowserRouter([{ path: '*', element: <App /> }]);
const store = configureStore({ auth: !!accessToken }, { router });

const root = createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <ErrorBoundary>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </ErrorBoundary>
  // </React.StrictMode>,
);
