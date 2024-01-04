import MuscleLogo from '../assets/images/MuscleLogo.png';
import styled from 'styled-components';

export default function Logo() {
    return (
        <LogoDiv>
            <LogoImg>
                <img src={MuscleLogo}/>
            </LogoImg>
            <LogoText>
                <Text>MUSCLE UP</Text>
            </LogoText>
        </LogoDiv>
    );
}

const LogoDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20%;
    
`;
const LogoImg = styled.div`
    position: relative;
`;
const LogoText= styled.div`
    position: absolute; 
    p{
        font-size: 25px;
        margin-top: 70%;
    };
`;
const Text = styled.p`
    color: white;
    font-family: 'Anton', sans-serif;
    margin-top: 10px;
    margin-bottom: 10px;
`;
