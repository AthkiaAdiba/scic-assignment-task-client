import { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from "react-toastify";
// import { useHistory } from 'react-router-dom';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    // const history = useHistory();
    console.log(user)
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            axios.get('http://localhost:5000/auth', { headers: { Authorization: `Bearer ${token}` } })
                .then(response => {
                    setUser(response.data);
                    setLoading(false);
                })
                .catch(() => {
                    localStorage.removeItem('token');
                    setLoading(false);
                });
        } else {
            setLoading(false);
        }
    }, []);

    const login = async (credentials) => {
        try {
            const response = await axios.post('http://localhost:5000/login', credentials);
            const tokenResponse = await axios.post('http://localhost:5000/jwt', { email: credentials.email });
            localStorage.setItem('token', tokenResponse.data.token);
            setUser(response.data.user);
            // history.push('/dashboard');
        } catch (error) {
            console.error('Error logging in', error);
        }
    };

    const register = async (userInfo) => {
        try {
            const user = await axios.post('http://localhost:5000/users', userInfo);
            console.log(user.data)
            if (user.data.insertedId === null) {
                toast.error(user.data.message)
            }
            if (user.data.insertedId) {
                // show success popup
                toast.success('Account created Successfully!')
            }
            const tokenResponse = await axios.post('http://localhost:5000/jwt', { email: userInfo.email });
            localStorage.setItem('token', tokenResponse.data.token);
            setUser(userInfo); // Assuming your register endpoint returns user info
            // history.push('/dashboard');
        } catch (error) {
            console.error('Error registering', error);
            toast.error('Provide Value Correctly!')
        }
    };

    const logout = () => {
        localStorage.removeItem('token');
        setUser(null);
        // history.push('/login');
    };

    return (
        <AuthContext.Provider value={{ user, login, register, logout, loading }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;