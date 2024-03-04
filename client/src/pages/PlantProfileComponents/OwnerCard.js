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
        <GridColumn width={3}>
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
                        <div className='ui one button'>
                            <Button size='mini'>
                                Add Friend!
                            </Button>
                        </div>
                    </CardContent>
                </CardContent>
            </Card>
        </GridColumn>
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