import styled from 'styled-components';

export default function Input({ onChange = () => 0, ...props }) {
    return (
        <InputBox { ...props } onChange={ onChange } />
    );
};

const InputBox = styled.input`
    width: 326px;
    height: 58px;
    background: #FFFFFF;
    border-radius: 5px;
    border:0;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;    
    color: #000000;
    margin-bottom: 13px;        
`;
