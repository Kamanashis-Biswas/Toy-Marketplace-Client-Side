import { Button, Label, Select, TextInput, Textarea } from "flowbite-react";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../components/AuthProvider";
import api from "../config/api";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddAToy = () => {
    const notify = () => toast("Product Added");
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    useEffect(() => {
        if (!localStorage.getItem('auth-status')) navigate('/login');
    }, []);

    const handleAddToy = async (event) => {
        event.preventDefault();
        const form = event.target;
        const toy_name = form.toy_name.value;
        // const seller_name = form.seller_name.value;
        // const seller_email = form.seller_email.value;
        const category = form.category.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const avail_qty = form.quantity.value;
        const photo = form.toy_photo.value;
        const descriptions = form.comment.value;

        const resp = await api.post("/create-toy", { toy_name, category, price, rating, avail_qty, descriptions,photo });
        form.reset();
        // if(resp) navigate('/');
    };

    return (
        <div className="p-3 text-center">
            <form onSubmit={handleAddToy}>
                <div className="md:flex gap-10 justify-between">
                    <div className="md:w-1/2 mb-6">
                        <div className="mb-2 block">
                            <Label
                                htmlFor="toy_name"
                                value="Toy Name"
                            />
                        </div>
                        <TextInput
                            id="toy_name"
                            name="toy_name"
                            type="text"

                        />
                    </div>
                    <div className="md:w-1/2 mb-6">
                        <div className="mb-2 block">
                            <Label
                                htmlFor="seller_name"
                                value="Seller Name"
                            />
                        </div>
                        <TextInput
                            id="seller_name"
                            name="seller_name"
                            type="text"
                            defaultValue={user?.displayName || ""}
                            disabled={true}
                        />
                    </div>
                </div>
                <div className="md:flex gap-10 justify-between">
                    <div className="md:w-1/2 mb-6">
                        <div className="mb-2 block">
                            <Label
                                htmlFor="seller_email"
                                value="Seller Email"
                            />
                        </div>
                        <TextInput
                            id="seller_email"
                            name="seller_email"
                            type="email"
                            defaultValue={user?.email || ""}
                            disabled={true}

                        />
                    </div>
                    <div className="md:w-1/2 mb-6">
                        <div className="mb-2 block">
                            <Label
                                htmlFor="category"
                                value="Sub-category"
                            />
                        </div>
                        <Select
                            id="category"
                            name="category"
                            required={true}
                        >
                            <option value="sports_car">
                                Sports Car
                            </option>
                            <option value="truck">
                                Truck
                            </option>
                            <option value="regular_car">
                                Regular Car
                            </option>
                            <option value="mini_fire_truck">
                                Mini Fire Truck
                            </option>
                        </Select>
                    </div>
                </div>
                <div className="md:flex gap-10 justify-between">
                    <div className="md:w-1/2 mb-6">
                        <div className="mb-2 block">
                            <Label
                                htmlFor="price"
                                value="Price"
                            />
                        </div>
                        <TextInput
                            id="price"
                            type="text"
                            name="price"

                        />
                    </div>
                    <div className="md:w-1/2 mb-6">
                        <div className="mb-2 block">
                            <Label
                                htmlFor="rating"
                                value="Rating"
                            />
                        </div>
                        <TextInput
                            id="rating"
                            type="text"
                            name="rating"
                        />
                    </div>
                </div>
                <div className="md:flex gap-10 justify-between">
                    <div className="md:w-1/2 mb-6">
                        <div className="mb-2 block">
                            <Label
                                htmlFor="quantity"
                                value="Available Quantity"
                            />
                        </div>
                        <TextInput
                            id="quantity"
                            name="quantity"
                            type="text"

                        />
                    </div>
                    <div className="md:w-1/2 mb-6">
                        <div className="mb-2 block">
                            <Label
                                htmlFor="toy_photo"
                                value="Photo URL of Toy"
                            />
                        </div>
                        <TextInput
                            id="toy_photo"
                            name="toy_photo"
                            type="text"
                            required
                        />
                    </div>
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="comment"
                            value="Description of Toy"
                        />
                        <Textarea
                            id="comment"
                            name="comment"
                            placeholder="Description of Toy..."
                            required={true}
                            rows={4}
                        />
                    </div>
                </div>
                <div className="flex mt-4 justify-center">
                    <Button type="submit" onClick={notify}>Add A Toy</Button>
                    <ToastContainer />
                </div>
            </form>
        </div>
    );
};

export default AddAToy;