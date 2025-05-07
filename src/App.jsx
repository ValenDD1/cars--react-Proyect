import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'

import { Principal } from './Components/Principal/Principal'
import {Home} from './Components/Content/Home'
import {ListarAuto} from './Components/Content/Auto'
import {DetalleAuto} from './Components/Content/DetalleAuto'
import {Servicio} from './Components/Content/Servicio'
import {Contacto} from './Components/Content/Contacto'
function App() {

  return (
    <>
      <div className='container-app'> 
        <Routes>
          <Route path='/' element={<Principal/>} >
            <Route path='/' element={<Home/>}></Route>
            <Route path='/auto' element={<ListarAuto/>}></Route>
            <Route path='/auto/:codigo' element={<DetalleAuto/>}></Route>
            <Route path='/servicio' element={<Servicio/>}></Route>
            <Route path='/contacto' element={<Contacto/>}></Route>
            <Route path='*' element={<Home/>}></Route>

          </Route>
        </Routes>
      </div>
    </>
  )
}

export default App
