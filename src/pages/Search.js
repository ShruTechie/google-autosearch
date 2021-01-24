import React, { useState } from 'react'
import './Search.css'
import { Search, Mic } from '@material-ui/icons';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router';
import { actionTypes } from '../reducer'
import { StateValues } from '../StateProvider'
import useGoogleSearch from '../useGoogleSearch'


function SearchPage({ hideButton = false }) {

    const [input, setInput] = useState('')
    const history = useHistory()

    const [term, dispatch] = StateValues()
    const { data } = useGoogleSearch(term ? term : '')
    console.log(data)


    const getData=(e)=>{
        e.preventDefault()
        setInput(e.target.value)
        dispatch({
            type: actionTypes.SET_SEATCH_TERM,
            term: e.target.value
        })
    }
    return (
        <form className='search'>
            <div className='search__input'>
                <Search className='search__inputIcon' />
                <input value={input}
                    onChange={getData} />
                <Mic />

            </div>
         
      
      <div className="flex-container flex-column pos-rel">
    
      {term && (
        <div className="autoContainer">
          {/* {options
            .filter(({ name }) => name.indexOf(search.toLowerCase()) > -1)
            .map((value, i) => {
              return (
                <div
                  onClick={() => updatePokeDex(value.name)}
                  className="option"
                  key={i}
                  tabIndex="0"
                >
                  <span>{value.name}</span>
                  <img src={value.sprite} alt="pokemon" />
                </div>
              );
            })} */}
            <h1   className="option">hello</h1>
        </div>
      )}
    </div>


        </form>
    )
}

export default SearchPage
