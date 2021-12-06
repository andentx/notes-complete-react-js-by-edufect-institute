import React, { Component } from "react";

class Example203 extends Component {
    state = {
        string1: "React",
        string2: "JavaScript",
        string3: "Node.js",
    };

    showStrings = () => {
        let { string1, string2, string3 } = this.state;
        return (
            <>
                <p>{string1}</p>
                <p>{string2}</p>
                <p>{string3}</p>
            </>
        );
    };

    render() {
        return <>{this.showStrings()}</>;
    }
}

export default Example203;
