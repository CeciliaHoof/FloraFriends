import { 
    Container,
    Divider,
    Header,
    Segment

} from 'semantic-ui-react';
import styled from 'styled-components';

const DetailContainer = styled.div`
    border-radius: 25px;
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
    margin: 2%;
    width: 95%;
    font-size: 175%;
    text-align: center;
    background-color: #F8F8F8;
`
const TopInfo = styled.div`
    border-radius: 25px;
    margin-left: 10%;
    margin-right: 10%;
    margin-top: 1%;
    font-size: 175%;
    padding: 2%;
    text-align: center;
    background-color: #F8F8F8;
`;

const BottomInfo = styled.div`
    border-radius: 25px;
    margin-top: 10%;
    font-size: 150%;
    padding: 5%;
    background-color: #F8F8F8;
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
                <Header size='huge'>Get to know the {common_name}</Header>
            </HeaderInfo>
            <Divider />
            <TopInfo customStyles='true'>
                <p> 
                    <strong>Common Name:</strong> {common_name}
                </p>
                <p >
                    <strong>Scientific Name:</strong> <em>{scientific_name}</em>
                </p>
            </TopInfo>
            <BottomInfo customStyles='true'>
                <p>
                    <strong>Sunlight Requirements:</strong>  {sunlight}
                </p>
                <p >
                    <strong>Watering Frequency:</strong> {watering}
                </p>
                <p>
                    <strong>Winter Hardiness Zone:</strong>  {zone}
                </p>
            </BottomInfo>
            
        </DetailContainer>
    )
};

export default PlantDetails;