# Lesson 03 - Event Handling and setState

[Video Tutorial](https://www.youtube.com/watch?v=Zp7qhRWqAig&list=PLC8jf7P7lrixhadKw5_hc0jjaPPMroUyC) by [Edufect Institute](https://www.youtube.com/channel/UCjg02xP_7LsgEQrcOOwKtrg)

<br>

## Table of Contents

-   **[Event Handling](#eventhandling)**
-   **[Updating the State](#updatingthestate)**
-   **[Steps to Update the State](#stepstoupdatethestate)**
-   **[Practice Examples](#practiceexamples)**
    -   [Example 301](#example301)

<br>

---

## <a name="eventhandling"></a> **Event Handling**

-   Event handlers are functions that execute when a specific action or event occurs
-   In React, event handlers are written in camelCase
-   example: `onClick = {() => this.handleClick(params)}`

<br>

## <a name="updatingthestate"></a> **Updating the State**

-   State is updated with `setState`
-   State is not updated directly
-   Updating the state calls the render method of the Component
-   Updating the state is asynchronous
-   State should be updated in one step instead of multiple steps

<br>

## <a name="stepstoupdatethestate"></a> **Steps to Update the State**

-   Make a copy of the state using spread operator
-   Make all the changes to the copy
-   Use `setState` to update the state using the copy

<br>

## <a name="practiceexamples"></a> **Practice Examples**

<br>

-   ### <a name="example301"></a> Example 3.01

    -   Component that renders information about buttons

    -   The button `text` and `clickCount` stored in state

            state = {
                text: 'No button clicked',
                clickCount: 0,
            };

    -   Function `clickedButton` creates a copy of the state, updates `text` and `clickCount` of the copy, then uses `setState` to update the state

            clickedButton = (buttonText) => {
                let stateCopy = { ...this.state };
                stateCopy.text = buttonText;
                stateCopy.clickCount++;
                this.setState(stateCopy);
            };

    -   Event listeners are added to each button that call the `clickedButton` function with the `buttonText` as a parameter

            <button onClick={() => this.clickedButton('ABC')}>
                ABC
            </button>

    -   Complete Example

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

        [view example](https://andentx.github.io/notes-complete-react-js-by-edufect-institute#301)

<br>
