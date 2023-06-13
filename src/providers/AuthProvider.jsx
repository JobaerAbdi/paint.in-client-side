import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { app } from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log("current user", currentUser);
      setLoading(false);
    });
    return () => {
      return unsubscribe();
    };
  }, []);





  
  //Create Mongodb user-------





  const createMongoUser = async (userObject) => {
    try {
      const response = await fetch("http://localhost:5000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userObject),
      });

      if (!response.ok) {
        throw new Error("Failed to create user");
      }

      // Handle success response
      console.log("User created successfully");
    } catch (error) {
      // Handle error
      console.error(error.message);
    }
  };










  // const handleCreateUser = (userObject) => {
  //   useEffect(() => {
  //     const createUser = async () => {
  //       try {
  //         const response = await fetch("http://localhost:5000/users", {
  //           method: "POST",
  //           headers: {
  //             "Content-Type": "application/json",
  //           },
  //           body: JSON.stringify(userObject),
  //         });

  //         if (!response.ok) {
  //           throw new Error("Failed to create user");
  //         }

  //         // Handle success response
  //         console.log("User created successfully");
  //       } catch (error) {
  //         // Handle error
  //         console.error(error.message);
  //       }
  //     };

  //     createUser();
  //   }, [userObject]);
  // };






  const authInfo = {
    user,
    loading,
    createUser,
    signIn,
    logOut,
    updateUserProfile,
    createMongoUser,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
