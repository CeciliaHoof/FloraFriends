import { NavLink } from 'react-router-dom'

import { 
    Card, 
    Image,
    CardMeta,
    CardHeader,
    CardContent
    } from 'semantic-ui-react'

function PlantCard ({
    common_name, 
    image, 
    scientific_name,
    id
    }) { 

    return (
        <Card centered>
            <Image src={image} rounded style={{height: '325px', width: 'auto'}}/>
            <CardContent>
                <CardHeader>{common_name}</CardHeader>
                <CardMeta>{scientific_name}</CardMeta>
                <NavLink to={`/plants/${id}`}><em>Details</em></NavLink>
            </CardContent>
        </Card>
        
    )
}

export default PlantCard