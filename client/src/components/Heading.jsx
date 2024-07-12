// //Heading.jsx
// import React, {
// 	useState
// } from 'react';
// import NotesCard
// 	from './NotesCard';
// import NotesTable
// 	from './NotesTable';
// import {
// 	Link
// } from 'react-router-dom';
// import {
// 	FaSquarePlus
// } from 'react-icons/fa6';


// // import { Context} from "../main";


// const Heading = () => {
// 	const [tableNotes, setTableNotes] = useState(false);
// 	const [cardNotes, setCardNotes] = useState(false);

//     // const { isAuthenticated } = useContext(Context);


//     // if (!isAuthenticated) return <Navigate to={"/login"} />;


// 	return (
// 		<div>
			


// <h2 className="font-bold text-3xl max-md:ml-28 max-md:w-[300px] text-center pt-24">
//         Make Important Notes
//     </h2>

//     <div className="max-md:ml-[385px] flex items-center justify-center max-sm:ml-[100px] pt-8 gap-4">
//         <button className="shadow-lg p-1.5 w-20 text-lg rounded border-2 bg-indigo-200 font-semibold border-purple-600 transition duration-100 hover:bg-violet-800 hover:text-white delay-75"
//                 onClick={() => {
//                     setTableNotes(true);
//                     setCardNotes(false);
//                 }}
//         >
//             Table
//         </button>
//         <button className="shadow-lg p-1.5 w-20 text-lg rounded border-2 bg-indigo-200 font-semibold border-purple-600 transition duration-100 hover:bg-violet-800 hover:text-white delay-75"
//                 onClick={() => {

//                     setCardNotes(true);
//                     setTableNotes(false);
//                 }}
//         >
//             Card
//         </button>
//     </div>

//     <div className="max-md:float-right pr-36 float-right mt-8">
//         <Link to="/notes/create">
//             <FaSquarePlus className="text-5xl cursor-pointer hover:shadow-outline" />
//         </Link>
//     </div>

//     {tableNotes ? <NotesTable /> : <NotesCard />}
// </div>

// )
// };
// export default Heading;



import React, { useEffect, useContext,useState } from 'react';
import NotesCard from './NotesCard';
import NotesTable from './NotesTable';
import { Link } from 'react-router-dom';
import { FaSquarePlus } from 'react-icons/fa6';
import { Navigate } from "react-router-dom";
import axios from "axios";
import { Context } from "../main";
import toast from "react-hot-toast";

const Heading = () => {
  const [tableNotes, setTableNotes] = useState(false);
  const [cardNotes, setCardNotes] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [notes, setNotes] = useState([]);
   const { isAuthenticated} = useContext(Context);

 


  useEffect(() => {
    axios
      .get(`http://localhost:3000/notes`, {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res.data.notes);
        setNotes(res.data.notes);
      })
      .catch((e) => {
        toast.error(e.response.data.message);
      });
  }, []);

  if (!isAuthenticated) return <Navigate to={"/login"} />;


  console.log("Heading component rendered");

  return (
    <div>
      <h2 className="font-bold text-3xl max-md:ml-28 max-md:w-[300px] text-center pt-24">
        Make Important Notes
      </h2>

      <div className="max-md:ml-[385px] flex items-center justify-center max-sm:ml-[100px] pt-8 gap-4">
        <button
          className="shadow-lg p-1.5 w-20 text-lg rounded border-2 bg-indigo-200 font-semibold border-purple-600 transition duration-100 hover:bg-violet-800 hover:text-white delay-75"
          onClick={() => {
            setTableNotes(true);
            setCardNotes(false);
          }}
        >
          Table
        </button>
        <button
          className="shadow-lg p-1.5 w-20 text-lg rounded border-2 bg-indigo-200 font-semibold border-purple-600 transition duration-100 hover:bg-violet-800 hover:text-white delay-75"
          onClick={() => {
            setCardNotes(true);
            setTableNotes(false);
          }}
        >
          Card
        </button>
      </div>

      <div className="max-md:float-right pr-36 float-right mt-8">
        <Link to="/notes/create">
          <FaSquarePlus className="text-5xl cursor-pointer hover:shadow-outline" />
        </Link>
      </div>

      {tableNotes ? <NotesTable /> : <NotesCard />}
    </div>
  );
};

export default Heading;
