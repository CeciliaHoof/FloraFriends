import { useEffect , useState } from 'react';
import { useParams , useNavigate } from 'react-router-dom';
import PlantDetails from './PlantDetails';
import OwnerCard from './OwnerCard';
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
} from 'semantic-ui-react'

const UserTags = styled.div`
    border-radius: 25px;
    margin: 2%;
    width: 95%;
    display: block;
    justify-content: center;
    padding: 3%;
    background-color: ${({ customStyles }) => customStyles ? '' : '#88B04B'}
`;


function PlantProfile () {

    const { id } = useParams()

    const [ singlePlant , setSinglePlant ] = useState({})
    const [ currOwners , setCurrOwners ] = useState([])


    let cur_ID = singlePlant.id

    useEffect(() => {
        fetch(`/plants/${id}`)
        .then(r => r.json())
        .then(plant => {
            setSinglePlant(plant);
            let plant_owners = singlePlant.purchased_plants
            if (plant_owners ){
                const owners = plant_owners.map((owner) => <OwnerCard {...owner} />)
                setCurrOwners(owners) 
            }
        })}, [id])

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

            <Grid columns={2} style={{height:'auto' , marginBottom:'1%' , margin: '2%'}}>
                <GridRow>
                    <GridColumn 
                        width={6} 
                        textAlign='center'>
                            <Image  size='large' src={singlePlant.image}  />
                    </GridColumn>
                    <GridColumn 
                        width={10} 
                        style={{
                            display : 'flex',
                            justifyContent : 'center',
                            }}>
                            <PlantDetails  {...singlePlant} />
                    </GridColumn>
                </GridRow>
            </Grid>

            <Grid columns={6}>
                <UserTags>
                    {currOwners ? currOwners : null}
                </UserTags>
            </Grid>
            
        </>
    )
}

export default PlantProfile