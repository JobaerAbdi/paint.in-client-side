import React, { useContext } from "react";
// import toast from 'react-hot-toast';
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const AddClasses = () => {
  const { user, userInfo } = useContext(AuthContext);
  const role = userInfo?.userRole;

  const navigate = useNavigate();

  const current = new Date();
  const date = `${current.getFullYear()}-${current.getMonth() + 1}-${current.getDate()}`;

  const handleAddClass = (event) => {
    event.preventDefault();
    const form = event.target;
    const title = form.productName.value;
    const image = form.photoUrl.value;
    const price = form.originalPrice.value;
    const instructorName = form.sellerName.value;
    const instructorEmail = form.sellerEmail.value;
    const description = form.description.value;

    const newClass = {
      image,
      title,
      price,
      ratings: 4.2,
      instructorPhoto: userInfo?.photoUrl,
      instructorName,
      availableSeats: 50,
      enrolledStudent: 0,
      description,
      instructorEmail,
      postingDate : date,

    };

    fetch("http://localhost:5000/addclass", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newClass),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          // toast('product add successfully')
          form.reset();
          navigate("/dashboard/myclasses");
        }
      })
      .catch((er) => console.error(er));
  };
  if (role === "instructor") {
    return (
      <div className="mx-5 md:mx-10">
        <div className="text-center mb-6 pt-10 font-sans">
          <h2 className="text-2xl font-bold text-blue-600 my-3">
            you can add class here.
          </h2>
          {/* <h1 className="text-4xl font-bold ">Check out our popular classes!</h1> */}
          <p className="my-2 text-lg font-semibold">
            when and admin review year class. Then it will be approved.
            {/* <br /> Then your class will be visible to your student. */}
          </p>
        </div>
        <div>
          {user?.uid ? (
            <>
              <form onSubmit={handleAddClass}>
                <h2 className="text-2xl">Add your class</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-5">
                  <input
                    name="productName"
                    type="text"
                    placeholder="Class title"
                    className="input input-ghost w-full  input-bordered"
                    required
                  />
                  <input
                    name="photoUrl"
                    type="text"
                    placeholder="Input class PhotoUrl"
                    className="input input-ghost w-full  input-bordered"
                    required
                  />
                  <input
                    name="originalPrice"
                    type="text"
                    placeholder="Class fee"
                    className="input input-ghost w-full  input-bordered"
                    required
                  />

                  <input
                    name="sellerName"
                    defaultValue={userInfo?.name}
                    type="text"
                    placeholder="Write Your Name"
                    className="input input-ghost w-full  input-bordered"
                    readOnly
                    required
                  />
                  <input
                    name="sellerEmail"
                    defaultValue={userInfo?.email}
                    type="text"
                    placeholder="Write Your Name"
                    className="input input-ghost w-full  input-bordered"
                    readOnly
                    required
                  />
                  <input
                    name="phone"
                    type="text"
                    placeholder="phone"
                    className="input input-ghost w-full  input-bordered"
                    required
                  />
                </div>
                <textarea
                  name="description"
                  className="textarea textarea-bordered h-24 w-full"
                  placeholder="Class description"
                  required
                ></textarea>

                <input className="btn " type="submit" value="Add Class" />
              </form>
            </>
          ) : (
            <>
              <p className="text-center text-dark-500 font-bold text-2xl m-8">
                Please Login first for add sevice
              </p>
            </>
          )}
        </div>
      </div>
    );
  }
};

export default AddClasses;
