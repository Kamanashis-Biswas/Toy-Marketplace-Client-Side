import { createContext, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "./firebase/firebase.config";
import api from "../config/api";

export const AuthContext = createContext(null);

const auth = getAuth(app);
const googleAuthProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleAuthProvider);
    };

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    };


    useState(() => {
        const unsubscribe = onAuthStateChanged(auth, (loggedUser) => {
            if(!loggedUser) localStorage.removeItem("auth-status");
            else localStorage.setItem('auth-status', true);
            loggedUser?.getIdToken().then(token=>{
                console.log(token);
                const expiryDays = 7;
                const expiryDate = new Date();
                expiryDate.setDate(expiryDate.getDate() + expiryDays);
                // api.post('/set-cookies', {__session:token}).then(resp=>{
                //     console.log(resp);
                // })
                localStorage.setItem('access_token', token);
                // document.cookie = `__session=${token}; domain=.vercel.app; path=/; expires=${expiryDate.toUTCString()};httpOnly=false; sameSite=none; secure`;
                console.log(document.cookie);
            });
            setUser(loggedUser);
            setLoading(false);
        });
        return () => {
            unsubscribe();
        };
    }, []);

    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        signInWithGoogle,
        logOut
    };

    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;