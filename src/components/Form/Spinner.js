import { ColorRing } from 'react-loader-spinner';
import styled from 'styled-components';
export default function Spinner() {
    return (
        <Center>
            <ColorRing
                visible={true}
                height="100"
                width="100"
                ariaLabel="color-ring-loading"
                wrapperStyle={{}}
                wrapperClass="color-ring-wrapper"
                colors={['#90FBFF', '#90FBFF', '#90FBFF', '#90FBFF', '#90FBFF']}
            />
        </Center>
    );
}

const Center = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    height:100%;
    width: 85vw;
`;
