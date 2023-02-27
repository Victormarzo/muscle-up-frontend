import useAsync from '../useAsync';
import * as executionApi from '../../services/executionApi';
import useToken from '../useToken';

export default function useExecutionById(id) {
    const token = useToken();
    const {
        data: executionById,
        loading: executionByIdLoading,
        error: executionByIdError,
        act: getExecutionById
    } = useAsync(() => executionApi.getExecutionById(token, id));
    return {
        executionById,
        executionByIdLoading,
        executionByIdError,
        getExecutionById
    };
}
