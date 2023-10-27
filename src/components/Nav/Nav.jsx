import { Link } from "react-router-dom"
function Nav() {
    return (
        <nav className='navbar-main'>
            <ul>
                <Link to='/characters'>Characters</Link>
                <Link to='/planets'>Planets</Link>
                <Link to='/starshsips'>Starships</Link>
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