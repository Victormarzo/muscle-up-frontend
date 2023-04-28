import useAsync from '../useAsync';
import * as workoutApi from '../../services/workoutApi';
import useToken from '../useToken';

export default function useFinishWorkout() {
    const token = useToken();
    const {
        loading: finishWorkoutLoading,
        error: finishWorkoutError,
        act: finishWorkoutC
    } = useAsync(() => workoutApi.finishWorkout(token), false);

    return {
        finishWorkoutLoading,
        finishWorkoutError,
        finishWorkoutC
    };
}
