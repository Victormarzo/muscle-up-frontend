import useAsync from '../useAsync';
import * as executionApi from '../../services/executionApi';
import useToken from '../useToken';

export default function useNewExecution() {
    const token = useToken();
    const {
        loading: newExecutionLoading,
        error: newExecutionError,
        act: newExecution
    } = useAsync((body) => executionApi.postExecution(token, body), false);

    return {
        newExecutionLoading,
        newExecutionError,
        newExecution
    };
}
