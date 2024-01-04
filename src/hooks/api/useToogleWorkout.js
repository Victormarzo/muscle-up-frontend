import useAsync from '../useAsync';
import * as workoutApi from '../../services/workoutApi';
import useToken from '../useToken';

export default function useToogleWorkout(id) {
    const token = useToken();
    const {
        loading: toogleWorkoutLoading,
        error: toogleWorkoutError,
        act: putToogleWorkout
    } = useAsync(() => workoutApi.putToogleWorkout({ token, id }), false);

    return {
        toogleWorkoutLoading,
        toogleWorkoutError,
        putToogleWorkout
    };
}
