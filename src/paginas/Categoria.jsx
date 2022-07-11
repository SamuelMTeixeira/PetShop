import React from 'react'
import ListaCategorias from '../components/ListaCategorias'
import ListaPosts from '../components/ListaPost'
import '../assets/css/blog.css'
import { Route, Routes, useLocation, useParams } from 'react-router-dom'

const Categoria = () => {
    const { id } = useParams()
    const location = useLocation()

    return (
        <>
            <div className="container">
                <h2 className="titulo-pagina">Pet Notícias</h2>
            </div>

            <ListaCategorias />
            <Routes>
                <Route exact path={`${location.pathname}/`} element={<ListaPosts url={`/posts?categoria=${id}`} />} />
            </Routes>
        </>
    )
}

export default Categoria