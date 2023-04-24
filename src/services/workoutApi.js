import api from './api';

export async function getActiveWorkout(token) {
    const response = await api.get('/workout/active', {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data;
};

export async function getWorkoutById(token, id) {
    const response = await api.get(`/workout/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data;
};

export async function checkWorkoutStatus(token) {
    const response = await api.get('/workout/check', {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data;
}

export async function finishWorkout(token) {
    const response = await api.get('/workout/finish-workout', {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data;
}
