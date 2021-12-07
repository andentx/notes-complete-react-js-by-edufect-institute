import React, { Component } from "react";

class Example205 extends Component {
    state = {
        numbersList: [10, 7, 18, 12, 25],
    };

    render() {
        let { numbersList } = this.state;
        let numberListCopy = [...numbersList];
        numberListCopy.sort((n1, n2) => n1 - n2);
        return (
            <ul>
                {numberListCopy.map((n1) => (
                    <li>{n1}</li>
                ))}
            </ul>
        );
    }
}

export default Example205;
