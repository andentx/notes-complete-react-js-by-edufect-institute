# Lesson 03 - Event Handling and setState

[Video Tutorial](https://www.youtube.com/watch?v=Zp7qhRWqAig&list=PLC8jf7P7lrixhadKw5_hc0jjaPPMroUyC) by [Edufect Institute](https://www.youtube.com/channel/UCjg02xP_7LsgEQrcOOwKtrg)

<br>

## Table of Contents

-   **[Event Handling](#eventhandling)**
-   **[Updating the State](#updatingthestate)**
-   **[Steps to Update the State](#stepstoupdatethestate)**
-   **[Practice Examples](#practiceexamples)**
    -   [Example 301](#example301)
    -   [Example 302](#example302)
    -   [Example 303](#example303)
    -   [Example 304](#example304)

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

        let stateCopy = { ...this.state };

-   Make all changes to the copy

        stateCopy.property = change;

-   Use `setState` to update the state using the copy

        this.setState(stateCopy);

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

    <br>

    -   Function `clickedButton` creates a copy of the state, updates `text` and `clickCount` of the copy, then uses `setState` to update the state

            clickedButton = (buttonText) => {
                let stateCopy = { ...this.state };
                stateCopy.text = buttonText;
                stateCopy.clickCount++;
                this.setState(stateCopy);
            };

    <br>

    -   Event listeners are added to each button that call the `clickedButton` function with the `buttonText` as a parameter

            <button onClick={() => this.clickedButton('ABC')}>
                ABC
            </button>

    <br>

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

-   ### <a name="example302"></a> Example 3.02

    -   Component that renders contacts and information

            import React, { Component } from 'react';

            class Example302 extends Component {
                state = {
                    contacts: [
                        {
                            name: 'Jack',
                            age: 25,
                            skills: 'JavaScript, React',
                            email: 'jack@email.com',
                            phone: '987-555-0123',
                        },
                        {
                            name: 'Anna',
                            age: 29,
                            skills: 'Node.js, MongoDB',
                            email: 'anna@email.com',
                            phone: '987-555-1234',
                        },
                        {
                            name: 'Steve',
                            age: 31,
                            skills: 'Android App Development',
                            email: 'steve@email.com',
                            phone: '987-555-2345',
                        },
                    ],
                    contactIndex: -1,
                    showContactDetails: false,
                };

                setIndex = (index) => {
                    let stateCopy = { ...this.state };
                    stateCopy.contactIndex = index;
                    stateCopy.showContactDetails = false;
                    this.setState(stateCopy);
                };

                showPerson = () => {
                    const { contacts, contactIndex, showContactDetails } = this.state;
                    return (
                        <>
                            Name: {contacts[contactIndex].name} <br />
                            Age: {contacts[contactIndex].age} <br />
                            Skills: {contacts[contactIndex].skills} <br />
                            <button
                                className='btn btn-primary m-2'
                                onClick={() => this.showContactDetails()}
                            >
                                Contact Info
                            </button>
                            {showContactDetails ? (
                                <>
                                    Email: {contacts[contactIndex].email} <br />
                                    Phone: {contacts[contactIndex].phone} <br />
                                </>
                            ) : (
                                ''
                            )}
                        </>
                    );
                };

                showContactDetails = () => {
                    let stateCopy = { ...this.state };
                    stateCopy.showContactDetails = true;
                    this.setState(stateCopy);
                };

                render() {
                    const { contacts, contactIndex } = this.state;
                    return (
                        <>
                            {contacts.map((contact, index) => (
                                <button
                                    className='btn btn-primary m-2'
                                    onClick={() => this.setIndex(index)}
                                >
                                    {contact.name}
                                </button>
                            ))}
                            <br />
                            {contactIndex >= 0 ? this.showPerson() : ''}
                        </>
                    );
                }
            }

            export default Example302;

        [view example](https://andentx.github.io/notes-complete-react-js-by-edufect-institute#302)

<br>

-   ### <a name="example303"></a> Example 3.03

    -   Component that renders a lists of names that can be moved to to different lists using `setState`

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

        [view example](https://andentx.github.io/notes-complete-react-js-by-edufect-institute#303)

<br>

-   ### <a name="example304"></a> Example 3.04

    -   Component that renders information about products and a cart that keeps track of total quantity

            import React, { Component } from 'react';

            class Example304 extends Component {
                state = {
                    products: [
                        { name: 'Chips', price: 100 },
                        { name: 'Trail Mix', price: 150 },
                        { name: 'Cookies', price: 200 },
                        { name: 'Chocolate', price: 75 },
                        { name: 'Almonds', price: 175 },
                    ],
                    cart: [],
                };

                addToCart = (index) => {
                    let stateCopy = { ...this.state };
                    let product = stateCopy.products[index];
                    let x1 = stateCopy.cart.find((c1) => c1.name === product.name);
                    x1 ? (x1.qty = x1.qty + 1) : stateCopy.cart.push({ ...product, qty: 1 });
                    this.setState(stateCopy);
                };

                showCart = () => {
                    const { cart } = this.state;
                    if (cart.length === 0) return <h4>Cart is Empty</h4>;
                    return (
                        <ul>
                            {cart.map((item) => {
                                let { name, price, qty } = item;
                                return (
                                    <li>
                                        {name}, price={price}, qty={qty}
                                    </li>
                                );
                            })}
                        </ul>
                    );
                };
                showProducts = () => {
                    const { products } = this.state;
                    return (
                        <div className='d-flex flex-column'>
                            <div className='bg-dark text-white d-flex'>
                                <div className='m-1'>Name</div>
                                <div className='m-1'>Price</div>
                                <div className='m-1'></div>
                            </div>
                            {products.map((product, index) => {
                                let { name, price } = product;
                                return (
                                    <div className='border d-flex justify-content-between'>
                                        <div className='m-1'>{name}</div>
                                        <div className='m-1'>{price}</div>
                                        <div className='m-1'></div>
                                        <button
                                            className='btn btn-primary btn-sm'
                                            onClick={() => this.addToCart(index)}
                                        >
                                            Add
                                        </button>
                                    </div>
                                );
                            })}
                        </div>
                    );
                };

                render() {
                    return (
                        <>
                            {this.showCart()}
                            {this.showProducts()}
                        </>
                    );
                }
            }

            export default Example304;

        [view example](https://andentx.github.io/notes-complete-react-js-by-edufect-institute#304)

<br>
