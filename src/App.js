import React from 'react'
import { Body } from './components/bodyDetails/Body'
import { BtnGral } from './components/buttons/BtnGral'
import { Filter } from './components/encabezado/Filter'

export const App = () => {
  return (
    <div className="containerPrincipal">
      <div className="msj">
          <Filter />
          <hr/>
          <h1>componente que tiene el msj</h1>
      </div>
      <div className="status">
          <div className = 'head'>
              <BtnGral />
              <Body />
          </div>
      </div>
    </div>
  )
}
