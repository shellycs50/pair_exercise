import './StarshipListing.css'

function StarshipListing ({manufacturer, model, price, capacity}) {
    return (
        <div className="item-wrapper">
            <ul className='Starship-facts-wrapper'>
            <li>Manufacturer: {manufacturer}</li>
            <li>Model: {model}</li>
            <li>Price: {price} Credits</li>
            <li>Cargo Capacity: {capacity}kg</li>
            
            </ul>
            
            </div>
    )
}
export default StarshipListing