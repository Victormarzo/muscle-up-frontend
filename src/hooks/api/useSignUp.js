import useAsync from '../useAsync';
import * as userApi from '../../services/userApi';

export default function useSignUp() {
    const {
        data: signUpData,
        loading: signUpLoading,
        error: signUpError,
        act: signUp
    } = useAsync((body) => userApi.signUp(body), false);
    return {
        signUpData,
        signUpLoading,
        signUpError,
        signUp
    };
}
