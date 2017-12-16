import React, { Component } from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import axios from 'axios'

import Home from './screens/Home'
import Dashboard from './screens/Dashboard'

export default class AppRouter extends Component {
    componentWillMount() {
        axios.defaults.headers.post['Content-Type'] = 'application/json';
        axios.defaults.headers.common['Authorization'] = localStorage.getItem('bccdrophere_token');
    }
    
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/dashboard" component={Dashboard} />
                </Switch>
            </BrowserRouter>
        );
    }
}