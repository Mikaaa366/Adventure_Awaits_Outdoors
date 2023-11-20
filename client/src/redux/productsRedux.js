import { API_URL } from '../config';
import initialState from './initialState';
import axios from 'axios';


//selectors
export const getAll = ({ products }) => products.data;
export const getById = ({ products }, productId) => products.data.find((product) => product.id === productId);

//actions
const createActionName = (actionName) => `app/products/${actionName}`;
const UPDATE_PRODUCTS = createActionName('UPDATE_PRODUCTS');

//action creators
export const updateProducts = (payload) => ({ type: UPDATE_PRODUCTS, payload });

export const getProductsRequest = () => {
    return (dispatch) => {
        axios
            .get(`${API_URL}/products`)
            .then((response) => {
                dispatch(updateProducts(response.data));
            })
            .catch((error) => {
                console.error('Błąd pobierania danych z API: ', error);
            });
    };
};

const productsReducer = (statePart = initialState, action) => {
    switch (action.type) {
        case UPDATE_PRODUCTS:
            return {
                ...statePart,
                data: [...action.payload]
            };
        default:
            return statePart;
    }
};

export default productsReducer;