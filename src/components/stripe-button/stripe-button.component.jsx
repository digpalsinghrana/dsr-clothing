import React from 'react';
import StripeCheckout from 'react-stripe-checkout';


const StripeCheckoutButton = ({price}) => {

    const priceForStrike = price * 100;
    const publishableKey = 'pk_test_51IFepzBuOJyfrfukXON0IRZjiGUBD8tAz5WVgzPS5kfo07NboOgEsBe5rtT4rges6iKCYN23EUvTbU5QOo2MnbKc00K1pvrHVT';

   const onToken = token => {
       console.log(token);
       alert('Payment Successful');
   };
    
    return (
        <StripeCheckout 
            label= 'Pay Now'
            name= 'DSR Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your Total is $${price}`}
            amount={priceForStrike}
            panelLabel= 'Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;