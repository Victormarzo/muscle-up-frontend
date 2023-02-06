import api from './api';

export async function getActiveWorkout(token) {
    const response = await api.get('/workout/active', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    return response.data;
};
