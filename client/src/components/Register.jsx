

import React, { useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
import { Context } from "../main";
import toast from "react-hot-toast";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isAuthenticated, setIsAuthenticated } = useContext(Context);
  const [loading, setLoading] = useState(false);

  const submitHandler = async (e) => {
    setLoading(true);
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:3000/users/new",
        {
          name,
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
  
      toast.success(data.message);
      setIsAuthenticated(true);
    } catch (error) {
      console.log("Registration error:", error);
      // console.error("Registration error:", error); // Log the error for debugging
      if (error.response && error.response.data && error.response.data.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error("An error occurred");
      }
      setIsAuthenticated(false); // Ensure user is not authenticated on error
    } finally {
      setLoading(false);
    }
  };
  
  if (isAuthenticated) {
    return <Navigate to="/add_notes" />;
  }

  return (
    <div className="login">
      <section>
        <form onSubmit={submitHandler}>
          <input
            type="text"
            placeholder="Name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            required
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" disabled={loading}>
            {loading ? "Signing Up..." : "Sign Up"}
          </button>
          <h4>Or</h4>
          <Link to="/login">Log In</Link>
        </form>
      </section>
    </div>
  );
};

export default Register;
