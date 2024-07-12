


import { useState } from "react";
import "./App.css";
import Header from "./components/header";
import AllNews from "./components/AllNews";
import TopHeadlines from "./components/TopHeadlines";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CountryNews from "./components/CountryNews";
import Heading from './components/Heading';
import Register from './components/Register';
import Login from './components/Login';
import AddNotes from './page/AddNotes';
import DeleteNotes from './page/DeleteNotes';
import EditNotes from './page/EditNotes';
import { Toaster } from "react-hot-toast";


function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="w-full">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<AllNews />} />
          <Route path="/top-headlines/:category" element={<TopHeadlines />} />
          <Route path="/country/:iso" element={<CountryNews />} />
          <Route path="/add_notes" element={<Heading />} />
          <Route path="/notes/create" element={<AddNotes />} />
          <Route path="/notes/delete/:id" element={<DeleteNotes />} />
          <Route path="/notes/edit/:id" element={<EditNotes />} />
          

          <Route path="/Register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Toaster />
      </BrowserRouter>
    </div>
  );
}

export default App;
