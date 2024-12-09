import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './App/App';
import { uiReducer } from './reducers/uiReducer';
import reportWebVitals from './reportWebVitals';

// Create the Redux store with the uiReducer
const store = createStore(uiReducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// Measuring performance
reportWebVitals();
