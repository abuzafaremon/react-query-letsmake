import './Yup.css';
// import { userSchema } from '../../validations/validations'
import { useForm } from 'react-hook-form';
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

const Yup = () => {
  // const [isValid, setIsValid] = useState('')

  const schema = yup.object().shape({
    name: yup.string().required("Name is Required"),
    email: yup.string().email().required("Email is Required"),
    password: yup.string().required("Password is Required").min(4).max(20),
    confirmPassword: yup.string().oneOf([yup.ref("password"), null]).required("Confirm your password"),
  })
  const { register, formState: { errors }, handleSubmit, reset } = useForm({
    resolver: yupResolver(schema),
  })

  const onSubmit = (data) => {
    console.log(data);
    reset();
  }
  // const createUser = async (e) => {
  //   e.preventDefault();
  //   let formData = {
  //     name: e.target.name.value,
  //     email: e.target.email.value,
  //     password: e.target.password.value,
  //   };
  //   const valid = await userSchema.isValid(formData);
  //   if (valid) {
  //     setIsValid('Form Data is Valid');
  //   } else {
  //     setIsValid('Form Data is not Valid');
  //   }
  // }
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input type="text" name="name" id="name" placeholder='Name' {...register("name")} />
          {errors.name && <small>{errors.name?.message}</small>}
        </div>
        <div>
          <input type="text" name="email" id="email" placeholder='example@mail.com' {...register("email")} />
          {errors.email && <small>{errors.email?.message}</small>}
        </div>
        <div>
          <input type="password" name="password" id="password" placeholder='Min 4, Max 20 character' {...register("password")} />
          {errors.password && <small>{errors.password?.message}</small>}
        </div>
        <div>
          <input type="password" name="confirmPassword" id="confirmPassword" placeholder='Confirm Password' {...register("confirmPassword")} />
          {errors.confirmPassword && <small>{errors.confirmPassword?.message}</small>}
        </div>
        {/* <p>{isValid}</p> */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Yup;