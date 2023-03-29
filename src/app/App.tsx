import React from 'react';
import './App.css';
import {Header} from "../common/components/header/Header";
import {Pages} from "../common/components/pages/Pages";
import {NotificationBar} from "../common/components/notification-bar/NotificationBar";
import {InitialLoader} from "../common/components/initial-loader/InitialLoader";
import {useCart} from "../hooks/useCart";

function App() {
  const {goodsFromLS, saveGoods} = useCart()

  if (false) return <InitialLoader/>
  return (
    <div>
      <Header/>
      <Pages goodsFromLS={goodsFromLS} saveGoods={saveGoods}/>
      <NotificationBar/>
    </div>
  )
}

export default App;
