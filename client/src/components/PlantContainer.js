import PlantCard from './PlantCard'

function PlantContainer({ plants }){

    let plant_cards = plants.map((plant => <PlantCard  {...plant} key={plant.id} />))

    return (
        <div>
            <h1>Plant Container</h1>
            {plant_cards}
        </div>

    )
}

export default PlantContainer;