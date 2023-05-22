import { Button, Label, Select, TextInput, Textarea } from "flowbite-react";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../components/AuthProvider";
import api from "../config/api";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ToyForm from "../components/ToyForm";

const UpdateAToy = () => {
    const notify = () => toast("Product Updated!");
    const { user } = useContext(AuthContext);
    const {id} = useParams();
    const navigate = useNavigate();
    const [toy, setToy] = useState(null);
    useEffect(() => {
        if (!localStorage.getItem('auth-status')) navigate('/login');
    }, []);
    useEffect(()=>{
        api.get(`/toy/${id}`).then(resp=>{
            setToy(resp.data);
        })
    }, []);

    const updateAToy = async (data)=>{
        const resp = await api.patch(`/toy/${id}`, data);
        await notify();
        return resp;
    }

    return (
        <div className="p-3 text-center">
            <ToyForm data={toy} navigate={navigate} handleSubmit={updateAToy} user={user}></ToyForm>
            <ToastContainer />
        </div>
    );
};

export default UpdateAToy;