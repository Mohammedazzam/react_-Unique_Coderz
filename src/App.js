import React, { Component } from 'react';
// import { BrowserRouter, Route } from 'react-router-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import About from './components/About'
import Home from './components/Home'
import Blog from './components/Blog'
import Rout from './components/Rout'
import Col from './components/Col'
import theImage from './ch.jpg'

import Nav from './components/Nav';


class App extends Component {
    render() {
        return (
            <div>
                <img src={theImage} className="img" />
            </div>
        )
    }
}


export default App;