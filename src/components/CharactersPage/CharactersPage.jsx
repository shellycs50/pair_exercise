import { useEffect, useState } from "react"
import CharacterListing from "./CharacterListing/CharacterListing"

function CharactersPage() {
    const [characterData, setCharacterData] = useState([])

    useEffect(function (){
        fetch('https://swapi.dev/api/people')
            .then(function (res){
                return res.json()
            })
            .then(function(result){
                setCharacterData(result.results)
            })
            .then(console.log('api done:', characterData))
    }, [])
    return (
        <>
        <h1>Characters!</h1>
        <div>
        
        <div className="characterWrapper">
            {characterData.length > 0 && characterData.map((result, index) => 
            <CharacterListing key={index} name={result.name} height={result.height} mass={result.mass} birth_year={result.birth_year} />
            )}
        
        </div>
        </div>
        </>
    )
}
export default CharactersPage