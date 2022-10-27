import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { setUserNameGlobal } from '../store/slices/UserName.slice';
import './styles/Home.css'

const Home = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const submit = e => {
        e.preventDefault()
        dispatch(setUserNameGlobal(e.target.firstChild.value.trim()))
        navigate('/pokedex')
    }



    return (
        <article className='pokedex'>
            <img src="/images/pokedex.png" alt="" />
            <h2 className='pokedex_subtitle'>Hi trainer !</h2>
            <p className='pokedex_text'>Give me your name to see the pokedex</p>
            <form onSubmit={submit} className='pokedex_form'>
                <input className='pokedex_input' type="text" placeholder='Enter your name: ' />
                <button className='pokedex_btn'>Catch them all!!</button>
            </form>
        </article>
    )
}

export default Home