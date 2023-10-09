import React, { useContext, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';


const Login = () => {
  const [signInUser, setsignInUser] = useState('')
const [LoginFaild, setLoginFaild] = useState('')
  const location = useLocation()
  const navegate = useNavigate()
  const { signupUser} = useContext(AuthContext)
console.log(location)
  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    signupUser(email, password)
      .then(() => {
            setsignInUser("Login Conform"),
          navegate(  location.state? location.state : "/")
        })
        .catch(() => {
            setLoginFaild("Login Faild")
        })

  }


  return (
    <div className='relative'>
      <form onSubmit={handleLogin} className="z-40 mt-2 rounded-lg card-body mb-7 border-solid border-l-2 border-b-2 border-black  w-2/5 mx-auto bg-[#00050580]">
        <div className="form-control  lg:my-3 lg:mx-5 z-30">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name="email" className="input input-bordered" required />
        </div>
        <div className="form-control z-40 lg:my-3 lg:mx-5">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="text" placeholder="password" name='password' className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control lg:my-3 z-40 lg:mx-5 ">
          <button className="btn btn-primary">Login</button>
        </div>

        <p className='text-white z-40'>Don't Have't Acount <span className='font-bold text-blue-600'> <Link to="/register">Register</Link> </span></p>
      </form>

      <div className='z-40'>
      <p className='text-center text-green-600 text-xl'>{signInUser}</p>
      <p  className='text-center text-green-600 text-xl'>{LoginFaild}</p>
      </div>
     
      <img className='z-10 absolute -mt-5 top-0 lg:left-1/4 lg:ml-8' src={"https://i.ibb.co/KLn3nZP/8jgs9eldc28j15f4d4mjnnqa6n.png"} alt="" />
    </div>
  );
};

export default Login;