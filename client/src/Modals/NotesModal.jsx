


import React from 'react';
import { RxCrossCircled } from 'react-icons/rx';

const NotesModal = ({ onClose, note }) => {
  if (!note) return null; // Handle case when note data is not available or modal is closed

  return (
    <div className="flex bg-black bg-opacity-60 items-center justify-center top-0 left-0 right-0 bottom-0 fixed z-50">
      <div onClick={(event) => event.stopPropagation()} className="bg-white max-w-full h-fit flex flex-col p-4 w-[500px] max-h-[80vh] rounded-md relative overflow-y-auto">
        <RxCrossCircled onClick={onClose} className="text-4xl cursor-pointer text-red-600 absolute right-4 top-4" />
        <div>
          <p className="text-2xl font-bold">{note.topic}</p>
          <span className="text-xl mt-4 break-words">{note.notes}</span>
        </div>
      </div>
    </div>
  );
};

export default NotesModal;

