import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import firebase from 'firebase';

let config = {
  apiKey: "AIzaSyCwd5liZxKfwKmb3J_8fJaPXZADy7wgK-M",
  authDomain: "react-todo-firebase--hooks.firebaseapp.com",
  projectId: "react-todo-firebase--hooks",
};

firebase.initializeApp(config);
export const db = firebase.firestore();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
