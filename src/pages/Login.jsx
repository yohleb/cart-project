import { Form, Link, redirect } from "react-router-dom";
import { FormInput, SubmitBtn } from "../components";
import { customFetch } from "../utils";
import {toast} from 'react-toastify'
import { loginUser } from "../features/users/userSlice";
import { useDispatch} from "react-redux";


export const action = (store)=> async({request}) =>{
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try{
    const response = await customFetch.post('/auth/local', data);
    store.dispatch(loginUser(response.data))
    console.log(response);
    toast.success('login successfully')
    return redirect('/');
  }catch (error) {
    const errorMessage = error?.response?.data?.error?.message||
    'please double check your info';
    toast.error(errorMessage);
  }
  
}

const Login = () => {


     return (
        <section className='h-screen grid place-items-center'>
          <Form
            method='post'
            className='card w-96  p-8 bg-base-100 shadow-lg flex flex-col gap-y-4'
          >
            <h4 className='text-center text-3xl font-bold'>Login</h4>
            <FormInput type='email' label='email' name='identifier' />
            <FormInput type='password' label='password' name='password' />
            <div className='mt-4'>
              <SubmitBtn text='login' />
            </div>
            <button
              type='button'
              className='text-case uppercase btn btn-secondary btn-block'
            >
              guest user
            </button>
            <p className='text-center'>
              Not a member yet?{' '}
              <Link
                to='/register'
                className='ml-2 link link-hover link-primary capitalize'
              >
                register
              </Link>
            </p>
          </Form>
        </section>
      );
    };
  
  export default Login;
  