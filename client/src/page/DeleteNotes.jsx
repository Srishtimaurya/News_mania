




import React, { useState } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import axios from 'axios';
import Spinner from '../components/Spinner';
import { IoChevronBackCircle } from 'react-icons/io5';
import '../index.css';

const DeleteNotes = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  const handleDelete = async () => {
    setIsLoading(true);
    console.log(`Attempting to delete note with id: ${id}`);
    try {
      await axios.delete(`http://localhost:3000/notes/${id}`, { withCredentials: true });
      console.log(`Note with id: ${id} deleted successfully`);
      setIsLoading(false);
      navigate('/add_notes');
    } 
	catch (error) {
      setIsLoading(false);
      console.log(`Error deleting note: ${error.message}`);
      if (error.response) {
        console.log(`Server responded with status: ${error.response.status}`);
        console.log(`Server response data: ${error.response.data}`);
      }
    }
  }

  return (
    <div className='flex items-center justify-center min-h-screen'>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="flex flex-col items-center justify-center">
          <div className="absolute left-10 top-36">
            <Link to='/add_notes'>
              <IoChevronBackCircle className='-mt-6 text-5xl float-left cursor-pointer hover:shadow-outline' />
            </Link>
          </div>
          <div className="md:w-[50%] lg:w-[40%] p-8">
            <p className="text-3xl text-center font-bold mb-6">
              Do you really want to delete the note you created?
              Rethink and then click the button below!
            </p>
            <button
              type="submit"
              className='w-full outline-none border-purple-950 border-2 rounded-md bg-blue-100 text-purple-800 hover:text-cyan-50 hover:bg-slate-950 duration-100 text-3xl submitBTN'
              onClick={handleDelete}
            >
              Delete
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DeleteNotes;

