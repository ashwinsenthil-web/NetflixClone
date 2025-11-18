import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './app/Store.jsx'; // ✅ make sure path & filename match exactly
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}> {/* ✅ Wrap the entire app */}
      <App />
    </Provider>
  </React.StrictMode>
);
