import React, { useContext, useState } from "react";
import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";
import photo from "../../assets/Login/bnr.jpeg";
import photobg from "../../assets/Login/paintbg.png";
import { AuthContext } from "../../providers/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { GoogleAuthProvider } from "firebase/auth";

const Login = () => {
  const navigate = useNavigate()
  const { signIn, providerLogin, createMongoUser } = useContext(AuthContext);

  const [showPassword, setShowPassword] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(email, password);
    signIn(email, password)
    .then((result) => {
      const user = result.user;
      // console.log(user);
      navigate('/')
      window.location.reload(true);
    });
    // Perform login logic here
  };



  const googleProvider = new GoogleAuthProvider();
  const handleGoogleSignIn = () =>{
      providerLogin(googleProvider)
      .then(result => {
          if(result.user){
            const userObject = {
              email : result.user.email,
              name: result.user.displayName,
              photoUrl: result.user.photoURL,
              userRole: "student"
            }
            // console.log(phor)
            createMongoUser(userObject)
          }
          navigate('/')
          window.location.reload(true);
      })
      .catch(err => console.log(err))
  }

  

  return (
    <>
      <Helmet>
        <title>Login | Paint.in</title>
      </Helmet>
      <div className=" container mx-auto">
        <div className=" md:flex flex-row-reverse justify-center items-start">
          <div
            style={{ backgroundImage: `url(${photobg})` }}
            className=" bg-cover mx-auto md:mt-10 flex items-center bg-blur backdrop-blur-2xl"
          >
            <div className="w-80  mx-auto  p-6 rounded-lg shadow-lg  bg-blur backdrop-blur-sm">
              <h2 className="text-2xl text-center font-bold mb-4">Login </h2>
              <form onSubmit={handleLogin}>
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
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white font-semibold px-4 py-2 rounded hover:bg-blue-600 transition duration-200"
                >
                  Log in
                </button>
              </form>
              <div className="m-4 text-center">
                <Link
                  to="/signup"
                  className="text-white p-1 rounded-md bg-gray-600 hover:underline"
                >
                  or, Create an account
                </Link>
              </div>
              <button
              onClick={handleGoogleSignIn}
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
    </>
  );
};

export default Login;
