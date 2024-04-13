import './searchBar.css'
import '../../src/index.css'

export default function SearchBar(){
    return(
        <div className="search-container">
            <form action="#" method='get'>

                <div className="search-wrapper">
                    <input type="text" name="searchInput" id="searchInput" />
                    <input type="submit" value="Search" id="searchBtn" />
                </div>
            </form>
        </div>
    )
}
