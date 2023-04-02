import React from 'react';
import './App.css';
import {Header} from "../features/header/Header";
import {Pages} from "../common/components/pages/Pages";
import {useCart} from "../features/cart/hooks/useCart";
import {Footer} from "../common/components/footer/Footer";

function App() {
    const {goodsFromLS, saveGoods, deleteGoods, clearCart} = useCart()

    return (
        <div>
            <Header/>
            <Pages goodsFromLS={goodsFromLS} saveGoods={saveGoods} deleteGoods={deleteGoods} clearCart={clearCart}/>
            <Footer/>
        </div>
    )
}

export default App;
