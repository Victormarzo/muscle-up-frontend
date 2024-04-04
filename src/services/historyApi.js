import api from './api';

export async function getLastWorkout(token) {
    const response = await api.get('/history/last', {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    
    return response.data;
}
