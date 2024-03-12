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
    const body = {};
    const response = await api.put('/workout/finish-workout', body, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data;
}

export async function createWorkout(token, body) {
    const response = await api.post('/workout', body, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }); 
    return response.data; 
}

export async function getAllWorkout(token) {
    const response = await api.get('/workout', {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data;
};

export async function putToogleWorkout({ token, id }) {
    const response = await api.get(`/workout/toggle/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data;
}

export async function workoutCheckA(token) {
    const response = await api.get('/workout/current', {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    
    return response.data;
}

export async function getLastWorkout(token) {
    const response = await api.get('/workout/current', {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    
    return response.data;
}
