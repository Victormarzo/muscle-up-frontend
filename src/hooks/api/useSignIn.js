import useAsync from '../useAsync';
import * as userApi from '../../services/userApi';

export default function useSignIn() {
    const {
        data: signInData,
        loading: signInLoading,
        error: signInError,
        act: signIn
    } = useAsync((body) => userApi.signIn(body), false);
    return {
        signInData,
        signInLoading,
        signInError,
        signIn
    };
}
