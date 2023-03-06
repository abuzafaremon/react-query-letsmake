import './Yup.css';
import { userSchema } from '../../validations/validations'
import { useState } from 'react';

const Yup = () => {
  const [isValid, setIsValid] = useState('')
  const createUser = async (e) => {
    e.preventDefault();
    let formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value,
    };
    const valid = await userSchema.isValid(formData);
    if (valid) {
      setIsValid('Form Data is Valid');
    } else {
      setIsValid('Form Data is not Valid');
    }
  }
  return (
    <div>
      <form onSubmit={createUser}>
        <input type="text" name="name" id="name" placeholder='Name' />
        <input type="text" name="email" id="email" placeholder='example@mail.com' />
        <input type="password" name="password" id="password" placeholder='Min 6, Max 10 character' />
        <p>{isValid}</p>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Yup;