import useAsync from '../useAsync';
import * as workoutApi from '../../services/workoutApi';
import useToken from '../useToken';

export default function useWorkoutCheck() {
    const token = useToken();
    const {
        data: workoutCheck,
        loading: workoutCheckLoading,
        error: workoutCheckError,
        act: workoutCheckA
    } = useAsync(() => workoutApi.workoutCheckA(token));
    return {
        workoutCheck,
        workoutCheckLoading,
        workoutCheckError,
        workoutCheckA
    };
}
