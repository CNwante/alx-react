import React from 'react';
import ReactDOM from 'react-dom/client';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import { Provider } from 'react-redux';
import { thunk } from "redux-thunk";
import App from './App/App';
import { uiReducer } from './reducers/uiReducer';
import reportWebVitals from './reportWebVitals';

// Create the Redux store with the uiReducer
const store = createStore(
  uiReducer,
  composeWithDevTools(
    applyMiddleware(thunk),
    // other store enhancers if any
  ),
);

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
