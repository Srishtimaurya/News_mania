

import React, { useState, useEffect } from 'react';
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import axios from 'axios';
import Spinner from './Spinner.jsx';
import { Link } from 'react-router-dom';

const NotesTable = () => {
	const [notes, setNotes] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	

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

	
	return (
		<div>
			{isLoading ? (
				<Spinner />
			) : (
				<table className='w-full border-separate border-spacing-4 p-4 mt-4'>
					<thead>
						<tr>
							<th className="border-purple-600 text-xl border-2 rounded-md p-2">
								S.No
							</th>
							<th className="border-purple-600 text-xl border-2 rounded-md p-2">
								Topic
							</th>
							<th className="border-purple-600 text-xl border-2 rounded-md p-2 max-md:hidden">
								Date
							</th>
							<th className="border-purple-600 text-xl border-2 rounded-md p-2">
								Notes
							</th>
						</tr>
					</thead>
					<tbody>
						{notes.map((item, index) =>
							<tr key={item.id}>
								<td className='text-center border-purple-600 border-2 rounded-md p-2 '>
									{index + 1}
								</td>
								<td className='border-purple-600 border-2 rounded-md p-2'>
									{item.topic}
								</td>
								<td className='max-md:hidden border-purple-600 border-2 rounded-md p-2'>
									{/* {new Date(item.createdAt).toString()} */}
									{new Date(item.createdAt).toDateString()}
								</td>
								<td className='border-purple-600 border-2 rounded-md p-2'>
									<p className='break-words'>
										{item.notes}
									</p>
								</td>
								<td className='flex items-center justify-around p-2'>
									<Link to={`/notes/edit/${item._id}`}>
										<FaEdit className='cursor-pointer text-3xl ' />
									</Link>
									<Link to={`/notes/delete/${item._id}`}>
										<MdDelete className='cursor-pointer text-3xl ' />
									</Link>
								</td>
							</tr>
						)}
					</tbody>
				</table>
			)}
		</div>
	)
}

export default NotesTable;
