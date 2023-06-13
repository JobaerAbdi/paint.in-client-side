import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  signInWithPopup,
} from "firebase/auth";
import { app } from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userInfo, setUserInfo] = useState("");
  const [loading, setLoading] = useState(true);
  const [doFetch, setDoFetch] = useState(false);


  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const providerLogin = (provider) => {
    return signInWithPopup(auth, provider);
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
    fetch(`http://localhost:5000/users/${user?.email}`)
        .then(res => res.json())
        .then(data => {
            if(data[0]){
                setUserInfo(data[0])
            }
            
        })
}, [user?.email])



  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
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
    userInfo,
    loading,
    createUser,
    signIn,
    logOut,
    updateUserProfile,
    createMongoUser,
    providerLogin,
    doFetch, 
    setDoFetch
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
