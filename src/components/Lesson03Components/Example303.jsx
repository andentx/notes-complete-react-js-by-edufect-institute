import React, { Component } from 'react';

class Example303 extends Component {
    state = {
        list1: ['Bob', 'Tim', 'Julia', 'Steve', 'Edward', 'George', 'Kathy'],
        list2: [],
    };

    list1Click = (index) => {
        let stateCopy = { ...this.state };
        let name = stateCopy.list1.splice(index, 1);
        stateCopy.list2.push(name);
        this.setState(stateCopy);
    };

    list2Click = (index) => {
        let stateCopy = { ...this.state };
        let name = stateCopy.list2.splice(index, 1);
        stateCopy.list1.push(name);
        this.setState(stateCopy);
    };

    render() {
        const { list1, list2 } = this.state;
        return (
            <div className='d-flex h-75 w-75'>
                <div className='border w-50'>
                    <h4>List 1</h4>
                    {list1.map((listItem, index) => (
                        <span onClick={() => this.list1Click(index)}>
                            {listItem}
                            <br />
                        </span>
                    ))}
                </div>
                <div className='border w-50'>
                    <h4>List 2</h4>
                    {list2.map((listItem, index) => (
                        <>
                            {listItem}
                            <button
                                className='btn btn-danger btn-sm'
                                onClick={() => this.list2Click(index)}
                            >
                                X
                            </button>
                            <br />
                        </>
                    ))}
                </div>
            </div>
        );
    }
}

export default Example303;
