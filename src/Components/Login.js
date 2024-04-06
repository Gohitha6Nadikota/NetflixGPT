import React,{useState} from 'react'
import Header from './Header';
const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const handleChange = () => {
    setIsSignUp(!isSignUp);
  }
  return (
    <div className="">
      <Header />
      <div className="absolute">
        <img
          className=""
          src="https://assets.nflxext.com/ffe/siteui/vlv3/7ca5b7c7-20aa-42a8-a278-f801b0d65fa1/fb548c0a-8582-43c5-9fba-cd98bf27452f/IN-en-20240326-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt="bgimage"
        />
      </div>
      <form className="w-3/12 absolute p-12 text-white bg-black my-36 mx-auto right-0 left-0 bg-opacity-80 rounded-lg">
        <h1 className="font-bold text-3xl py-4">
          {isSignUp ? "Sign Up" : "Sign In"}
        </h1>
        {isSignUp && (
          <input
            className="my-2 p-2 w-full bg-gray-700"
            type="text"
            placeholder="Full Name"
          />
        )}
        <input
          className="my-2 p-2 w-full bg-gray-700"
          type="text"
          placeholder="Email or phone number"
        />
        <input
          className="my-2 p-2 w-full bg-gray-700"
          type="password"
          placeholder="Password"
        />
        <button type="submit" className="p-3 my-3 bg-red-700 w-full rounded-lg">
          {isSignUp ? "Sign Up" : "Sign In"}
        </button>
        <p className="cursor-pointer" onClick={handleChange}>
          {isSignUp
            ? "New to Netflix ? Sign Up Now"
            : "Already Registered? Sign In Now"}
        </p>
      </form>
    </div>
  );
}

export default Login