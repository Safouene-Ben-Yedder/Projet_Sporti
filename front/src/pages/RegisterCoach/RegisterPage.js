/* eslint-disable no-mixed-spaces-and-tabs */
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { register } from '../../services/login.service';
import SignupForm from '../../components/RegistrationFormCoach/RegistrationForm';

const RegisterPage = () => {
		
	const [values, setValues] = useState({
		nom: '',
		prenom: '',
		email: '',
		password: '',
        dateNaissance: ''
		});
	
	const {  email, password, nom, prenom,dateNaissance } = values;
 
	const handleChange = (nom) => (e) => {
	    setValues({ ...values, [nom]: e.target.value });
	};
	 
		const handleSubmit = async (e) => {
		   e.preventDefault();
		   try {
			  await register(email, password, nom, prenom,dateNaissance);
			  console.log('Sign up succesffully , Please Login Now');
			  setValues({
				 nom: '',
				 prenom: '',
				 email: '',
				 password: '',
                 dateNaissance:''
			  });
              window.location = '/auth-coach';
            } catch (err) {
			  console.error(err.message);
		   }
		};     	
 		return (
 		<div className='container p-4 mt-4'>
			 <div className='row justify-content-evenly mt-4'>
				<div className='col-lg-6 col-md-12 mt-4'>
				   <div className='d-flex'>
					  <i className='fa-solid fa-right-to-bracket fs-1 mx-2'></i>{' '}
					  <h2>Register</h2>
				   </div>
				   <div
					  className='p-6 shadow-lg p-3 mb-5 bg-body rounded'
					  style={{ backgroundColor: 'white' }}>
					  <form>
						 <SignupForm
							label='First Name'
							type='text'
							value={nom}
							onChange={handleChange('nom')}
						 />
						 <SignupForm
							label='Last Name'
							type='text'
							value={prenom}
							onChange={handleChange('prenom')}
						 />
						 <SignupForm
							label='email'
							type='email'
							value={email}
							onChange={handleChange('email')}
						 />
						 <SignupForm
							label='Password'
							type='password'
							value={password}
							onChange={handleChange('password')}
							required
						 />
                         <SignupForm
							label='dateNaissance'
							type='date'
							value={dateNaissance}
							onChange={handleChange('dateNaissance')}
							required
						 />
						 <div className='d-flex justify-content-between'>
							<button
							   type='submit'
							   onClick={handleSubmit}
							   class='btn btn-outline-primary'>
							   Save <i class='fa-solid fa-floppy-disk'></i>
							</button>
							<Link to='/login'>I have account</Link>
						 </div>
					  </form>
				   </div>
				</div>
			 </div>
		  </div>    
 

   );
};

export default RegisterPage;