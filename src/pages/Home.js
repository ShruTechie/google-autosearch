import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
import { AccountCircle, Apps } from '@material-ui/icons';
import SearchPage from './Search'
function Home() {
    return (
        <div className='home'>
         
            <div className='home__body'>
                <img src='http://pngimg.com/uploads/google/google_PNG19640.png' />
            </div>
            <div className='home__inputContainer'>
                <SearchPage hideButton />
            </div>
        </div>
    )
}

export default Home
