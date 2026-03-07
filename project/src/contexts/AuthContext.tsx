import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import {
    onAuthStateChanged,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut,
    signInWithPopup,
    GoogleAuthProvider,
    FacebookAuthProvider,
    RecaptchaVerifier,
    signInWithPhoneNumber,
    ConfirmationResult,
    User
} from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { auth, db } from '../lib/firebase/config';

interface AuthContextType {
    isLoggedIn: boolean;
    userEmail: string | null;
    userRole: 'admin' | 'user' | null;
    currentUser: User | null;
    loading: boolean;
    login: (e: string, p: string) => Promise<void>;
    signup: (e: string, p: string, first: string, last: string) => Promise<void>;
    loginWithGoogle: () => Promise<void>;
    loginWithFacebook: () => Promise<void>;
    setupRecaptcha: (containerId: string) => void;
    signinWithPhone: (phoneNumber: string) => Promise<ConfirmationResult>;
    logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [currentUser, setCurrentUser] = useState<User | null>(null);
    const [userRole, setUserRole] = useState<'admin' | 'user' | null>(null);
    const [loading, setLoading] = useState(true);
    const [recaptchaVerifier, setRecaptchaVerifier] = useState<RecaptchaVerifier | null>(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            setCurrentUser(user);
            if (user) {
                try {
                    const userDocRef = doc(db, 'users', user.uid);
                    const userDoc = await getDoc(userDocRef);
                    if (userDoc.exists()) {
                        setUserRole(userDoc.data().role as 'admin' | 'user');
                    } else {
                        setUserRole('user');
                    }
                } catch (error) {
                    console.error("Error fetching user role:", error);
                    setUserRole('user');
                }
            } else {
                setUserRole(null);
            }
            setLoading(false);
        });

        return unsubscribe;
    }, []);

    const login = async (email: string, pass: string) => {
        await signInWithEmailAndPassword(auth, email, pass);
    };

    const signup = async (email: string, pass: string, firstName: string, lastName: string) => {
        const userCredential = await createUserWithEmailAndPassword(auth, email, pass);
        const user = userCredential.user;
        // Create user document in Firestore with default 'user' role
        await setDoc(doc(db, 'users', user.uid), {
            firstName,
            lastName,
            email,
            role: 'user',
            createdAt: new Date()
        });
    };

    const ensureUserDocument = async (user: User) => {
        const userDocRef = doc(db, 'users', user.uid);
        const userDoc = await getDoc(userDocRef);
        if (!userDoc.exists()) {
            await setDoc(userDocRef, {
                firstName: user.displayName?.split(' ')[0] || '',
                lastName: user.displayName?.split(' ').slice(1).join(' ') || '',
                email: user.email || '',
                phone: user.phoneNumber || '',
                role: 'user',
                createdAt: new Date()
            });
        }
    };

    const loginWithGoogle = async () => {
        const provider = new GoogleAuthProvider();
        const result = await signInWithPopup(auth, provider);
        await ensureUserDocument(result.user);
    };

    const loginWithFacebook = async () => {
        const provider = new FacebookAuthProvider();
        const result = await signInWithPopup(auth, provider);
        await ensureUserDocument(result.user);
    };

    const setupRecaptcha = (containerId: string) => {
        if (!recaptchaVerifier) {
            const verifier = new RecaptchaVerifier(auth, containerId, {
                size: 'invisible',
            });
            setRecaptchaVerifier(verifier);
        }
    };

    const signinWithPhone = async (phoneNumber: string): Promise<ConfirmationResult> => {
        if (!recaptchaVerifier) throw new Error("Recaptcha not initialized");
        const confirmationResult = await signInWithPhoneNumber(auth, phoneNumber, recaptchaVerifier);
        return confirmationResult;
    };

    const logout = async () => {
        await signOut(auth);
    };

    return (
        <AuthContext.Provider value={{
            isLoggedIn: !!currentUser,
            userEmail: currentUser?.email || null,
            userRole,
            currentUser,
            loading,
            login,
            signup,
            loginWithGoogle,
            loginWithFacebook,
            setupRecaptcha,
            signinWithPhone,
            logout
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
