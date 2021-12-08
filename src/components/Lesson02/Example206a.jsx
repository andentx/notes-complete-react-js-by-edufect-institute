import React, { Component } from "react";

class Example206a extends Component {
    state = {
        students: [
            { name: "William", mathScore: 34, englishScore: 36 },
            { name: "George", mathScore: 24, englishScore: 31 },
            { name: "Katherine", mathScore: 36, englishScore: 41 },
            { name: "Sophia", mathScore: 45, englishScore: 37 },
            { name: "Timothy", mathScore: 22, englishScore: 19 },
        ],
    };

    render() {
        let { students } = this.state;

        return (
            <div className='container'>
                <div className='row border bg-dark text-white'>
                    <div className='col-6 border'>Name</div>
                    <div className='col-3 border'>Math</div>
                    <div className='col-3 border'>English</div>
                </div>

                {students.map((student) => {
                    let { name, mathScore, englishScore } = student;

                    return (
                        <div className={"row border"}>
                            <div className='col-6 border'>{name}</div>
                            <div className='col-3 border'>{mathScore}</div>
                            <div className='col-3 border'>{englishScore}</div>
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default Example206a;
