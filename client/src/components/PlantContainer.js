import { useOutletContext } from 'react-router-dom'
import PlantCard from './PlantCard'


import { 
    Container,
    Grid,
    GridColumn
} from 'semantic-ui-react'

function PlantContainer(){
    let { 
        purchasedPlantsAll, 
        setPurchasedPlantsAll,
        user,
        plants,
    } = useOutletContext()
    
    // const [purchasedPlants, setPurchasedPlants] = useState([])

    // useEffect(() => {
    //     fetch('/purchased_plants')
    //     .then(r => r.json())
    //     .then(purPlants => {
    //         console.log('Fetch Finished, starting set for purPlants')
    //         setPurchasedPlants(purPlants)
    //     })}, [])


    

    let ownedPlants = purchasedPlantsAll.filter((plantPur) => plantPur.user_id === user.id)
    let plantIDs = ownedPlants.map(plant => { return plant.plant_id})


    
    

    if (!user){
        return <h1>Loading</h1>
    }
    
    function handleAddPlant(plant_id){
        fetch('/purchased_plants' , {
            method: 'POST',
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify({
                'plant_id': plant_id
            })
        })
        .then(r => {
            if(r.ok){
                r.json()
                .then(purchased_plant => {
                    setPurchasedPlantsAll([...purchasedPlantsAll, purchased_plant])
                })
            } else {
                console.log('error')
            }
        })
    }

    const handleRemovePlant = (id) => {
        const purchase_to_remove = ownedPlants.filter((plantPur) => plantPur.plant_id === id)[0]
        fetch(`/purchased_plants/${purchase_to_remove.id}` , {
            method: "DELETE",
        })
        setPurchasedPlantsAll(purchasedPlantsAll.filter((plantPur) => plantPur.id !== purchase_to_remove.id))
    }
    console.log(ownedPlants)

    let plant_cards = plants.map((plant => { 
        return (
            <GridColumn key={plant.id}> 
                <PlantCard  
                    {...plant} 
                    imageHeight='350px' 
                    key={plant.id}
                    ownedPlants={plantIDs} 
                    onAddPlant={handleAddPlant} 
                    onRemovePlant={handleRemovePlant}
                    profileID={user.id}
                    /> 
            </GridColumn>
        )
    }))

    return (
        <Container>
            <Grid columns={3} style={{padding:50}}> 
                {/* <Container> */}
                    {plant_cards}
                {/* </Container> */}
            </Grid>
        </Container>
    )
}

export default PlantContainer;