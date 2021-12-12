import React, { Component } from 'react';

class Example301 extends Component {
    state = {
        text: 'No button clicked',
        clickCount: 0,
    };

    clickedButton = (buttonText) => {
        let stateCopy = { ...this.state };
        stateCopy.text = buttonText;
        stateCopy.clickCount++;
        this.setState(stateCopy);
    };

    render() {
        const { text, clickCount } = this.state;
        return (
            <>
                Text: {text}
                <br />
                Count: {clickCount}
                <button className='btn btn-primary m-2' onClick={() => this.clickedButton('ABC')}>
                    ABC
                </button>
                <button className='btn btn-primary m-2' onClick={() => this.clickedButton('123')}>
                    123
                </button>
            </>
        );
    }
}

export default Example301;
