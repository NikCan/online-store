import React from 'react';
import './App.css';
import {Header} from "../common/components/header/Header";
import {Pages} from "../common/components/pages/Pages";
import {NotificationBar} from "../common/components/notification-bar/NotificationBar";
import {InitialLoader} from "../common/components/initial-loader/InitialLoader";
import {useLocalStorage} from "../hooks/useLocalStorage";

function App() {
  const {goodsFromLS, saveGoods} = useLocalStorage()

  if (false) return <InitialLoader/>
  return (
    <div>
      <Header goodsFromLS={goodsFromLS}/>
      <Pages saveGoods={saveGoods}/>
      <NotificationBar/>
    </div>
  )
}

export default App;
