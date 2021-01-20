export const addItemToCart = (cartItems, cartItemToAdd) => {

    //find method will return undefined if item is not present in cartItems
    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id);

    
    //If existing item, then we want to increase the quantity of the product selected
    if(existingCartItem){
        return cartItems.map(cartItem =>
            cartItem.id === cartItemToAdd.id
            ? {...cartItem, quantity : cartItem.quantity +1}
            : cartItem
        );
    }

    //if new product selected, then adding that in the cart with quantity property field
    return [...cartItems, {...cartItemToAdd, quantity : 1}];
};