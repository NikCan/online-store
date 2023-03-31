import React from 'react';
import './App.css';
import {Header} from "../features/header/Header";
import {Pages} from "../common/components/pages/Pages";
import {useCart} from "../features/cart/hooks/useCart";

function App() {
    const {goodsFromLS, saveGoods, deleteGoods} = useCart()

    return (
        <div>
            <Header/>
            <Pages goodsFromLS={goodsFromLS} saveGoods={saveGoods} deleteGoods={deleteGoods}/>
        </div>
    )
}

export default App;
