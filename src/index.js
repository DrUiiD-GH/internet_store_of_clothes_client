import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/App.css'
import './styles/reset.css'
import UserStore from "./store/UserStore";
import CategoryStore from "./store/CategoryStore";
import ProductStore from "./store/ProductStore";


export const Context = createContext(null)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Context.Provider value={{
        user: new UserStore(),
        category: new CategoryStore(),
        product: new ProductStore()
    }}>
        <App/>
    </Context.Provider>
);


