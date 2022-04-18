import { BiSearchAlt } from 'react-icons/bi'
import { AiOutlineCloseCircle } from 'react-icons/ai'


const Search = ({searchButton, search}) => {
    const widgetStyle = {
        width : '20px', 
        height : '20px'
    }
  return (
    <div className='search-div'>
    <div className="search-close">
        <AiOutlineCloseCircle onClick={searchButton} style={widgetStyle}/>
    </div>
        <div className="search-input">
            <input type="text" placeholder='search...'/>
        </div>
        <div className="search-button">
            <BiSearchAlt onClick={search} style={widgetStyle}/>
        </div>
    </div>
  )
}

export default Search