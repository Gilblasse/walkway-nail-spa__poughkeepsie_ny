import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.scss'
import { BrowserRouter as Router} from "react-router-dom";
import { Auth0Provider } from '@auth0/auth0-react';
import { RecoilRoot } from 'recoil';

ReactDOM.render(
    <Router>
        <RecoilRoot>
            <App />
        </RecoilRoot>
    </Router>,  
    document.getElementById('root')
);
