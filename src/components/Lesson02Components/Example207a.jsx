import React, { Component } from "react";

class Example207a extends Component {
    state = {
        players: [
            { name: "Jack", answered: 10, correct: 8 },
            { name: "Steve", answered: 8, correct: 7 },
            { name: "William", answered: 12, correct: 9 },
            { name: "Kathy", answered: 11, correct: 10 },
            { name: "Edward", answered: 9, correct: 6 },
            { name: "Mary", answered: 13, correct: 8 },
        ],
        correctPoints: 2,
        incorrectPoints: -1,
    };

    render() {
        const { players, correctPoints, incorrectPoints } = this.state;
        return (
            <div className='container'>
                <div className='row bg-success text-white'>
                    <div className='col-3 border'>Name</div>
                    <div className='col-3 border'>Answered</div>
                    <div className='col-3 border'>Correct</div>
                    <div className='col-3 border'>Score</div>
                </div>
                {players.map((player) => {
                    let { name, answered, correct } = player;
                    return (
                        <div className='row'>
                            <div className='col-3 border'>{name}</div>
                            <div className='col-3 border'>{answered}</div>
                            <div className='col-3 border'>{correct}</div>
                            <div className='col-3 border'>
                                {correct * correctPoints + (answered - correct) * incorrectPoints}
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default Example207a;
