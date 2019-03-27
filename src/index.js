import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, } from "react-router-dom"
import 'semantic-ui-css/semantic.min.css'
import UserProvider from './providers/UserProvider'
import * as serviceWorker from './serviceWorker';
import FriendProvider from './providers/FriendProvider';

ReactDOM.render(
  <UserProvider>
    <FriendProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </FriendProvider>
  </UserProvider>,
document.getElementById('root'));

serviceWorker.unregister();
