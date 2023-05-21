import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../config/api";

const ViewDetails = () => {
    const { id } = useParams();
    const [toy, setToy] = useState({});
    const myCurrentRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        if (myCurrentRef.current) return;
        myCurrentRef.current = true;
        if (!localStorage.getItem('auth-status')) navigate('/login');
        api.get(`/toy/${id}`).then(data => {
            setToy(data.data);
        });
    }, [])

    return (
        <div>
            <h3>View Details page! {toy.toy_name} </h3>
        </div>
    );
};

export default ViewDetails; 