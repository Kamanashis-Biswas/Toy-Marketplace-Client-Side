import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button, Label, Spinner, TextInput } from "flowbite-react";
import { AuthContext } from "../components/AuthProvider";


const Login = () => {
    const [loading, setLoading] = useState(false);
    const { signIn, signInWithGoogle } =
    useContext(AuthContext);
    const navigate = useNavigate();
  const location = useLocation();
  console.log("Login page location", location);
  const from = location.state?.from?.pathname || "/";

  const [error, setError] = useState("");


    const handleLogin = (event) => {
        event.preventDefault();
        setLoading(true);
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        setError("");
    
        signIn(email, password)
          .then((result) => {
            const loggedUser = result.user;
            console.log(loggedUser);
            console.log(loggedUser.getIdTocken());
            navigate(from, { replace: true });
          })
          .catch((error) => {
            setError(error.message);
            setLoading(false);
          });
      };

      const handleGoogleSignIn = () => {
        signInWithGoogle()
          .then((result) => {
            const loggedUser = result.user;
            console.log(loggedUser);
            navigate(from, { replace: true });
          })
          .catch((error) => {
            console.log(error);
          });
      };


    return (
        <div>
      <h3 className="text-3xl text-center">Please Login</h3>
      <div>
        <form
          onSubmit={handleLogin}
          className="flex flex-col gap-4 p-3 md:w-1/3 mx-auto"
        >
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email" value="Your email" />
            </div>
            <TextInput
              id="email"
              name="email"
              type="email"
              placeholder="name@company.com"
              required={true}
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password" value="Your password" />
            </div>
            <TextInput
              id="password"
              type="password"
              name="password"
              placeholder="password"
              required={true}
            />
          </div>
          <Button disabled={loading} type="submit">
            {loading ? (
              <Spinner aria-label="Default status example" />
            ) : (
              "Login"
            )}
          </Button>
          <div className="relative py-2">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-b border-gray-300"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="bg-white px-4 text-sm text-gray-500">Or</span>
            </div>
          </div>
          <div className="md:flex">
            <button
              onClick={handleGoogleSignIn}
              type="button"
              className="w-full text-gray-400 hover:text-white border border-gray-400 hover:bg-gray-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            >
              <span className="flex justify-center items-center">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 488 512"
                  className="mr-2 h-5 w-5"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path>
                </svg>
                <span>Sign in with Google</span>
              </span>
            </button>
          </div>
          <p className="text-center">
            Don’t have an account yet? <Link to="/register">SignUp</Link>
          </p>
          <div className="container mx-auto">
            <p className="text-danger text-center my-4">{error}</p>
          </div>
        </form>
      </div>
    </div>
    );
};

export default Login;