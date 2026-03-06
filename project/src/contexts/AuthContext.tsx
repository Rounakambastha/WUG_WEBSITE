import React, { createContext, useState, useContext, ReactNode } from 'react';

// For this MVP, we define the 6 authorized admin emails here.
// In a real production environment, this would be verified via your backend or Auth Provider (Firebase, Auth0).
const AUTHORIZED_ADMIN_EMAILS = [
    'admin@wakeupguys.org',
    'volunteer@wakeupguys.org',
    'founder@wakeupguys.org',
    // Add the remaining 3 emails here
];

interface AuthContextType {
    isLoggedIn: boolean;
    userEmail: string | null;
    userRole: 'admin' | 'user' | null;
    login: (email: string) => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userEmail, setUserEmail] = useState<string | null>(null);
    const [userRole, setUserRole] = useState<'admin' | 'user' | null>(null);

    const login = (email: string) => {
        setIsLoggedIn(true);
        setUserEmail(email);
        // Check if the user is one of the 6 authorized admins
        if (AUTHORIZED_ADMIN_EMAILS.includes(email.toLowerCase())) {
            setUserRole('admin');
        } else {
            setUserRole('user');
        }
    };

    const logout = () => {
        setIsLoggedIn(false);
        setUserEmail(null);
        setUserRole(null);
    };

    return (
        <AuthContext.Provider value={{ isLoggedIn, userEmail, userRole, login, logout }}>
            {children}
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
