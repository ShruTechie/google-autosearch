import React from 'react'
import './Search.css'
import { StateValues } from './StateProvider'
import useGoogleSearch from './useGoogleSearch'
import { Link } from  'react-router-dom'
import SearchPage from './pages/Search'
import SearchIcon from '@material-ui/icons/Search';
import RoomIcon from '@material-ui/icons/Room';
import ImageIcon from '@material-ui/icons/Image';
import DuoIcon from '@material-ui/icons/Duo';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import DescriptionIcon from '@material-ui/icons/Description';
function Search() {
    const [{ term }, dispatch] = StateValues()
    const { data } = useGoogleSearch(term ? term : '')
    console.log(data,term,'aaaaaaaa')
    return (

        <div>
        <div className='searchPage'>
            <div className='searchPage__header'>
              <Link to='/'>
                  <img
                  className='searchPage__logo'
                  src='http://pngimg.com/uploads/google/google_PNG19640.png'
                  alt=''
                  />
              </Link>
             
            </div>

            <div className='searchPage__headerBody'>
            <SearchPage hideButton />
            <div className='searchPage__options'>
            <div className='searchPage__optionsLeft'>
            <div className='searchPage__option'>
            <SearchIcon/>
            <Link to='/all'>All</Link>
            </div>  
            <div className='searchPage__option'>
            <RoomIcon/>
            <Link to='/maps'>Maps</Link>
            </div>  
            <div className='searchPage__option'>
            <DescriptionIcon/>
            <Link to='/news'>News</Link>
            </div>  
            <div className='searchPage__option'>
            <ImageIcon/>
            <Link to='/images'>Images</Link>
            </div>  
            <div className='searchPage__option'>
            <DuoIcon/>
            <Link to='/videos'>Videos</Link>
            </div>  
            <div className='searchPage__option'>
            <LocalOfferIcon/>
            <Link to='all'>Shopping</Link>
            </div>  
            <div className='searchPage__option'>
            <MoreVertIcon/>
            <Link to='/more'>More</Link>
            </div>  
            </div>
            <div className='searchPage__optionsRight'>
            <div className='searchPage__option'>
        
            <Link to='/settings'>Settings</Link>
            </div>  
            <div className='searchPage__option'>
        
             <Link to='/tool'>Tools</Link>
        </div>  
            </div>
            </div>
            
            </div>

          
 </div>
   {
    term && term.length > 0  ? (
        <div className='search__results'>
                <p className='searchPage__resultCount'>About {data?.searchInformation.formattedTotalResults}
                 result count form {data?.searchInformation.searchTime} seconds {term}</p>
        </div>  
    ) : (
        <h3>Oopss, no results found</h3>
    )
}

{
    data?.items.map(item=>
        {
            return(
                <div className='searchPage__result'>
                <a href={item.link}>{item.displayLink}</a>
                <a className='searchPage__resultTitle' href={item.link}>
                    <h2>{item.title}</h2>
                </a>
                <p className='searchPage__resultSnippet'>
                    {item.snippet}
                </p>
                </div>
            )
    })
}
</div>
        
    )
}

export default Search
