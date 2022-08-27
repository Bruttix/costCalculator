import './App.css';
import axios from 'axios';
import {useEffect,useReducer} from 'react';
import { cartReducer } from './reducers/cartReducer';
import Products from './components/Products';
import Cart from './components/Cart';

function App() {
  // useReducer > useState because useReducer is much more scalable and adds logic in one singular place for handling lookup (the reducers folder)
  const [ state , dispatch ] = useReducer(cartReducer,{
    products: [],
    cart: [],
  }); 
  console.log(state);
  const fetchProducts = async () => {
    const { data } = await axios.get('https://dummyjson.com/products');
    dispatch({
      type: "ADD_PRODUCTS",
      payload: data.products,
    });
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  
  return (
    <div style={{display: "flex"}}>
      <Products state={state} dispatch={dispatch} />
      <Cart state={state} dispatch={dispatch} />
    </div>
  );
};

export default App;
