import "./Nav.css"
import { NavLink } from "react-router-dom"

import { Link } from "react-router-dom"
function Nav() {
    return (
        <nav className='navbar-main'>
            <ul>
                <NavLink to='/characters'>Characters</NavLink>
                <NavLink to='/planets'>Planets</NavLink>
                <NavLink to='/starships'>Starships</NavLink>
            </ul>
        </nav>
    )
}
export default Nav


// <Route path="/" element={<HomePage />}/>
//       <Route path="/characters" element={<CharactersPage />}/>
//       <Route path="/planets" element={<PlanetsPage />}/>
//       <Route path="/starships" element={<StarshipsPage />}/>
//       <Route path="*" element={<ErrorPage />}/>