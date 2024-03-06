import { NavLink } from 'react-router-dom';
import {useState ,useEffect }from 'react';


import { 
    Card, 
    Image,
    CardMeta,
    CardHeader,
    CardContent,
    Button
    } from 'semantic-ui-react'

function PlantCard ({
    common_name, 
    image, 
    scientific_name,
    imageHeight,
    id,
    onAddPlant,
    onRemovePlant,
    ownedPlants
    }) { 
        

   

    let [ inShelf , setInShelf ] = useState(false);

    useEffect(() => {
        setInShelf(ownedPlants.includes(id));
      }, [ownedPlants , id]);
    
    // if (ownedPlants.includes(id)){
    //     setInShelf(true)
    // }


    const handleAddStateChange = () => {
        setInShelf(true)
        console.log('changed button state, starting add plant')
        onAddPlant(id)
    }

    const handleDeleteState = () => {
        setInShelf(false)
        console.log('changed button state, starting delete plant')

        onRemovePlant(id)
    }



    return (
        <Card centered>
            <Image src={image} rounded style={{height: imageHeight, width: 'auto'}}/>
            <CardContent style={{backgroundColor:'#D2B48C'}}>

                <CardHeader>{common_name}</CardHeader>
                <CardMeta>{scientific_name}</CardMeta>
                <NavLink to={`/plants/${id}`}><em>Details</em></NavLink>
                <Button 
                    size='tiny'
                    floated='right' 
                    style={{
                        color:'#FFA7A7', 
                        backgroundColor:'#F8F8F8', 
                        }}
                    onClick={inShelf ? handleDeleteState : handleAddStateChange}
                    // {inShelf ? onRemovePlant : onAddPlant}    
                        >
                    {inShelf ? "Remove from 'My Shelf'" : "Add to 'My Shelf'"}
                </Button>
            </CardContent>
        </Card>
        
    )
}

export default PlantCard