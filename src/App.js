import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './style/App.sass';

import isDev from './CheckIfDev.ts';
import DevPage from './views/DevPage';
import HomePage from './views/HomePage';
import AppBar from './components/AppBar';

function App() {
    return (
        <div>
            <Router>
                <AppBar />
                <Switch>
                    <Route path="/home" component={HomePage} />
                    {isDev() && <Route exact path="/dev" component={DevPage} /> }
                </Switch>
            </Router>

        </div>
    );
}

export default App;