import styled from 'styled-components';

export default function InputM({ onChange = () => 0, ...props }) {
    return (
        <InputBox { ...props } onChange={ onChange } />
    );
};

const InputBox = styled.input`
    width: 100px;
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
`;
