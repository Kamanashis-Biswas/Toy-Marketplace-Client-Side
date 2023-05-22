import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../config/api";
import { Card } from "flowbite-react";

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
            <Card>
                <img className="h-[500px]" src={toy.photoUrl} alt="" />
                <h2 className="text-3xl font-bold">Toy Name:{toy.toy_name} </h2>
                <p className="text-2xl">Seller Name: {toy.seller_name} </p>
                <p className="text-2xl">Seller Email: {toy.seller_email}</p>
                <p className="text-2xl">Price: {toy.price}</p>
                <p className="text-2xl">Rating: {toy.rating}/5</p>
                <p className="text-2xl">Avaiable Quentity: {toy.avail_qty}</p>
                <p className="text-2xl">Description: {toy.descriptions}</p>
            </Card>
        </div>
    );
};

export default ViewDetails; 