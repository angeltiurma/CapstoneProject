import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Abouts from './components/pages/Abouts';
import SignUp from './components/pages/SignUp';

function App() {
    return (
    <>
        <Router>
        <Navbar />
        <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/services' component={Services} />
            <Route path='/abouts' component={Abouts} />
            <Route path='/sign-up' component={SignUp} />
        </Switch>
        </Router>
    </>
    );
}

export default App;
