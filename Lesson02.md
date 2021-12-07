# Lesson 02 - React Components and JSX

[Video Tutorial](https://www.youtube.com/watch?v=QLpkmjOcjOo) by [Edufect Institute](https://www.youtube.com/channel/UCjg02xP_7LsgEQrcOOwKtrg)

<br>

## Table of Contents

-   **[Definitions](#definitions)**
    -   [Components](#components)
    -   [React State](#reactstate)
    -   [JSX](#jsx)
    -   [React.Fragment](#reactfragment)
    -   [JSX Expressions](jsxexpressions)
-   **[Creating a Class Component](#creatingclasscomponent)**
    -   [Create a Component](#createacomponent)
    -   [Complete Component example](#completecomponentexample)
    -   [Add Component to page](#addcomponenttopage)
-   **[Practice Examples](#practiceexamples)**
    -   [Example 201](#example201)
    -   [Example 202](#example202)
    -   [Example 203](#example203)
    -   [Example 204](#example204)
    -   [Example 205](#example205)

<br>

---

## <a name="definitions"></a> **Definitions**

-   ### <a name="components"></a> Components

    -   Modular and reusable pieces of code
    -   Components are objects with a render() method that renders React elements into the DOM

    <br>

-   ### <a name="reactstate"></a> React State

    -   Components have a built-in state object
    -   State object is used to store property values that belong to the Component
    -   Changes to state object cause Component to re-render

    <br>

-   ### <a name="jsx"></a> JSX

    -   JSX is a JavaScript syntax extension that allows for HTML-like syntax to be added to JavaScript
    -   React elements are made of JSX

    <br>

-   ### <a name="reactfragment"></a> React.Fragment

    -   A place holder container or parent element
    -   Contains multiple elements without adding extra nodes to the DOM
    -   Shorthand notation is `<>` to start and `</>` to end

    <br>

-   ### <a name="jsxexpressions"></a> JSX Expressions

    -   Added with `{ }` curly braces in JSX
    -   Contains JavaScript

<br>
<br>

## <a name="creatingclasscomponent"></a> **Creating a Class Component**

-   ### <a name="createacomponent"></a> Create a Component

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

-   ### <a name="completecomponentexample"></a> Complete Component Example

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

-   ### <a name="addcomponenttopage"></a> Add Component to page

    -   Import Component
        -   `import NewComponent from './components/NewComponent';`
    -   Add Component
        -   `<NewComponent />`

<br>
<br>

## <a name="practiceexamples"></a> **Practice Examples**

<br>

-   ### <a name="example201"></a> Example 2.01

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

-   ### <a name="example202"></a> Example 2.02

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

-   ### <a name="example203"></a> Example 2.03

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

-   ### <a name="example204"></a> Example 2.04

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
                        <>
                            <p>
                                X is {x} Prime is {"" + this.isPrime(x)}
                            </p>
                            <p>
                                Y is {y} Prime is {"" + this.isPrime(y)}
                            </p>
                            <p>
                                Sum is {x + y}
                            </p>
                            <p>
                                Greater is {x > y ? x : y}
                            </p>
                        </>
                    );
                }
            }

            export default Example204;

        [view example](https://andentx.github.io/notes-introduction-to-react-by-edufect-institute#204)

<br>

-   ### <a name="example205"></a> Example 2.05

    -   Component that renders list of numbers
    -   Numbers contained in state
    -   A copy of the `numbersList` array is made to prevent changes to the original
    -   The numbers in `numberListCopy` are sorted by order and copied into a list with array methods `sort()` and `map()`

            // Example205.jsx

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

        [view example](https://andentx.github.io/notes-introduction-to-react-by-edufect-institute#205)

<br>
