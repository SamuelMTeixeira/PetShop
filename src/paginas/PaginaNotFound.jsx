import React from 'react'
import imagem from '../assets/img/doguito404.svg'

import '../assets/css/404.css'

const PaginaNotFound = () => {
    return (
        <main className='container flex flex--centro flex--coluna '>
            <img src={imagem} className='doguito-imagem' alt='ilustração de um cachorrinho' />
            <p className='naoencontrado-texto'>Ops, por aqui só solidão. Parece que você está procurando uma página que não existe.</p>
        </main>
    )
}

export default PaginaNotFound;