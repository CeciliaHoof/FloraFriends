import { 
    Card, 
    Image,
    CardMeta,
    CardHeader
    } from 'semantic-ui-react'

function PlantCard ({common_name, image, scientific_name}) {

    return (
        <Card>
            <Image src={image} />

        </Card>
        
    )
}

export default PlantCard