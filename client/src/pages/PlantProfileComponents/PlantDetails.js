import { 
    Container,
    Divider,
    Header,
    Segment

} from 'semantic-ui-react';
import styled from 'styled-components';

const DetailContainer = styled.div`
    border-radius: 75px;
    margin: 1%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 3%;
    background-color: ${({ customStyles }) => customStyles ? '' : '#88B04B'}
`;

const HeaderInfo = styled.div`
    border-radius: 25px;
    margin-bottom: 2%;
    width: 95%;
    font-size: 150%;
    text-align: center;
    background-color: #F8F8F8;
`
const TopInfo = styled.div`
    border-radius: 25px;
    margin-left: 10%;
    margin-right: 10%;
    margin-top: 1%;
    margin-bottom: 5%;
    font-size: 175%;
    padding: 2%;
    text-align: center;
    background-color: #F8F8F8;
`;

const BottomInfo = styled.div`
    border-radius: 25px;
    font-size: 100%;
    padding: 1%;
    margin: .25%;
    margin-right: 2%;
    background-color: #F8F8F8;
    text-align: left
`;

function PlantDetails ({
    common_name,
    scientific_name,
    sunlight,
    watering,
    zone
}){

    return (
    
        <DetailContainer>
            <HeaderInfo customStyles='true'>
                <Header size='huge'>Get to know the <strong style={{color:'#FFA7A7'}}>{common_name}</strong></Header>
            </HeaderInfo>
            <Divider />
            <TopInfo customStyles='true'>
                <p> 
                    <strong >Common Name:</strong> {common_name}
                </p>
                <p >
                    <strong >Scientific Name:</strong> <em>{scientific_name}</em>
                </p>
            </TopInfo>
            <Container text >
                <BottomInfo>
                    <strong> ☀️ Sunlight Requirements:</strong>  {sunlight}
                </BottomInfo>
                <BottomInfo >
                    <strong> 💦 Watering Frequency:</strong> {watering}
                </BottomInfo>
                <BottomInfo>
                    <strong> ❄️ Winter Hardiness Zone:</strong>  {zone}
                </BottomInfo>
            </Container>
        </DetailContainer>

    )
};

export default PlantDetails;