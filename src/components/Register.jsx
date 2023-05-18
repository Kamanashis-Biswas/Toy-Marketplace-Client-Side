import { useContext, useState } from "react";
import { AuthContext } from "./AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import { Button, Label, Spinner, TextInput } from "flowbite-react";
import { updateProfile } from "firebase/auth";


const Register = () => {

    const [loading, setLoading] = useState(false);
    const { createUser } = useContext(AuthContext);

    const [error, setError] = useState("");

    const navigate = useNavigate();
    const location = useLocation();
    console.log("Register page location", location);
    const from = location.state?.from?.pathname || "/";

    const handleRegister = (event) => {
        event.preventDefault();
        setLoading(true);
        setError("");
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        if (!/(?=.*[A-Z])/.test(password)) {
            setError("Please add at least one uppercase");
            setLoading(false);
            return;
        } else if (!/(?=.*[0-9].*[0-9])/.test(password)) {
            setError("Please add at least two numbers");
            setLoading(false);
            return;
        } else if (password.length < 6) {
            setError("Please add at least 6 characters in your password");
            setLoading(false);
            return;
        }

        createUser(email, password)
            .then((result) => {
                const createdUser = result.user;
                updateProfile(result.user, { displayName: name, photoURL: photo });
                console.log(createdUser);
                navigate(from, { replace: true });
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });
    };



    return (
        <div>
            <div className="flex flex-col gap-4 md:w-1/3 mx-auto">
                <h3 className="text-3xl text-center mt-5">Please Register</h3>
                <form
                    className="border p-10 rounded-xl"
                    onSubmit={handleRegister} >
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="name" value="Your Name" />
                        </div>
                        <TextInput className="mb-5"
                            id="name"
                            name="name"
                            type="text"
                            placeholder="Your Name"
                            required={true}
                            shadow={true}
                        />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="email" value="Your email" />
                        </div>
                        <TextInput className="mb-5"
                            id="email"
                            name="email"
                            type="email"
                            placeholder="name@company.com"
                            required={true}
                            shadow={true}
                        />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="password" value="Your password" />
                        </div>
                        <TextInput className="mb-5"
                            id="password"
                            type="password"
                            name="password"
                            placeholder="password"
                            required={true}
                            shadow={true}
                        />
                    </div>
                    <div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="photo" value="Photo URL" />
                            </div>
                            <TextInput className="mb-5"
                                id="photo"
                                name="photo"
                                type="text"
                                placeholder="Photo URL"
                                required={true}
                                shadow={true}
                            />
                        </div>
                    </div>
                    <Button className="mt-5 w-[200px]" type="submit">
                        {loading ? (
                            <Spinner aria-label="Default status example" />
                        ) : (
                            "Register new account"
                        )}
                    </Button>
                    <div className="container mx-auto">
                        <p className="text-danger text-center my-4">{error}</p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;