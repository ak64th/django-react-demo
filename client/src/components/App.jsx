import './App.scss';
import React from 'react';
import {hot} from 'react-hot-loader';
import {Route} from 'react-router-dom';

import AppNav from './AppNav.jsx';
import Home from './Home.jsx';
import About from './About.jsx';
import Articles from './Articles.jsx';

class App extends React.Component {
    render() {
        return (
            <div>
                <AppNav/>
                <Route exact path="/" component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/articles" component={Articles}/>
            </div>
        );
    }
}

export default hot(module)(App);
