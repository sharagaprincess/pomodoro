import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'
import counterStore from './store/counterStore';

export const Context = createContext(null)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Context.Provider value={{counter: new counterStore()}}>
      <App />
    </Context.Provider>
  </React.StrictMode>
);
