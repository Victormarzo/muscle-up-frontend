import useAsync from '../useAsync';
import * as workoutApi from '../../services/workoutApi';
import useToken from '../useToken';

export default function useFinishWorkout() {
    const token = useToken();
    const {
        data: finishWorkoutData,
        loading: finishWorkoutLoading,
        error: finishWorkoutError,
        act: finishWorkout
    } = useAsync(() => workoutApi.finishWorkout(token));

    return {
        finishWorkoutData,
        finishWorkoutLoading,
        finishWorkoutError,
        finishWorkout
    };
}
