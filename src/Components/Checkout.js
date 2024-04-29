import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import Axios from 'axios';
import { Alert } from 'react-bootstrap';

class StripeCheckOutButton extends React.Component {
    state = {
        msg: '',
        error: ''
    };

    stripePrice = this.props.price * 100;
    publishKey = 'pk_test_PtNCbQeVEuvs8pyEy61myvvY00WbvEx2F7';

    onToken = token => {
        console.log(token);
        Axios({
            method: 'post',
            url: 'http://127.0.0.1:8000/product/Payment/',
            data: {
                source: token.id,
                amount: this.stripePrice
            },
            headers: {
                Authorization: "token a04f0d4412b4f576082792c51e84904b2a1a953c"
            }
        })
            .then(res => {
                console.log(res);
                if (res.data.msg) {
                    this.setState({ msg: res.data.msg });
                }
            })
            .catch(err => {
                console.log(err.response.data);
                if (err.response.data.message) {
                    this.setState({ error: err.response.data.message });
                }
            });
    };

    checkResponse = () => {
        if (this.state.msg) {
            return <Alert variant="success">Your payment succeeded</Alert>;
        }
        if (this.state.error) {
            return <Alert variant="danger">{this.state.error}</Alert>;
        }
    };

    render() {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                <StripeCheckout
                    label="Checkout"
                    name="AllStore"
                    shippingAddress
                    billingAddress
                    amount={this.stripePrice}
                    description={`Your total is ${this.props.price}`}
                    image="https://stripe.com/img/documentation/checkout/marketplace.png"
                    token={this.onToken}
                    stripeKey={this.publishKey}
                />
                {this.checkResponse()}
            </div>
        );
    }
}

export default StripeCheckOutButton;