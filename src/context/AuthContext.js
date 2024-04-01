import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const savedUser = localStorage.getItem('user');
        if (savedUser) {
            setUser(JSON.parse(savedUser));
        }
    }, []);

    const register = (name, email, password, phone) => {
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const existingUser = users.find(user => user.email === email);
        if (existingUser) {
            throw new Error('User already exists.');
        }
        const newUser = { name, email, password, phone };
        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));
    };

    const login = (email, password) => {
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const user = users.find(user => user.email === email && user.password === password);
        console.log('User:', user);
        if (!user) {
            throw new Error('Invalid email or password.');
        }
        setUser({ email });
        localStorage.setItem('user', JSON.stringify({ email }));
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('user');
    };

    const value = { user, register, login, logout };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
