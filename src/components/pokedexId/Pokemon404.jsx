import React from 'react'
import { Link } from 'react-router-dom'

const Pokemon404 = () => {
    return (
        <>
        <h1>Pokemon not found 404</h1>
        <Link to='/pokedex'>Return to Pokedex</Link>
        </>
    )
} 

export default Pokemon404