import React from 'react'
import './assets/css/base/base.css'

import Home from './paginas/Home'
import Sobre from './paginas/Sobre'
import PaginaNotFound from './paginas/PaginaNotFound'

import Cabecalho from './components/Cabecalho'

import {
  BrowserRouter, Route, Routes
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Cabecalho />
      <Routes>
        <Route exact path="/" element={<Home />} />

        <Route path="sobre" element={<Sobre />} />

        <Route path='*' element={<PaginaNotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
