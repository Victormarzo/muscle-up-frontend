import useToken from '../hooks/useToken';
export default function createHeaders() {
    const token = useToken();
    const config={
        headers: {
            Authorization: `Bearer ${ token }`
        } };
    return config;
};
