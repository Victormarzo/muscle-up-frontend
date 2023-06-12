import useAsync from '../useAsync';
import * as workoutApi from '../../services/workoutApi';
import useToken from '../useToken';

export default function useNewWorkout() {
    const token = useToken();
    const {
        loading: newWorkoutLoading,
        error: newWorkoutError,
        act: newWorkout
    } = useAsync((body) => workoutApi.createWorkout(token, body), false);

    return {
        newWorkoutLoading,
        newWorkoutError,
        newWorkout
    };
}
