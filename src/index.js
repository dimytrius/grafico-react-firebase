import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import firebase from 'firebase';
var config = {
    apiKey: "AIzaSyB61K5eHmE4KFDdLvmCYsYG1rFoMpv3cNU",
    authDomain: "teste-536d9.firebaseapp.com",
    databaseURL: "https://teste-536d9.firebaseio.com",
    projectId: "teste-536d9",
    storageBucket: "teste-536d9.appspot.com",
    messagingSenderId: "416447399687"
};
firebase.initializeApp(config);
ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();
