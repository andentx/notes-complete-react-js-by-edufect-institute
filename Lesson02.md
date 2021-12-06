# Lesson 02 - React Components and JSX

[Video Tutorial](https://www.youtube.com/watch?v=QLpkmjOcjOo) by [Edufect Institute](https://www.youtube.com/channel/UCjg02xP_7LsgEQrcOOwKtrg)

<br>

## Table of Contents

-   [Definitions](#definitions)
-   [Creating a Class Component](#creatingclasscomponent)
-   [Practice Examples](#practiceexmaples)

<br>

---

## <a name="definitions"></a> **Definitions**

-   ### Components

    -   Modular and reusable pieces of code
    -   Components are objects with a render() method that renders React elements into the DOM

    <br>

-   ### React State

    -   Components have a built-in state object
    -   State object is used to store property values that belong to the Component
    -   Changes to state object cause Component to re-render

    <br>

-   ### JSX

    -   JSX is a JavaScript syntax extension that allows for HTML-like syntax to be added to JavaScript
    -   React elements are made of JSX

    <br>

-   ### React.Fragment

    -   A place holder container or parent element
    -   Contains multiple elements without adding extra nodes to the DOM

    <br>

-   ### JSX Expressions

    -   Added with `{ }` curly braces in JSX
    -   Contains JavaScript

<br>
<br>

## <a name="creatingclasscomponent"></a> **Creating a Class Component**

-   ### Create a Component

    -   Create new file
        -   `.jsx` in `src/components/`
    -   Import React
        -   `import React, { Component } from "react"`
    -   Define class component
        -   `class NewComponent extends Component { }`
    -   Define state object inside Component
        -   `state = {}`
    -   Add JSX to render function inside Component
        -   `render() { return(<Elements/>) }`
    -   Export Component
        -   `export default NewComponent`

<br>

-   ### Complete Component Example

        // NewComponent.jsx

        import React, { Component } from 'react';

        class NewComponent extends Component {

            state = {};

            render() {
                return (
                    <Element>
                    </Element>
                )
            }
        }

        export default NewComponent;

<br>

-   ### Add Component to page

    -   Import Component
        -   `import NewComponent from './components/NewComponent';`
    -   Add Component
        -   `<NewComponent />`

<br>
<br>

## <a name="practiceexmaples"></a> **Practice Examples**

<br>

-   ### Example 2.01

    -   Component that renders Hello World

            // Example201.jsx

            import React, { Component } from "react";

            class Example201 extends Component {
                state = {};

                render() {
                    return <h1>Hello World!</h1>;
                }
            }

            export default Example201;

        [view example](http://localhost:3000/notes-introduction-to-react-by-edufect-institute#201)

<br>

-   ### Example 2.02

    -   Component that renders React definition
    -   Multiple elements contained in a React Fragment

            // Example202.jsx

            import React, { Component } from "react";

            class Example202 extends Component {
                state = {};

                render() {
                    return (
                        <React.Fragment>
                            <h3>What is React?</h3>
                            <p>
                                React is a JavaScript library for building User Interfaces
                            </p>
                        </React.Fragment>
                    );
                }
            }

            export default Example202;

        [view example](https://andentx.github.io/notes-introduction-to-react-by-edufect-institute#202)

<br>

-   ### Example 2.03

    -   Component that renders strings
    -   Strings contained in state
    -   Function returns a JSX expression that renders strings

            // Example203.jsx

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
                        <>
                    );
                };

                render() {
                    return (
                        <>
                            {this.showStrings()}
                        </>
                    );
                }

            }

            export default Example203;

        [view example](https://andentx.github.io/notes-introduction-to-react-by-edufect-institute#203)

<br>

-   ### Example 2.04

    -   Component that renders information about numbers
    -   Numbers contained in state
    -   JSX expression passes numbers in state to a function that checks if they are prime
    -   JSX expressions are used to check to see which number in state is greater

            // Example204.jsx

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

        [view example](https://andentx.github.io/notes-introduction-to-react-by-edufect-institute#204)

<br>