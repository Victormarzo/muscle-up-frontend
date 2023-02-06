import api from './api';

export async function signUp(email, password, name) {
    const response = await api.post('/user', { email, password, name });
    return response.data;
};

export async function signIn(email, password) {
    const response = await api.post('/auth', { email, password });
    return response.data;
};
