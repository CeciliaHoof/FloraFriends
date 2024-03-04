import red_secret from '../assets/red_secret.jpg';
import mini_monstera from '../assets/mini_monstera.jpeg';
import parlor_palm from '../assets/parlor_palm.jpg';
import snake_plant from '../assets/snake_plant.jpg';
import styled from 'styled-components';
import { useFormik } from 'formik';
import * as yup from 'yup';

import {
  Grid,
  GridColumn,
  GridRow,
  Image,
  ImageGroup,
  Form,
} from 'semantic-ui-react';



const WelcomeMessage = styled.div`
  width: 100%;
  display: grid;
  justify-content: center;
  padding: 3%;
  background-color: ${({ customStyles }) => customStyles ? '' : '#88B04B'}
  `

const WelcomeMessageText = styled.h1`
  font-size: 300%;
  text-align: center;
`
const SubMessageText = styled.p`
  font-size: 200%;
  text-align: center;
`
const LoginForm = styled.div`
  width: 100%;
  background-color: #88B04B
`

function Home() {

    const wel_mssg = " Welcome, to FloraFriends! "
    const sub_mssg = " Connect - Share - Grow "

    const formSchema = yup.object().shape({
      username: yup.string().max(20).min(3),
      first_name: yup.string().required('Must enter a name').max(20).min(2),
      last_name: yup.string().required('Must enter a last name').min(2),
      password: yup.string()
    })

    const formik = useFormik({
      initialValues: {
        username: '',
        first_name: '',
        last_name: '',
        password: ''
      },
      validationSchema: formSchema,
      onSubmit: (values) => {
        fetch('/users', {
          method: 'POST',
          headers: {
            'content-type':'application/json'
          },
          body: JSON.stringify(values, null, 2),
        })
        .then(r => {if (r.status == 201){
          console.log(r.json())
        }})
      }
    })

    return(
      <>
        <WelcomeMessage>
          <WelcomeMessageText> Welcome, to FloraFriends!</WelcomeMessageText>
          <SubMessageText>{sub_mssg}</SubMessageText>
        </WelcomeMessage>

        <Grid columns={2} style={{ justifyContent:'center', padding:'4%'}}>

          <GridColumn width={10} >
            <Grid columns={2}>
              <ImageGroup size='medium' style={{margin:'5%'}}>
                <GridColumn width={8}>
                  <Image src={red_secret} style={{maxWidth:'100%', height:'auto'}}/>
                  <Image src={parlor_palm} style={{maxWidth:'100%', height:'auto'}}/>
                </GridColumn>
                <GridColumn width={8}>
                  <Image src={mini_monstera} style={{maxWidth:'100%', height:'auto'}}/>
                  <Image src={snake_plant} style={{maxWidth:'100%', height:'auto'}}/>
                </GridColumn>
              </ImageGroup>
            </Grid>
          </GridColumn>

          <GridColumn width={6}>
            <Grid columns={1} style={{justifyContent:'center'}}>
              <GridColumn style={{margin:'2%'}}>
                <LoginForm>
                  <Form onSubmit={formik.handleSubmit}>
                    <Form.Field>
                      <Form.Input onChange={formik.handleChange} value={formik.values.username} name='username'  label='Username'>
                      </Form.Input>
                    </Form.Field>
                    <Form.Field>
                      <Form.Input onChange={formik.handleChange} value={formik.values.first_name}  name='first_name' label='First Name' />                      
                    </Form.Field>
                    <Form.Field>
                      <Form.Input onChange={formik.handleChange} value={formik.values.last_name} name='last_name'  label='Last Name' />
                    </Form.Field>
                    <Form.Field>
                      <Form.Input onChange={formik.handleChange} value={formik.values.password} name='password'  label='Password' />
                    </Form.Field>
                    <Form.Field>
                      <Form.Button type='submit' >Create Account</Form.Button>
                    </Form.Field>
                  </Form>
                </LoginForm>
              </GridColumn>
            </Grid>
          </GridColumn>

        </Grid>
      </>
    );
  }
  
export default Home;