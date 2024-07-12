


import axios from "axios";
import React, { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { Link, Navigate } from "react-router-dom";
import { Context } from "../main";

const Login = () => {
  const { isAuthenticated, setIsAuthenticated, loading, setLoading } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = async (e) => {
   e.preventDefault();
     setLoading(true);

    try {
      //setLoading(true);
      const { data } = await axios.post(
        "http://localhost:3000/users/login",
        { email, password },
        { withCredentials: true }
      );

     //console.log("userr haiii");
      toast.success(data.message);
      setIsAuthenticated(true);
    } 
    catch (error) {
      console.log("userr haiii ya nhiii ");
      console.error("Login error:", error);
      if (error.response && error.response.status === 404) {
        // toast.error("Invalid username or password");
        toast.error(error.response?.data?.message);
      } 
      else {
        toast.error(error.response?.data?.message || "An error occurred");
      }
      setIsAuthenticated(false);
    } 
    finally {
      setLoading(false);
    }
  };

  if (isAuthenticated) return <Navigate to={"/add_notes"} />;

  return (
    <div className="login">
      <section>
        <form onSubmit={submitHandler}>
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
          <button disabled={loading} type="submit">
            {loading ? "Logging in..." : "Login"}
          </button>
          <h4>Or</h4>
          <Link to="/Register">Sign Up</Link>
        </form>
      </section>
    </div>
  );
};

export default Login;
