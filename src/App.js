import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import Nav from './components/Nav'


class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Nav />
                    {/* <Route path="/" component={Home}/> */}
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                </div>
            </BrowserRouter>
        )
    }
}


export default App;