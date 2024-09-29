'use client';
import { getCookie } from '@/lib/utils';
import { getMe } from '@/shared/api/auth/auth';
import { IUser } from '@/shared/types/user.interface';
import { useRouter } from 'next/navigation';
import { createContext, useContext, useEffect, useState } from 'react';

interface IContextType {
    user: IUser;
    setUser: React.Dispatch<React.SetStateAction<IUser>>;
    isAuth: boolean;
    setIsAuth: React.Dispatch<React.SetStateAction<boolean>>;
}

const INITIAL_USER: IUser = {
    id: '',
    email: '',
    name: '',
    password: '',
    updatedAt: 10,
    createdAt: 10,
};

const INITIAL_STATE = {
    user: INITIAL_USER,
    isAuth: false,
    setUser: () => { },
    setIsAuth: () => { },
};

const AuthContext = createContext<IContextType>(INITIAL_STATE);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<IUser>(INITIAL_USER);
    const router = useRouter()
    const [isAuth, setIsAuth] = useState(false);
    const checkAuthUser = async () => {
        try {
            const currAcc = await getMe()
            if (currAcc) {
                setUser(currAcc.data)
                setIsAuth(true)
                return true
            }
            return false
        } catch (error) {
            console.log(error)
            return false
        }
    }
    useEffect(() => {
        checkAuthUser()
    }, []);
    const value = {
        user,
        setUser,
        isAuth,
        setIsAuth,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;

export const useAuth = () => useContext(AuthContext);
