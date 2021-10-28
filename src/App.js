import React from 'react'
import { Body } from './components/bodyDetails/Body'
import { BtnGral } from './components/buttons/BtnGral'
import { Filter } from './components/encabezado/Filter'
import { Inputt } from './components/input/Inputt'
import { Mail } from './components/maill/Mail'


export const App = () => {
  return (
    <div className="containerPrincipal">
      <div className="msj">
          <Filter />
          <hr/>
          <Inputt />
          <Mail />
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
