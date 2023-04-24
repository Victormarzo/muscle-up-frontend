import useAsync from '../useAsync';
import * as workoutApi from '../../services/workoutApi';
import useToken from '../useToken';

export default function useCheckWorkout() {
    const token = useToken();
    const {
        data: checkWorkout,
        loading: checkWorkoutLoading,
        error: checkWorkoutError,
        act: checkWorkoutStatus
    } = useAsync(() => workoutApi.checkWorkoutStatus(token));

    return {
        checkWorkout,
        checkWorkoutLoading,
        checkWorkoutError,
        checkWorkoutStatus
    };
}
