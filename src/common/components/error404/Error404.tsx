import React from 'react'
import error404 from '../../../assets/images/error404.png'

export const Error404 = () => {
  return (
    <div style={{display: 'flex'}}>
      <img src={error404} alt="404" style={{width: '65%', margin: '0 auto'}}/>
    </div>
  )
}
