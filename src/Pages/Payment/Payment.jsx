import React, { useContext, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Payment = () => {
  const { userInfo, doFetch, setDoFetch } = useContext(AuthContext);


  const location = useLocation();
  const navigate = useNavigate();

  const data = location.state;
  console.log(data);

  const enrollinfo = {
    ...data,
    email: userInfo?.email
  }


  const [cardNumber, setCardNumber] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [cvv, setCvv] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();


    const postBooking = async () => {
      try {
        const response = await fetch("http://localhost:5000/enroll", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(enrollinfo),
        });
  
        if (!response.ok) {
          throw new Error("Failed to enroll");
        }
  
        // Handle success response
        console.log("enroll successfully");
        navigate('/dashboard/selectedclasses')
        // setDoFetch(true);
      } catch (error) {
        // Handle error
        console.error(error.message);
      }
    };
    postBooking()




    // Perform payment processing logic here
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-200">
      <div className="bg-white rounded-lg p-8 shadow-md">
        <h1 className="text-2xl font-bold mb-4">Payment Details</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="cardNumber" className="block font-semibold">
              Account Number
            </label>
            <input
              type="text"
              id="cardNumber"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              className="border border-gray-300 rounded-md p-2 w-full"
              placeholder="1234 5678 9012 3456"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="expirationDate" className="block font-semibold">
              Expiration Date
            </label>
            <input
              type="text"
              id="expirationDate"
              value={expirationDate}
              onChange={(e) => setExpirationDate(e.target.value)}
              className="border border-gray-300 rounded-md p-2 w-full"
              placeholder="MM/YY"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="cvv" className="block font-semibold">
              CVV
            </label>
            <input
              type="text"
              id="cvv"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
              className="border border-gray-300 rounded-md p-2 w-full"
              placeholder="123"
              required
            />
          </div>
          <button 

            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          >
            Confirm Payment
          </button>
        </form>
      </div>
    </div>
  );
};

export default Payment;
