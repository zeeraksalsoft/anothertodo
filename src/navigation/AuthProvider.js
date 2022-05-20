import React,{ createContext, useState } from 'react';
import auth from '@react-native-firebase/auth';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(null);

    return (
        <AuthContext.Provider
            value={{
                user,
                setUser,
                loading,
                setLoading,
                login: async (email, password) => {
                    try {
                        await auth().signInWithEmailAndPassword(email, password);
                        console.log('user logged in')
                        return true;
                    } catch(e) {
                        console.log(e);
                        throw new Error(e);
                    }
                },
                signup: async(email, passowrd) => {
                    try {
                        await auth().createUserWithEmailAndPassword(email, passowrd)
                    } catch(e) {
                        console.log(e);
                    }
                },
                logout: async() => {
                    try {
                        await auth().signOut();
                        console.log("user logged out");
                    } catch(e){
                        console.log(e);
                    }
                }
            }}>
            {children}
        </AuthContext.Provider>
    );
}