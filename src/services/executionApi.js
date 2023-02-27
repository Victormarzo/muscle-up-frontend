import api from './api';

export async function getExecutionById(token, id)    {
    const response = await api.get(`/execution/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
  
    return response.data;
}
