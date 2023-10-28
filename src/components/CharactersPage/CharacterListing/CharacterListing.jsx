function CharacterListing ({name, height, mass, birth_year}) {
    return (
        <div className="item-wrapper">
            <ul className='facts-wrapper'>
            <li>Name: {name}</li>
            <li>Height: {height}</li>
            <li>Mass: {mass}kg</li>
            <li>Birth Year: {birth_year}</li>
            </ul>
            
            </div>
    )
}
export default CharacterListing