import React, { Component } from "react";

class Example204 extends Component {
    state = {
        x: 11,
        y: 22,
    };

    isPrime = (number) => {
        for (let i = 2; i < number; i++) {
            if (number % i === 0) return false;
        }
        return true;
    };

    render() {
        let { x, y } = this.state;
        return (
            <React.Fragment>
                <p>
                    X is {x} Prime is {"" + this.isPrime(x)}
                </p>
                <p>
                    Y is {y} Prime is {"" + this.isPrime(y)}
                </p>
                <p>Sum is {x + y}</p>
                <p>Greater is {x > y ? x : y} </p>
            </React.Fragment>
        );
    }
}

export default Example204;
