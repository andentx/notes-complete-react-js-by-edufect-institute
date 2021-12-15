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
