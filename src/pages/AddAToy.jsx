import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../components/AuthProvider";
import api from "../config/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ToyForm from "../components/ToyForm";

const AddAToy = () => {
  const notify = () => toast("Product Added");
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("auth-status")) navigate("/login");
  }, []);

  const addAToy = async (data) => {
    const resp = await api.post("/create-toy", data);
    notify();
    return resp;
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="p-3 text-center">
        <ToyForm
          navigate={navigate}
          handleSubmit={addAToy}
          user={user}
        ></ToyForm>
        <ToastContainer />
      </div>
    </div>
  );
};

export default AddAToy;
