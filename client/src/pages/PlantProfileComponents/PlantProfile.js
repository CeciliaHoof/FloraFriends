import { useEffect , useState } from 'react';
import { useParams , useNavigate } from 'react-router-dom';
import PlantDetails from './PlantDetails';
import styled from 'styled-components';

import {
    Header,
    Divider,
    Grid,
    GridRow,
    GridColumn,
    Image,
    Button,
    ButtonContent,
    Icon,
    Container

} from 'semantic-ui-react'

const UserTags = styled.div`
    border-radius: 25px;
    margin: 5%;
    width: 95%;
    display: grid;
    justify-content: center;
    padding: 2%;
    background-color: ${({ customStyles }) => customStyles ? '' : '#88B04B'}
`

function PlantProfile () {

    const { id } = useParams()

    const [ singlePlant , setSinglePlant ] = useState({})
    let cur_ID = singlePlant.id

    useEffect(() => {
        fetch(`/plants/${id}`)
        .then(r => r.json())
        .then(plant => setSinglePlant(plant))}, [id])

    let plant_owners = singlePlant.purchased_plants
    console.log(plant_owners) 

    const navigate = useNavigate()

    function handleOnClick(){
        const next_ID = (parseInt(cur_ID) + 1)
        navigate(`/plants/${next_ID}`)
    }

    return (
        <>
            <Grid columns={2}>
                <GridRow>
                    <GridColumn width={15}>
                        <Header size='huge' textAlign='center'>Plant Details</Header>
                    </GridColumn>
                    <GridColumn width={1}>
                        <Button animated style={{width: '95%', }} onClick={handleOnClick}>
                            <ButtonContent visible>Next Plant</ButtonContent>
                            <ButtonContent hidden>
                                <Icon name='arrow right' />
                            </ButtonContent>
                        </Button>

                    </GridColumn>
                </GridRow>
            </Grid>
            <Divider />

            <Grid colums={2} style={{height:'500px' , marginBottom:'7%'}}>
                <GridRow>
                    <GridColumn 
                        width={6} 
                        floated='left' 
                        textAlign='center' 
                        style={{margin:30}}>
                            <Image src={singlePlant.image}  />
                    </GridColumn>
                    <GridColumn 
                        width={9} 
                        floated='right'
                        style={{display : 'flex' , justifyContent : 'center'}}  >
                            <PlantDetails  {...singlePlant} />
                    </GridColumn>
                </GridRow>
            </Grid>

            <UserTags>
                <Grid columns={1}>
                    <GridRow >
                        <Container >
                        Yay this is where the user cards with names will go!
                        </Container>
                    </GridRow>
                </Grid>
            </UserTags>
        </>
    )
}

export default PlantProfile