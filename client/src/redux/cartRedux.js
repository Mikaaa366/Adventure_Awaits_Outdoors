//Selectors
export const getCartItems = (state) => state.cart.products;

//actions
const createActionName = (actionName) => `app/products/${actionName}`;

const ADD_TO_CART = createActionName('ADD_TO_CART');
const REMOVE_FROM_CART = createActionName('REMOVE_FROM_CART');
const UPDATE_CART_ITEM = createActionName('UPDATE_CART_ITEM');
const CLEAR_CART_ITEMS = createActionName('CLEAR_CART_ITEMS');
//action creators

export const addToCart = (payload) => ({ payload, type: ADD_TO_CART });
  
export const removeFromCart = (payload) => ({ payload, type: REMOVE_FROM_CART });
  
export const updateCartItem = (payload) => ({ payload, type: UPDATE_CART_ITEM });

export const clearCartItems = () => {
  localStorage.removeItem('cart');

  return { type: CLEAR_CART_ITEMS };
};
  
export const getLocalStorage = () => {
  const localStorageData = localStorage.getItem('cart');
  if (localStorageData) {
    return JSON.parse(localStorageData);
  } else {
    return [];
  }
};
  const cartReducer = (statePart = [], action) => {
    switch (action.type) {
      case ADD_TO_CART: {
        if (
          statePart.products.find((product) => product.id === action.payload.id)
        ) {
          return {
            ...statePart,
            products: statePart.products.map((product) =>
              product.id === action.payload.id
                ? {
                    ...product,
                    quantity: product.quantity + action.payload.quantity,
                    userComment: product.userComment,
                  }
                : product,
            ),
          };
        } else {
          return {
            ...statePart,
            products: [
              ...statePart.products,
              {
                ...action.payload,
                quantity: action.payload.quantity,
                userComment: '',
              },
            ],
          };
        }
      }
      case REMOVE_FROM_CART: {
        return {
          ...statePart,
          products: statePart.products.filter(
            (product) => product.id !== action.payload,
          ),
        };
      }
      case UPDATE_CART_ITEM: {
        return {
          ...statePart,
          products: statePart.products.map((product) =>
            product.id === action.payload.id
              ? { ...product, ...action.payload }
              : product,
          ),
        };
      }
      case CLEAR_CART_ITEMS: {
        return {
          products: [],
        };
      }
      default:
        return statePart;
    }
  };
  
  export default cartReducer;