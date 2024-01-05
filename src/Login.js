import React, { useState } from 'react'; 
import axios from 'axios'; 
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {

   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [errorMessage, setErrorMessage] = useState('');
   const navigate = useNavigate();

   const handleSubmit = (e) => {
      e.preventDefault();
      axios.post('https://kambaa-backend.onrender.com/login', { email, password })
         .then(result => {
            console.log(result);
            if (result.data === 'Success') {
               navigate('/shop');
            } else {
               setErrorMessage('Incorrect password. Please try again.'); // Set error message
            }
         })
         .catch(err => console.log(err));
   };

   return (
      <div className='arasu'>
         <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
               <div className='mb-3'>
                  <label htmlFor='email'>
                     <strong>Email id </strong>
                  </label>
                  <input type='email' placeholder='Enter Email' autoComplete='off' name="email" className='form-control rounded-0'
                     onChange={(e) => setEmail(e.target.value)}
                  />
               </div>
               <div className='mb-3'>
                  <label htmlFor='email'>
                     <strong>Password </strong>
                  </label>
                  <input type='password' placeholder='Enter Password' autoComplete='off' name="password" className='form-control rounded-0'
                     onChange={(e) => setPassword(e.target.value)}
                  />
               </div>
               <button type="submit" className='btn btn-success w-100 rounded-0'>
                  Login
               </button>
            </form>
            {errorMessage && <p className="text-danger mt-3">{errorMessage}</p>} 
            <p>Don't Have an Account</p>
            <Link to="/register" className='phone'>
                Register
            </Link>
         </div>
      </div>
   )
}

export default Login;
