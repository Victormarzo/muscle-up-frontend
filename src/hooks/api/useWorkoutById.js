import useAsync from '../useAsync';
import * as workoutApi from '../../services/workoutApi';
import useToken from '../useToken';

export default function useWorkoutById(id) {
    const token = useToken();
    const {
        data: workoutById,
        loading: workoutByIdLoading,
        error: workoutByIdError,
        act: getWorkoutById
    } = useAsync(() => workoutApi.getWorkoutById(token, id));
    return {
        workoutById,
        workoutByIdLoading,
        workoutByIdError,
        getWorkoutById
    };
}
