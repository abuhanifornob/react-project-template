import React, { Component } from 'react';

export default class State extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 5
        };
    }

    handleIncrement = () => {
        this.setState({
            count: this.state.count + 1
        });
    };
    handleDecrement = () => {
        this.setState({
            count: this.state.count - 1
        });
    };
    render() {
        const { count } = this.state;
        return (
            <div>
                <h2 className="text-2xl p-3">Count:{count} </h2>
                <button onClick={this.handleIncrement} className="p-7 text-3xl" disabled={count === 10 ? true : false}>
                    +
                </button>
                <button onClick={this.handleDecrement} className="p-7 text-3xl" disabled={count === 0 ? true : false}>
                    -
                </button>
            </div>
        );
    }
}
