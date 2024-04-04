import useAsync from '../useAsync';
import * as historyApi from '../../services/historyApi';
import useToken from '../useToken';

export default function useGetLastWorkout() {
    const token = useToken();
    const {
        data: lastWorkout,
        loading: lastWorkoutLoading,
        error: lastWorkoutError,
        act: getLastWorkout
    } = useAsync(() => historyApi.getLastWorkout(token));

    return {
        lastWorkout,
        lastWorkoutLoading,
        lastWorkoutError,
        getLastWorkout
    };
}
