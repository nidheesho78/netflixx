import Header from "./Header";
import { background } from "../assets";
import { useState } from "react";


const Login = () => {

    const [isSignIn, setIsSignIn] = useState(true)

    const toggleSignInForm = () => {
        setIsSignIn(!isSignIn);
      }
return (
  <div>
    <Header />
    <div className="absolute">
      <img src={background} alt="background" />
    </div>
    <form className="absolute p-12 bg-black w-3/12 my-36 mx-auto right-0 left-0 text-white bg-opacity-80">
      <h1 className="text-3xl font-bold py-4">
        {isSignIn ? "Sign In" : "Sign Up"}
      </h1>

      {!isSignIn && (
        <input
          type="text"
          placeholder="Full Name"
          className="p-4 my-4 w-full bg-gray-700"
        />
      )}

      <input
        type="text"
        placeholder="Email Address"
        className="p-4 my-4 w-full bg-gray-700"
      />
      <input
        type="password"
        placeholder="Password"
        className="p-4 my-4 w-full bg-gray-700"
      />
      <button className="p-4 my-6 w-full  bg-red-700  rounded-lg">
        {isSignIn ? "Sign In" : "Sign Up"}
      </button>
      <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
        {isSignIn
          ? "New to Netflix? Sign Up Now"
          : "Already registered? Sign In Now"}
      </p>
    </form>
  </div>
);
}

export default Login;