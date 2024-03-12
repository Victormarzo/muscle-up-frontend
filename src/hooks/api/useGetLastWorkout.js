import useAsync from '../useAsync';
import * as workoutApi from '../../services/workoutApi';
import useToken from '../useToken';

export default function useGetLastWorkout() {
    const token = useToken();
    const {
        data: lastWorkout,
        loading: lastWorkoutLoading,
        error: lastWorkoutError,
        act: getLastWorkout
    } = useAsync(() => workoutApi.getLastWorkout(token));

    return {
        lastWorkout,
        lastWorkoutLoading,
        lastWorkoutError,
        getLastWorkout
    };
}
