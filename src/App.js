import React, { Component } from 'react';
// import { BrowserRouter, Route } from 'react-router-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import About from './components/About'
import Home from './components/Home'
import Blog from './components/Blog'
import Rout from './components/Rout'

import Nav from './components/Nav';


class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Nav />
                    <Route  exact path="/" component={Home} />
                    <Route  path="/about" component={About} />
                    <Route  path="/blog" component={Blog} />
                    <Route path="/:test_params" component={Rout} />
                </div>
            </BrowserRouter>
        )
    }
}


export default App;