import React, { useState } from 'react'
import './Search.css'
import { Search, Mic } from '@material-ui/icons';
import { actionTypes } from '../reducer'
import { StateValues } from '../StateProvider'
import useGoogleSearch from '../useGoogleSearch'


function SearchPage() {

    const [input, setInput] = useState('')

    const [term, dispatch] = StateValues()
    const { data } = useGoogleSearch(term ? term : '')


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
        
            {
                data && data.length >0 ? data.items.map(item=>
                    {
                        return(
                            <div>
                           
                                 <h2>{item.title}</h2>
                         
                             </div>
                        )
                }) : <p>No results</p>
            }
      
        </div>
      )}
    </div>


        </form>
    )
}

export default SearchPage
