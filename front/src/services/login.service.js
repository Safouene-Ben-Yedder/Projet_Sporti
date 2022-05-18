import axios from 'axios';

export const login = async (email, password) => {
   const input = {
      email,
      password,
   };
   const { data } = await axios.post(
      'http://localhost:5000/api/coach/login/:token',
      input
   );
   return data;
};

export const register = async ( email, password, nom, prenom,dateNaissance) => {
   const input = {
      email,
      password,
  nom,
      prenom,
 dateNaissance
     
   };
   const { data } = await axios.post(
      'http://localhost:5000/api/coach/register/',
      input
   );
   return data;
};