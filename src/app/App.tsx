import React from 'react'
import './App.css'
import {Header} from 'features'
import {Footer, Pages} from 'common/components'
import {useCart} from 'features/cart/hooks/useCart'

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

export default App
