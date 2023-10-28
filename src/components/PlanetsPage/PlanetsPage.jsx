import { useEffect, useState } from "react"
import PlanetListing from "./PlanetListing.jsx"

function PlanetsPage() {
    const [PlanetData, setPlanetData] = useState([])

    useEffect(function (){
        fetch('https://swapi.dev/api/planets')
            .then(function (res){
                return res.json()
            })
            .then(function (result) {
                setPlanetData(result.results)
                (console.log('api done:', PlanetData))
            })
            
    }, [])
    return (
        <div>
        <h1>Our Favourite Planets!</h1>
        <div>
        {PlanetData.map((planet, index) => (
            <PlanetListing key={index} name={planet.name} terrain={planet.terrain} population={planet.population} />
        ))}
        
        </div>
        </div>
    )
}
export default PlanetsPage

