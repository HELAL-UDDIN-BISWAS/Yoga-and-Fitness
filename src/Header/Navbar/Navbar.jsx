import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Navbar = () => {
  const{user,logout,googlesignin}=useContext(AuthContext)

  const googlesigninbutton=()=>{
    googlesignin()
  }
  const handalesignout=()=>{
    logout() 
  }
  const navbar=<>
  <li><NavLink to="/">Home</NavLink></li>
  <li><NavLink to="/register">Register</NavLink></li>
  <li><NavLink to="/login">Login</NavLink></li>
  
  </>
    return (
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      {
        navbar
      }
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl">Yoga And Fitness</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {
      navbar
     }
    </ul>
  </div>
  <div className="navbar-end">
    {
      user?<>
       <p>{user.email}</p>
       <button className="btn btn-active btn-ghost ml-2" onClick={handalesignout}>SignOut</button>
      </>:
      <> <button className="btn btn-active btn-ghost ml-2" onClick={googlesigninbutton}>Google</button>
        <Link className="btn btn-active btn-ghost ml-2" to="/login">Login</Link></>
    
      
     
    }
  </div>
</div>
    );
};

export default Navbar;