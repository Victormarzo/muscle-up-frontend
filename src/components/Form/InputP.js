import styled from 'styled-components';

export default function InputP({ onChange = () => 0, ...props }) {
    return (
        <InputBox { ...props } onChange={ onChange } />
    );
};

const InputBox = styled.input`
    width: 70px;
    height: 45px;
    background: #A1C6CB;
    border-radius: 15px;
    border:0;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;    
    color: #000000;
    margin-bottom: 13px;  
    padding-left:2% ;  
    text-align: center;     
`;
