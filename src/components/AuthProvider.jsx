import { createContext, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "./firebase/firebase.config";

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
                const expiryDays = 7;
                const expiryDate = new Date();
                expiryDate.setDate(expiryDate.getDate() + expiryDays);
                document.cookie = `access_token=${token}; path=/; expires=${expiryDate.toUTCString()}; secure;`;
            })
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