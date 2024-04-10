import api from './api';

export async function signIn(body) {
    const response = await api.post('/auth', body); 
    return response.data; 
}

export async function signUp(body) {
    const response = await api.post('/user', body); 
    return response.data; 
}

export async function logOut(token) {
    const response = await api.get('/auth', {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data;
}

