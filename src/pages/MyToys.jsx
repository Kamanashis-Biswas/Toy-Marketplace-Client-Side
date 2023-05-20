import { useContext, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../components/AuthProvider";


const MyToys = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    useEffect(()=>{
        if(!user) navigate('/login');
    }, []);
    return (
        <div>
            <h2>My Toys</h2>
        </div>
    );
};

export default MyToys;