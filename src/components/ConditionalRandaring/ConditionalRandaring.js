import React, { Component } from 'react';
import Home from './Home';
import Login from './Login';

export default class ConditionalRandaring extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLogin: true
        };
    }

    render() {
        const { isLogin } = this.state;
        // let element;
        // if (isLogin) {
        //     return <Home></Home>;
        // } else {
        //     return <Login></Login>;
        // }
        // if (isLogin) {
        //     element = <Home></Home>;
        // } else {
        //     element = <Login></Login>;
        // }
        return <div>{isLogin ? <Home /> : <Login />}</div>;
    }
}
