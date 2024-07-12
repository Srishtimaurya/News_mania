




import React, { useContext,useState, useEffect } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import axios from 'axios';
import Spinner from '../components/Spinner.jsx';
import { IoChevronBackCircle } from 'react-icons/io5';
import { Context } from "../main";
import toast from "react-hot-toast";
import { Navigate } from "react-router-dom";

const EditNotes = () => {
  const [topic, setTopic] = useState('');
  const [notes, setNotes] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  //const { isAuthenticated } = useContext(Context);
  const navigate = useNavigate();
  const { id } = useParams();
  const URL = `http://localhost:3000/notes/${id}`;
  const data = { topic, notes };

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        setIsLoading(true);
        console.log('Fetching details from:', URL);
        const response = await axios.get(URL);
        console.log('Response received:', response.data);
        setTopic(response.data.topic);
        setNotes(response.data.notes);
        setIsLoading(false);
      } catch (error) {
        console.log('Error fetching note details:', error.message);
        console.log('Error details:', error);
        if (error.response) {
          console.log('Error response data:', error.response.data);
          console.log('Error response status:', error.response.status);
          console.log('Error response headers:', error.response.headers);
        }
        setIsLoading(false);
      }
    };
    fetchDetails();
  }, []);

  const handleEdit = async () => {
    try {
      setIsLoading(true);
      await axios.put(URL, data);
      setIsLoading(false);
      navigate('/add_notes');
    } catch (error) {
      setIsLoading(false);
      console.log('Error editing note:', error.message);
    }
  };

  
 // if (!isAuthenticated) return <Navigate to={"/login"} />;
  
  
  return (
    <div>
      <div className="absolute left-10 top-36">
        <Link to='/add_notes'>
          <IoChevronBackCircle className='-mt-6 text-5xl float-left cursor-pointer hover:shadow-outline' />
        </Link>
      </div>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="bg-green-100 flex min-w-[460px] items-center justify-center p-10 flex-col w-[450px] m-auto mt-20 mb-20 rounded-md">
          <div className="text-left text-2xl font-bold">
            Edit Notes
          </div>
          <input
            type="text"
            className='border-black w-[416px] mt-6 border-2 outline-none p-2 rounded-md focus:ring focus:border-purple-800'
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
          />
          <textarea
            type='text'
            className='border-black w-[416px] mt-6 border-2 outline-none p-2 rounded-md h-[105px] focus:ring focus:border-purple-800'
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          />
          <button
            className="p-2 border-2 border-purple-900 text-2xl m-2 rounded-md font-bold text-green-950 transition duration-100 hover:bg-violet-300 hover:text-black delay-75 w-[416px]"
            onClick={handleEdit}
          >
            Save
          </button>
        </div>
      )}
    </div>
  );
};

export default EditNotes;


