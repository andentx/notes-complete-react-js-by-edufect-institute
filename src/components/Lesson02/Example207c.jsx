import React, { Component } from "react";

class Example207c extends Component {
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

    sortPlayers = (player1, player2) => {
        const { correctPoints, incorrectPoints } = this.state;
        let p1 =
            player1.correct * correctPoints +
            (player1.answered - player1.correct) * incorrectPoints;
        let p2 =
            player2.correct * correctPoints +
            (player2.answered - player2.correct) * incorrectPoints;
        return p2 - p1;
    };

    totalQuestions = () => {
        const { players } = this.state;
        return players.reduce((total, current) => total + current.answered, 0);
    };

    totalCorrect = () => {
        const { players } = this.state;
        return players.reduce((total, current) => total + current.correct, 0);
    };

    render() {
        const { players, correctPoints, incorrectPoints } = this.state;
        const playersCopy = [...players];
        const sortedPlayers = playersCopy.sort(this.sortPlayers);
        let totalQuestionsAsked = this.totalQuestions();
        let totalCorrectAnswers = this.totalCorrect();
        return (
            <div className='container'>
                <div className='row'>
                    {players.map((player) => {
                        let { name, answered, correct } = player;
                        return (
                            <div className='col-4 border bg-warning'>
                                {name} <br />
                                Answered: {answered} <br />
                                Correct: {correct} <br />
                                Score:
                                {correct * correctPoints + (answered - correct) * incorrectPoints}
                            </div>
                        );
                    })}
                </div>
                <div className='row bg-light'>
                    <div className='col-6 border'>
                        <h4>Leaderboard</h4>
                        1. {sortedPlayers[0].name} <br />
                        2. {sortedPlayers[1].name} <br />
                        3. {sortedPlayers[2].name} <br />
                    </div>
                    <div className='col-6 border'>
                        <h4>Statistics</h4>
                        Total Questions : {totalQuestionsAsked} <br />
                        Correct Answers : {totalCorrectAnswers} <br />
                        Incorrect Answers : {totalQuestionsAsked - totalCorrectAnswers} <br />
                    </div>
                </div>
            </div>
        );
    }
}

export default Example207c;
