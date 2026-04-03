import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import {
    onAuthStateChanged,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut,
    User,
    GoogleAuthProvider,
    signInWithPopup,
    RecaptchaVerifier,
    signInWithPhoneNumber,
    ConfirmationResult
} from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { auth, db } from '../lib/firebase/config';

interface AuthContextType {
    isLoggedIn: boolean;
    userEmail: string | null;
    userName: string | null;
    userRole: 'admin' | 'user' | null;
    currentUser: User | null;
    loading: boolean;
    login: (e: string, p: string) => Promise<void>;
    signup: (e: string, p: string, first: string, last: string) => Promise<void>;
    logout: () => Promise<void>;
    loginWithGoogle: () => Promise<void>;
    setUpRecaptcha: (containerId: string) => RecaptchaVerifier;
    requestPhoneOTP: (phoneNumber: string, appVerifier: any) => Promise<ConfirmationResult>;
    confirmPhoneOTP: (confirmationResult: ConfirmationResult, otp: string) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [currentUser, setCurrentUser] = useState<User | null>(null);
    const [userRole, setUserRole] = useState<'admin' | 'user' | null>(null);
    const [userName, setUserName] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            setCurrentUser(user);
            if (user) {
                try {
                    const userDocRef = doc(db, 'users', user.uid);
                    const userDoc = await getDoc(userDocRef);
                    if (userDoc.exists()) {
                        setUserRole(userDoc.data().role as 'admin' | 'user');
                        setUserName(userDoc.data().firstName || 'Volunteer');
                    } else {
                        setUserRole('user');
                        setUserName('Volunteer');
                    }
                } catch (error) {
                    console.error("Error fetching user role:", error);
                    setUserRole('user');
                    setUserName('Volunteer');
                }
            } else {
                setUserRole(null);
                setUserName(null);
            }
            setLoading(false);
        });

        return unsubscribe;
    }, []);

    const checkAndCreateUserDoc = async (user: User, firstName: string, lastName: string) => {
        const userDocRef = doc(db, 'users', user.uid);
        const userDoc = await getDoc(userDocRef);
        if (!userDoc.exists()) {
            await setDoc(userDocRef, {
                firstName,
                lastName,
                email: user.email || user.phoneNumber || '',
                role: 'user',
                createdAt: new Date()
            });
            setUserName(firstName);
            setUserRole('user');
        } else {
            setUserName(userDoc.data().firstName || 'Volunteer');
            setUserRole(userDoc.data().role as 'admin' | 'user');
        }
    };

    const login = async (email: string, pass: string) => {
        await signInWithEmailAndPassword(auth, email, pass);
    };

    const signup = async (email: string, pass: string, firstName: string, lastName: string) => {
        const userCredential = await createUserWithEmailAndPassword(auth, email, pass);
        // Create user document in Firestore with default 'user' role
        await checkAndCreateUserDoc(userCredential.user, firstName, lastName);
    };

    const loginWithGoogle = async () => {
        const provider = new GoogleAuthProvider();
        const result = await signInWithPopup(auth, provider);
        const user = result.user;
        const displayName = user.displayName || '';
        const nameParts = displayName.split(' ');
        const firstName = nameParts[0] || 'User';
        const lastName = nameParts.length > 1 ? nameParts.slice(1).join(' ') : '';
        await checkAndCreateUserDoc(user, firstName, lastName);
    };

    const setUpRecaptcha = (containerId: string) => {
        return new RecaptchaVerifier(auth, containerId, {
            size: 'invisible' // or 'normal'
        });
    };

    const requestPhoneOTP = async (phoneNumber: string, appVerifier: any) => {
        return await signInWithPhoneNumber(auth, phoneNumber, appVerifier);
    };

    const confirmPhoneOTP = async (confirmationResult: ConfirmationResult, otp: string) => {
        const result = await confirmationResult.confirm(otp);
        await checkAndCreateUserDoc(result.user, 'Phone', 'User');
    };

    const logout = async () => {
        await signOut(auth);
    };

    return (
        <AuthContext.Provider value={{
            isLoggedIn: !!currentUser,
            userEmail: currentUser?.email || currentUser?.phoneNumber || null,
            userName,
            userRole,
            currentUser,
            loading,
            login,
            signup,
            logout,
            loginWithGoogle,
            setUpRecaptcha,
            requestPhoneOTP,
            confirmPhoneOTP
        }}>
            {!loading && children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
