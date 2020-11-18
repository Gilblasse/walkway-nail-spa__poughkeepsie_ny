import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.scss'
import { BrowserRouter as Router} from "react-router-dom";
import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.render(
    <Router>
        <Auth0Provider
            domain={process.env.REACT_APP_AUTH0_DOMAIN}
            clientId={process.env.REACT_APP_AUTH0_CLIENT_ID}
            redirectUri={window.location.origin}
        >
            <App />
        </Auth0Provider>
    </Router>,  
    document.getElementById('root')
);
