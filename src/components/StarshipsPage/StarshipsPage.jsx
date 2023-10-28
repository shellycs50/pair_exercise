import { useState, useEffect } from "react"
import StarshipListing from "./StarshipsListing"
function StarshipsPage() {
    
    const [StarshipData, setStarshipData] = useState([])

    useEffect(() => {
        fetch('https://swapi.dev/api/starships')
        .then(function (res) {
            return res.json()
        })
        .then(function (result) {
            setStarshipData(result.results)
            console.log('api done?', StarshipData)
        })
    }, []);
    
    return (
        <div>
            <h1>Our Favourite Starships!!!</h1>

            <div>
                {StarshipData && StarshipData.length > 1 && StarshipData.map((starship, index) => (
                    <StarshipListing key={index} manufacturer={starship.manufacturer} model={starship.model} price={starship.cost_in_credits} capacity={starship.cargo_capacity} />
                ))}

            </div>
        </div>
    )
    }
    export default StarshipsPage