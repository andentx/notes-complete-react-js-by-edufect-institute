# Notes - Introduction to React by Edufect Institute

These my notes on the fundamentals of React. They are part of the [Introduction to React by Edufect Institute](https://www.youtube.com/playlist?list=PLC8jf7P7lrixhadKw5_hc0jjaPPMroUyC) lessons.

<br>

[View Example Projects](https://andentx.github.io/notes-introduction-to-react-by-edufect-institute/)

<br>

## Table of Contents

-   [Lesson #1 - Introduction to React JS](#lesson1)

-   [Lesson #2 - React Components and JSX](#lesson2)

<br>

---

## <a name="lesson1"></a>Lesson #1 - Introduction to React JS

[Video Tutorial](https://www.youtube.com/watch?v=fTvOQuRNonE) by [Edufect Institute](https://www.youtube.com/channel/UCjg02xP_7LsgEQrcOOwKtrg)

<br>

### **The Basics of React**

-   ### What is React?

    -   A JavaScript library for building user interfaces

-   ### React and Virtual Dom
    -   The Virtual DOM is a copy of the actual DOM objects
    -   Updates are made to the Virtual DOM to improve performance
    -   React maintains two Virtual DOM's, the pre-update and post-update DOM
    -   React compares the pre and post-update DOM's, then makes changes to the actual DOM

### **Setting Up React**

-   ### Install Node.js

    -   A JavaScript runtime environment
    -   Install [Node.js](https://nodejs.org/en/download/)
    -   Includes NPM, a Node.js package manager

-   ### Create React App

    -   A tool that sets up a boilerplate React app
    -   Run with `npx create-react-app <my-app>`

-   ### Start Developing

    -   Run `npm start` in project directory
    -   Development server starts at http://localhost:3000

### **Setting up Bootstrap**

-   ### Install Bootstrap
    -   run `npm install bootstrap`
    ### Import Bootstrap
    -   add `import 'bootstrap/dist/css/bootstrap.css';`

### **Start Developing**

-   Ready to start making changes and building with React

<br>
<br>

## <a name="lesson2"></a> Lesson #2 - React Components and JSX

[Video Tutorial](https://www.youtube.com/watch?v=QLpkmjOcjOo) by [Edufect Institute](https://www.youtube.com/channel/UCjg02xP_7LsgEQrcOOwKtrg)

<br>

### **Definitions**

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

### **Creating a Class Component**

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

### **Practice Examples**

<br>

-   ### Example 2.01

    -   Component that renders Hello World

             // Example201.jsx

             import React, { Component } from "react";

             class HelloWorld extends Component {
                 state = {};

                 render() {
                     return <h1>Hello World!</h1>;
                 }
             }

             export default HelloWorld;

        [view example](http://localhost:3000/notes-introduction-to-react-by-edufect-institute#201)

<br>

-   ### Example 2.02

    -   Component that renders React definition
    -   Multiple elements contained in a React Fragment

              // Example202.jsx

              import React, { Component } from "react";

              class ReactDefinition extends Component {
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

              export default ReactDefinition;

        [view example](https://andentx.github.io/notes-introduction-to-react-by-edufect-institute#202)

<br>

-   ### Example 2.03

    -   Component that renders strings
    -   Strings contained in state
    -   Function returns a JSX expression that renders strings

            // Example203.jsx

            import React, { Component } from "react";

            class ListOfStrings extends Component {
                state = {
                    s1: "React",
                    s2: "JavaScript",
                    s3: "Node.js",
                };

                showStrings = () => {
                    let { s1, s2, s3 } = this.state;
                    return (
                        <React.Fragment>
                            <p>{s1}</p>
                            <p>{s2}</p>
                            <p>{s3}</p>
                        </React.Fragment>
                    );
                };

                render() {
                    return <React.Fragment>{this.showStrings()}</React.Fragment>;
                }

            }

            export default ListOfStrings;

        [view example](https://andentx.github.io/notes-introduction-to-react-by-edufect-institute#203)

<br>

-   ### Example 2.04

    -   Component that renders information about numbers
    -   Numbers contained in state
    -   JSX expression passes numbers in state to a function that checks if they are prime
    -   JSX expressions are used to check to see which number in state is greater

              import React, { Component } from "react";

              class NumberInformation extends Component {
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

              export default NumberInformation;

        [view example](https://andentx.github.io/notes-introduction-to-react-by-edufect-institute#204)

<br>
