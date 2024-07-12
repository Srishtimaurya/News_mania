

import React, { useContext, useEffect, useState } from "react";

import { Navigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import axios from 'axios';
import { FaStickyNote } from 'react-icons/fa';
import { MdEdit, MdDelete } from 'react-icons/md';
import { CiCalendarDate } from 'react-icons/ci';
import NotesModal from '../Modals/NotesModal';
import DatesModal from '../Modals/DatesModal';
import Spinner from './Spinner';

import { Context } from "../main";
import toast from "react-hot-toast";


const NotesCard = () => {
  const [notes, setNotes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedNote, setSelectedNote] = useState(null);
  const [notesModal, setNotesModal] = useState(false);
  const [datesModal, setDatesModal] = useState(false);

  
  
  const { isAuthenticated } = useContext(Context);



  const API_URL = 'http://localhost:3000/notes';

  const getNotes = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(API_URL, { withCredentials: true });
      setNotes(response.data.notes);  // Ensure this matches your data structure
    } catch (error) {
      console.log(error.message);
      toast.error(error.response?.data?.message || error.message);
    } finally {
      setIsLoading(false);
    }
  };
  
  useEffect(() => {
    getNotes();
  }, []);
  
  
  if (!isAuthenticated) return <Navigate to={"/login"} />;

  const openNotesModal = (note) => {
    setSelectedNote(note);
    setNotesModal(true);
  };

  const closeNotesModal = () => {
    setSelectedNote(null);
    setNotesModal(false);
  };

  const openDatesModal = (note) => {
    setSelectedNote(note);
    setDatesModal(true);
  };

  const closeDatesModal = () => {
    setSelectedNote(null);
    setDatesModal(false);
  };

  return (
    <div>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="flex items-center justify-center mt-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {notes.map((note, index) => (
              <div key={note.id} className='border-cyan-600 hover:shadow-2xl text-2xl bg-blue-50 border-4 rounded-md p-6 relative'>
                <div className='text-2xl text-purple-950'>
                  <span className='font-bold'>S.No :</span> {index + 1}
                </div>
                <div className='mt-6'>
                  <span className='font-bold'>Topic :</span> {note.topic}
                </div>
                <div className='mt-4'>
                  <span className='font-bold'>Date :</span> {new Date(note.createdAt).toDateString()}
                </div>
                <div className='flex items-center justify-evenly mt-6 text-4xl'>
                  <FaStickyNote className='text-purple-950 cursor-pointer' onClick={() => openNotesModal(note)} />
                  <Link to={`/notes/edit/${note._id}`}>
                    <MdEdit className='text-green-800 cursor-pointer' />
                  </Link>
                  <Link to={`/notes/delete/${note._id}`}>
                    <MdDelete className='text-red-800 cursor-pointer' />
                  </Link>
                  <CiCalendarDate className='text-yellow-500 text-5xl cursor-pointer' onClick={() => openDatesModal(note)} />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {notesModal && selectedNote && (
        <NotesModal
          onClose={closeNotesModal}
          note={selectedNote}
        />
      )}

      {datesModal && selectedNote && (
        <DatesModal
          onClose={closeDatesModal}
          note={selectedNote}
        />
      )}
    </div>
  );
};

export default NotesCard;
