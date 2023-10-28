function PlanetListing ({name, terrain, population}) {
    return (
        <div className="item-wrapper">
            <ul className='planet-facts-wrapper'>
            <li>Name: {name}</li>
            <li>Terrain: {terrain}</li>
            <li>Population" {population}</li>
            
            </ul>
            
            </div>
    )
}
export default PlanetListing