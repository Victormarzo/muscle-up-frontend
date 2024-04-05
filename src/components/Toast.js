import { ToastContainer } from 'react-toastify';
import styled from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

export default function Toast() {
    return (
        <StyledToast
            autoClose={2000}
            closeButton={false}
            hideProgressBar={true}
            position={'bottom-left'}
        />
    );
}
const StyledToast = styled(ToastContainer)`
    .Toastify__toast{
        background-color:#90FBFF;
        color:black;
    };

`;
