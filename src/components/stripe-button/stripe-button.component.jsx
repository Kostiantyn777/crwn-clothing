import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  //Converting price to cents
  const priceForStripe = price * 100;

  const publishableKey =
    "pk_test_51Ib07nGRwBTeDzvdupgfGcJLKVNxsEi6eKNx8KrtLzrsFWulO9T7HKKtWHUzjV01WIn5kL8pWXS9EainTkt591Jv00iS06VTxq";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
