import { NavLink } from 'react-router-dom';
import { useState } from 'react';

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
    id
    }) { 
    
    const [ inShelf , setInShelf ] = useState(false)
    
    function handleOnClick(){
        setInShelf(inShelf => !inShelf)
    }

    return (
        <Card centered>
            <Image src={image} rounded style={{height: '325px', width: 'auto'}}/>
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
                    onClick={handleOnClick}    
                        >
                    {inShelf ? "Remove from 'My Shelf'" : "Add to 'My Shelf'"}
                </Button>
            </CardContent>
        </Card>
        
    )
}

export default PlantCard