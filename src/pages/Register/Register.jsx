import React, { useContext, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { Link } from 'react-router-dom';

const Register = () => {
  const {createUser} =useContext(AuthContext);
  const [chackPassword, setChackPassword]=useState('')
  const [chackbox,setchackbox]=useState('')

 const handleRegister=(e)=>{
  e.preventDefault();
  const form =new FormData(e.currentTarget);
  const email=form.get("email")
  const password=form.get('password')
  const checkbox=form.get('chackbox')
  console.log(email,password)
  if(!checkbox){
    setchackbox('Click Chacked Box')
    return
   }
  if (!/[A-Z][@#$!%^&*][password>=6]/.test(password)){
    setChackPassword("set strong password")
  return
   }
  
  createUser(email,password)

 }

    return (


<div className='relative'>
<form onSubmit={handleRegister} className="z-50 mt-2 relative rounded-lg card-body border-solid border-l-2 border-b-2 border-black  w-2/5 mx-auto bg-[#00050580]">
        <div className="form-control lg:my-3 lg:mx-5">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name="email" className="input input-bordered" required />
        </div>
        <div className="form-control lg:my-3 lg:mx-5">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name='password' className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control lg:my-3 lg:mx-5 ">
          <button className="btn btn-primary">Login</button>
        </div>
        <div className='flex'>
            <input type="checkbox" name="checkbox" id="" />
              <p>Set Chackbox</p>
             </div>
             <h3 className='text-red-600 text-xl text-center' >{chackbox}</h3>
      <p className='text-white'>Have't Acount <span className='font-bold text-blue-600'> <Link to="/login">Login</Link> </span></p>
      <h3 className='text-red-600 text-xl text-center'>{chackPassword}</h3>
      </form>

      <img className='absolute top-0 lg:left-1/4 lg:ml-8 z-10' src={"https://i.ibb.co/Nm6Md6p/meditation-3591128.png"} alt="" />
</div>
      
    );
};

export default Register;