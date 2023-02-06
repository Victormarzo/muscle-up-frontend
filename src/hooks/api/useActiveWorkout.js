import useAsync from '../useAsync';
import * as workoutApi from '../../services/workoutApi';
import useToken from '../useToken';

export default function useActiveWorkout() {
  console.log('tachegano');  
  const token = useToken();
  const {
      data: activeWorkout,
      loading: activeWorkoutLoading,
      error: activeWorkoutError,
      act: getActiveWorkout
  } = useAsync(() => workoutApi.getActiveWorkout(token));

    return {
        activeWorkout,
        activeWorkoutLoading,
        activeWorkoutError,
        getActiveWorkout
    };
}
