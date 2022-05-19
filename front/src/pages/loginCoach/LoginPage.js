import { useState } from 'react';
import { Link } from 'react-router-dom';
import { login } from '../../services/login.service';
import SigninForm from '../../components/LoginFormCoach/LoginForm';
const LoginPage = () => {

   const [values, setValues] = useState({
      email: '',
      password: '',
   });

   const { email, password } = values;

   const handleChange = (email) => (e) => {
      console.log(e.target.value);
      setValues({ ...values, [email]: e.target.value });
   };
    
   const handleSubmit = async (e) => {
      console.log(values)
      e.preventDefault();

      try {
         const res = await login(email, password);
         console.log("hh",res);
         console.log('Log In successfully');
         localStorage.setItem('token', res.data.token);
         setValues({
            email: '',
            password: '',
         });
         localStorage.setItem('isCoach', true);
         // navigate('/');
         window.location = '/loginD';
      } catch (err) {
         console.error(err.message);
         console.log('login failed!');
      }
   };
   return (
      <>
 <div className='container p-4 mt-4'>
            <div className='row justify-content-evenly mt-4'>
               <div className='col-lg-6 col-md-12 mt-4'>
                  <div className='d-flex'>
                     <i className='fa-solid fa-right-to-bracket fs-1 mx-2'></i>{' '}
                     <h2>Login</h2>
                  </div>
                  <div
                     className='p-6 shadow-lg p-3 mb-5 bg-body rounded'
                     style={{ backgroundColor: 'white' }}>
                     <form>
                        <SigninForm
                           label='Email'
                           type='text'
                           value={email}
                           onChange={handleChange('email')}
                        />
                        <SigninForm
                           label='Password'
                           type='password'
                           value={password}
                           onChange={handleChange('password')}
                        />
                        <div class='d-flex justify-content-between'>
                           <button
                              type='values.
                              values.submit'
                              onClick={handleSubmit}
                              className='btn btn-outline-primary'>
                              Sign In <i class='fa-solid fa-floppy-disk'></i>
                           </button>
                           <Link to='/register'>I don't have account</Link>
                        </div>
                     </form>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default LoginPage;