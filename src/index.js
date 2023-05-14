import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/App.css'
import './styles/reset.css'
import UserStore from "./store/UserStore";
import CategoryStore from "./store/CategoryStore";
import ProductStore from "./store/ProductStore";
import BasketStore from "./store/BasketStore";
import ConstructorStore from "./store/ConstructorStore";


export const Context = createContext(null)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Context.Provider value={{
        user: new UserStore(),
        category: new CategoryStore(),
        product: new ProductStore(),
        basket:new BasketStore(),
        constructor:new ConstructorStore()
    }}>
        <App/>
    </Context.Provider>
);


