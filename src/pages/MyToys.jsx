import { useContext, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../components/AuthProvider";
import MyToyCard from "../components/MyToyCard";


const MyToys = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    useEffect(()=>{
        if(!user) navigate('/login');
    }, []);
    return (
        <div>
           <MyToyCard></MyToyCard>
        </div>
    );
};

export default MyToys;