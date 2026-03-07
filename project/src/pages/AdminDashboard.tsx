import React, { useEffect, useState } from 'react';

import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import { db } from '../lib/firebase/config';
import { useAuth } from '../contexts/AuthContext';
import { Navigate } from 'react-router-dom';
import { Users, Loader } from 'lucide-react';

interface VolunteerRegistration {
    id: string;
    name: string;
    email: string;
    phone: string;
    areaOfInterest: string;
    experience?: string;
    availability?: string;
    createdAt: any;
    driveId: string;
}

const AdminDashboard: React.FC = () => {
    const { userRole, loading } = useAuth();
    const [registrations, setRegistrations] = useState<VolunteerRegistration[]>([]);
    const [fetching, setFetching] = useState(true);

    useEffect(() => {
        const fetchRegistrations = async () => {
            if (userRole !== 'admin') return;

            try {
                const q = query(collection(db, 'drive_registrations'), orderBy('createdAt', 'desc'));
                const querySnapshot = await getDocs(q);
                const data: VolunteerRegistration[] = [];
                querySnapshot.forEach((doc) => {
                    data.push({ id: doc.id, ...doc.data() } as VolunteerRegistration);
                });
                setRegistrations(data);
            } catch (error) {
                console.error('Error fetching registrations:', error);
            } finally {
                setFetching(false);
            }
        };

        if (!loading) {
            fetchRegistrations();
        }
    }, [userRole, loading]);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center pt-16">
                <Loader size={40} className="animate-spin text-primary-500" />
            </div>
        );
    }

    if (userRole !== 'admin') {
        return <Navigate to="/" replace />;
    }

    return (
        <div className="min-h-screen pt-24 pb-12 bg-gray-50 dark:bg-dark-bg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-8 flex items-center space-x-3">
                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center text-primary-600">
                        <Users size={24} />
                    </div>
                    <div>
                        <h1 className="text-3xl font-bold text-secondary-500 dark:text-dark-text">Admin Dashboard</h1>
                        <p className="text-gray-600 dark:text-gray-300">View and manage latest volunteer registrations.</p>
                    </div>
                </div>

                {fetching ? (
                    <div className="flex items-center justify-center py-12">
                        <Loader size={40} className="animate-spin text-primary-500" />
                    </div>
                ) : (
                    <div className="bg-white dark:bg-dark-surface shadow-md rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
                        <div className="overflow-x-auto">
                            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                                <thead className="bg-gray-50 dark:bg-gray-800">
                                    <tr>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Date</th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Name</th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Email & Phone</th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Interest</th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Experience</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white dark:bg-dark-surface divide-y divide-gray-200 dark:divide-gray-700">
                                    {registrations.length === 0 ? (
                                        <tr>
                                            <td colSpan={5} className="px-6 py-8 text-center text-gray-500 dark:text-gray-400">
                                                No volunteer registrations found.
                                            </td>
                                        </tr>
                                    ) : (
                                        registrations.map((reg) => (
                                            <tr key={reg.id} className="hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-300">
                                                    {reg.createdAt?.toDate ? reg.createdAt.toDate().toLocaleDateString() : 'N/A'}
                                                </td>
                                                <td className="px-6 py-4 font-medium text-sm text-gray-900 dark:text-white">
                                                    {reg.name}
                                                </td>
                                                <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
                                                    <div className="flex flex-col">
                                                        <span>{reg.email}</span>
                                                        <span>{reg.phone}</span>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                                                    <span className="px-2 py-1 bg-primary-100 text-primary-800 text-xs font-medium rounded-full">
                                                        {reg.areaOfInterest}
                                                    </span>
                                                </td>
                                                <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400 max-w-xs truncate" title={reg.experience}>
                                                    {reg.experience || '-'}
                                                </td>
                                            </tr>
                                        ))
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AdminDashboard;
