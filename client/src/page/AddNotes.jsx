

import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoChevronBackCircle } from "react-icons/io5";
import Spinner from "../components/Spinner.jsx";
import axios from "axios";
import { Context } from "../main";
import toast from "react-hot-toast";
import { Navigate } from "react-router-dom";

const AddNotes = () => {
  const [topic, setTopic] = useState("");
  const [notes, setNotes] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { isAuthenticated } = useContext(Context);



  const handleSubmit = async (e) => {
    //e.preventDefault();
    
    // e.preventDefault();
    // setIsLoading(true);
    try {
      setIsLoading(true);
      const { data } = await axios.post(
        `http://localhost:3000/notes`,
        {
          topic,
          notes,
        },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      // setTopic("");
      // setNotes("");
      toast.success(data.message);
      setIsLoading(false);
      navigate('/add_notes');
     
      //setRefresh((prev) => !prev);
    } catch (error) {
      toast.error(error.response.data.message);
      setIsLoading(false);
    }
  };




  if (!isAuthenticated) return <Navigate to={"/login"} />;
  
  return (
    <div>
      <div className="absolute left-10 top-36">
        <Link to="/add_notes">
          <IoChevronBackCircle className="-mt-6 text-5xl float-left cursor-pointer hover:shadow-outline" />
        </Link>
      </div>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="flex-wrap flex m-10 min-[500px]">
          <div className="bg-green-100 flex min-w-[460px] items-center justify-center p-10 flex-col w-[450px] m-auto mt-20 mb-20 rounded-md">
            <div className="mt-6">
              <label className="text-3xl font-bold float-left" htmlFor="Topic">
                Topic :
              </label>
              <div>
                <input
                  type="text"
                  id="Topic"
                  className="border-black w-[416px] mt-6 border-2 outline-none p-2 rounded-md focus:ring focus:border-purple-800"
                  placeholder="Enter topic"
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                />
              </div>
            </div>
            <div className="mt-6">
              <label className="text-3xl font-bold float-left" htmlFor="Notes">
                Notes :
              </label>
              <div>
                <textarea
                  type="text"
                  id="Notes"
                  className="border-black w-[416px] mt-6 border-2 outline-none p-2 rounded-md h-[105px] focus:ring focus:border-purple-800"
                  placeholder="Enter notes"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                />
              </div>
            </div>
            <button
              className="p-2 border-2 border-purple-900 text-2xl m-2 rounded-md font-bold text-green-950 transition duration-100 hover:bg-violet-300 hover:text-black delay-75 w-[416px]"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddNotes;
