import user_img_placeholder from '../../assets/user_img_placeholder.jpg'

import { Card, 
    CardContent,
    CardMeta,
    CardHeader,
    Button,
    Image,
    GridColumn    
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


{/* <Card>
      <CardContent>
        <Image
          floated='right'
          size='mini'
          src='/images/avatar/large/steve.jpg'
        />
        <CardHeader>Steve Sanders</CardHeader>
        <CardMeta>Friends of Elliot</CardMeta>
        <CardDescription>
          Steve wants to add you to the group <strong>best friends</strong>
        </CardDescription>
      </CardContent>
      <CardContent extra>
        <div className='ui two buttons'>
          <Button basic color='green'>
            Approve
          </Button>
          <Button basic color='red'>
            Decline
          </Button>
        </div>
      </CardContent>
    </Card> */}