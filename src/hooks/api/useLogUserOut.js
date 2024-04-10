import useAsync from '../useAsync';
import * as userApi from '../../services/userApi';
import useToken from '../useToken';

export default function useLogUserOut() {
    const token = useToken();
    const {
        data: logUserOut,
        loading: logUserOutLoading,
        error: logUserOutError,
        act: logOut
    } = useAsync(() => userApi.logOut(token), false);
    return {
        logUserOut,
        logUserOutLoading,
        logUserOutError,
        logOut
    };
}
