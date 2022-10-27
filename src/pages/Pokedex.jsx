import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Pagination from './Pagination'
import Footer from '../components/shared/Footer'
import CardPoke from '../pages/CardPoke'
import InputSearch from './InputSearch'
import SelectByType from './SelectByType'

const Pokedex = () => {

    const [pokemons, setPokemons] = useState()
    const [typeSelected, setTypeSelected] = useState('All Pokemons')


    useEffect(() => {
        if (typeSelected !== 'All Pokemons') {
            axios.get(typeSelected)
                .then(res => {
                    const result = res.data.pokemon.map(e => e.pokemon)
                    setPokemons(result)
                })
                .catch(err => console.log(err))
        } else {
            const URL = 'https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0'
            axios.get(URL)
                .then(res => (setPokemons(res.data.results)))
                .catch(err => console.log(err))
        }
    }, [typeSelected])


    const userName = useSelector(state => state.userName)


    const [page, setPage] = useState(1)
    const [pokePerPage, setPokePerPage] = useState(8)
    const initialPoket = (page - 1) * pokePerPage
    const finalPoke = initialPoket + pokePerPage



    return (
        <div>
            <header>
                <h1>Pokedex</h1>
                <p>Welcome <span>{userName}</span>, here you can find your favorite pokemon.</p>
            </header>
            <aside>
                <InputSearch />
                <Footer />
                <SelectByType setTypeSelected={setTypeSelected} />
                <Pagination
                    page={page}
                    pagesLength={pokemons && Math.ceil(pokemons.length / pokePerPage)}
                    setPage={setPage}
                />
            </aside>
            <main>
                <div className='card_container'>
                    {
                        pokemons?.slice(initialPoket, finalPoke).map(pokemon => (
                            <CardPoke
                                key={pokemon.url}
                                url={pokemon.url}
                            />
                        ))
                    }
                </div>
            </main>
        </div>
    )
}

export default Pokedex