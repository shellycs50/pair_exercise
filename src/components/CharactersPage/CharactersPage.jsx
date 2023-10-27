import { useEffect, useState } from "react"
import CharacterListing from "./CharacterListing/CharacterListing"

function CharactersPage() {
    const [characterData, setCharacterData] = useState ([])

    useEffect(function (){
        fetch('https://swapi.dev/api/people')
            .then(function (res){
                return res.json()
            })
            .then(function(characterData){
                setCharacterData(characterData.data)
                console.log(characterData)
            })
    }, [])
    return (
        <>
        <h1>Characters!</h1>
        <div className="characterWrapper">
            {books.map(results => <CharacterListing
            name={characterData.data.name}
    
            />)}
        
        </div>
        </>
    )
}
export default CharactersPage