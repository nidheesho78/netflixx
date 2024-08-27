import Header from "./Header";
import { background } from "../assets";
import { useRef, useState } from "react";
import checkValidData from "../utils/validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {

    const dispatch = useDispatch()

    const [isSignIn, setIsSignIn] = useState(true)
    const [errorMessage, setErrorMessage] = useState(null)

    const name = useRef(null)
    const email = useRef(null);
    const password = useRef(null);

    const navigate = useNavigate()


    const toggleSignInForm = () => {
        setIsSignIn(!isSignIn);
      }

      const handleButtonClick = () => {
        //Validate the form data
        
        console.log(email.current.value)
        console.log(password.current.value)
        const message = checkValidData(email.current.value, password.current.value);
       setErrorMessage(message)
if(message) return;

if(!isSignIn) {

        //signup logic

createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed up
    const user = userCredential.user;
    updateProfile(user, {
      displayName: name.current.value,
      photoURL:
        "https://github.com/accounthttps://avatars.githubusercontent.com/u/127939143?v=4",
    })
      .then(() => {
        // Profile updated!
        const { uid, email, displayName, photoURL } = auth.currentUser;
        dispatch(addUser(uid, email, displayName, photoURL));

         navigate("/browse");
      })
      .catch((error) => {
        // An error occurred
      setErrorMessage(error.message)
      });

    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
    // console.error(errorCode, errorMessage);
    setErrorMessage(errorCode + "-" + errorMessage)
  });

      }else {

        //sign in logic
        signInWithEmailAndPassword(auth, email.current.value, password.current.value)
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log(user)
             navigate("/browse");

          
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(errorCode + "-" + errorMessage)
          });


      }
    }
return (
  <div>
    <Header />
    <div className="absolute">
      <img src={background} alt="background" />
    </div>
    <form onSubmit={(e) => e.preventDefault()} className="absolute p-12 bg-black w-3/12 my-36 mx-auto right-0 left-0 text-white bg-opacity-80">
      <h1 className="text-3xl font-bold py-4">
        {isSignIn ? "Sign In" : "Sign Up"}
      </h1>

      {!isSignIn && (
        <input
        ref={name}
          type="text"
          placeholder="Full Name"
          className="p-4 my-4 w-full bg-gray-700"
        />
      )}

      <input
      ref={email}
        type="text"
        placeholder="Email Address"
        className="p-4 my-4 w-full bg-gray-700"
      />
      <input
      ref={password}
        type="password"
        placeholder="Password"
        className="p-4 my-4 w-full bg-gray-700"
      />
      <p className="text-red-500 py-2 font-bold text-lg">{errorMessage}</p>
      <button className="p-4 my-6 w-full  bg-red-700  rounded-lg"
      onClick={handleButtonClick}>
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