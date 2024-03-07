import user_img_placeholder from '../../assets/user_img_placeholder.jpg'

import { Card, 
    CardContent,
    CardHeader,
    Button,
    Image,   
} from 'semantic-ui-react'



function OwnerCard({ user }){

    return (
            <Card style={{backgroundColor:'#F8F8F8'}}>
                <CardContent>
                    <Image 
                        floated='right'
                        size='mini'
                        src={user_img_placeholder}
                    />
                    <CardHeader style={{padding:10}}>
                        {user.username}
                    </CardHeader>
                    <CardContent extra>
                            <Button 
                            style = {{color:'#FFA7A7', 
                        backgroundColor:'#F8F8F8'}} size='mini'>
                                Add Friend!
                            </Button>
                        
                    </CardContent>
                </CardContent>
            </Card>
    )
}

export default OwnerCard;