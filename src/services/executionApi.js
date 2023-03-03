import api from './api';

export async function getExecutionById(token, id) {
    const response = await api.get(`/execution/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
  
    return response.data;
}

export async function postExecution(token, body) {
    const response = await api.post('/execution', body, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
  
    return response.data;  
}
