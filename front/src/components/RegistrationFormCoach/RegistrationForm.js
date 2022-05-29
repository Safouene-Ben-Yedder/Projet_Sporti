import React from 'react';

function SignupForm({ label, type, onChange,placeholder,id }) {
   return (
      <div className=' mb-3'>
         <label className='form-label'>{label}</label>
         <div className='input-group'>
            <span className='input-group-text' id='basic-addon1'>
               <i className='fa-solid fa-user'></i>
            </span>
            <input
               id={id}
               type={type}
               placeholder={placeholder}
               className='form-control'
               onChange={onChange}
               required
            />
         </div>
      </div>
   );
}

export default SignupForm;