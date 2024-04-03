import styled from 'styled-components';

export default function Input({ onChange = () => 0, ...props }) {
    return (
        <InputBox { ...props } onChange={ onChange } />
    );
};

const InputBox = styled.input`
    width: 326px;
    height: 58px;
    background: #A1C6CB;
    border-radius: 10px;
    border:0;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;    
    color: #000000;
    margin-bottom: 13px;        
    padding:13px;
`;
