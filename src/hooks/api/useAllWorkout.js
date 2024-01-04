import useAsync from '../useAsync';
import * as workoutApi from '../../services/workoutApi';
import useToken from '../useToken';

export default function useAllWorkout() {
    const token = useToken();
    const {
        data: allWorkout,
        loading: allWorkoutLoading,
        error: allWorkoutError,
        act: getAllWorkout
    } = useAsync(() => workoutApi.getAllWorkout(token));

    return {
        allWorkout,
        allWorkoutLoading,
        allWorkoutError,
        getAllWorkout
    };
}
