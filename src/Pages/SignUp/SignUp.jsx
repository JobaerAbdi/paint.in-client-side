import React, { useContext, useState } from "react";
import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";
import photo from "../../assets/Login/bnr.jpeg";
import photobg from "../../assets/Login/paintbg.png";
import { AuthContext } from "../../providers/AuthProvider";
import { Link } from "react-router-dom";

const SignUp = () => {
  const { createUser } = useContext(AuthContext);

  const [showPassword, setShowPassword] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handlePassword2Change = (e) => {
    setPassword2(e.target.value);
  };
  const handlePhotoUrlChange = (e) => {
    setPhotoUrl(e.target.value);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    console.log(name, email, password, password2, photoUrl);
    // createUser(email, password);
    // then((result) => {
    //   const user = result.user;
    //   console.log(user);
    // });
    // Perform login logic here
  };

  return (
    <div className=" container mx-auto">
      <div className=" md:flex flex-row-reverse justify-center items-start">
        <div
          style={{ backgroundImage: `url(${photobg})` }}
          className=" bg-cover mx-auto  flex items-center bg-blur backdrop-blur-2xl"
        >
          <div className="w-80  mx-auto  p-6 rounded-lg shadow-lg  bg-blur backdrop-blur-sm">
            <h2 className="text-2xl text-center font-bold mb-4">Sign Up </h2>
            <form onSubmit={handleSignUp}>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-500"
                  value={name}
                  onChange={handleNameChange}
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-500"
                  value={email}
                  onChange={handleEmailChange}
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-500"
                    value={password}
                    onChange={handlePasswordChange}
                    required
                  />
                  <span
                    className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500 cursor-pointer"
                    onClick={togglePasswordVisibility}
                  >
                    {showPassword ? (
                      <AiFillEye className="text-2xl"></AiFillEye>
                    ) : (
                      <AiFillEyeInvisible className="text-2xl"></AiFillEyeInvisible>
                    )}
                  </span>
                </div>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Confirm Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password2"
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-500"
                    value={password2}
                    onChange={handlePassword2Change}
                    required
                  />
                  <span
                    className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500 cursor-pointer"
                    onClick={togglePasswordVisibility}
                  >
                    {showPassword ? (
                      <AiFillEye className="text-2xl"></AiFillEye>
                    ) : (
                      <AiFillEyeInvisible className="text-2xl"></AiFillEyeInvisible>
                    )}
                  </span>
                </div>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="photoUrl"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  PhotoUrl
                </label>
                <input
                  type="text"
                  id="photoUrl"
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-500"
                  value={photoUrl}
                  onChange={handlePhotoUrlChange}
                  required
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-blue-500 text-white font-semibold px-4 py-2 rounded hover:bg-blue-600 transition duration-200"
              >
                Sign Up
              </button>
            </form>
            <div className="m-4 text-center">
              <Link
                to="/login"
                className="text-white p-1 rounded-md bg-gray-600 hover:underline"
              >
                Have account? Login
              </Link>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white font-semibold px-4 py-2 rounded hover:bg-blue-600 transition duration-200"
            >
              Sign In with GOOGLE
            </button>
          </div>
        </div>
        <img className="basis-1/2 md:w-1/2" src={photo}></img>
      </div>
    </div>
  );
};

export default SignUp;