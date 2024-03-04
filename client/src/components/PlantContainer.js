import PlantCard from './PlantCard'

import { 
    Container,
    Grid,
    GridColumn
} from 'semantic-ui-react'

function PlantContainer({ plants }){


    let plant_cards = plants.map((plant => { 
        
        return (
            <GridColumn key={plant.id}> 
                <PlantCard  {...plant} imageHeight='325px' key={plant.id} /> 
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