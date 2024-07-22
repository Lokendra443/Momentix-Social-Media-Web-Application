import { Button, FormControlLabel, Radio, RadioGroup, TextField } from '@mui/material'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import React, { useState } from 'react'
import * as Yup from "yup"
import { registerUserAction } from '../../Redux/Auth/auth.action';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const initialValues = {firstName:"", lastName:"", email:"", password:"", gender:""};
const validationSchema = Yup.object().shape( {email: Yup.string().email("Invalid email").required("Email is required"), password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required")});
const Register = () => {
    const [gender,setGender] = useState("");

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const handleSubmit=(values)=>{
        values.gender = gender
        console.log("handle submit", values);

        dispatch(registerUserAction({data:values}))
    };


    const handleChange = (event) => {
        setGender(event.target.value);
      };



  return (
    <>
      
        <Formik onSubmit={handleSubmit} validationSchema={validationSchema} initialValues={initialValues}>

            <Form className='space-y-5'>

                <div className='space-y-5'>

                    <div>
                        <Field name ="firstName" placeholder="First Name" as={TextField} type="text" variant="outlined" fullWidth />

                        <ErrorMessage name='firstName' component={"div"} className='text-red-500'/>

                    </div>


                    <div>
                        <Field name ="lastName" placeholder="Last Name" as={TextField} type="text" variant="outlined" fullWidth />

                        <ErrorMessage name='lastName' component={"div"} className='text-red-500'/>

                    </div>


                    <div>
                        <Field name ="email" placeholder="Email" as={TextField} type="email" variant="outlined" fullWidth />

                        <ErrorMessage name='email' component={"div"} className='text-red-500'/>

                    </div>

                    <div>
                        <Field name ="password" placeholder="Password" as={TextField} type="password" variant="outlined" fullWidth />

                        <ErrorMessage name='password' component={"div"} className='text-red-500'/>

                    </div>



                    <RadioGroup  onChange={handleChange} row aria-label="gender" name="gender" >

                       
                        <FormControlLabel value="male" control={<Radio />} label="Male" />
                        <FormControlLabel value="female" control={<Radio />} label="Female" />
                        

                    </RadioGroup>



                </div>

                <Button sx={{padding: ".8rem 0rem"}} fullWidth type="submit" variant="contained" color="primary">Register</Button>

            </Form>

        </Formik>

        <div className='flex gap-2 items-center justify-center pt-5'>
            <p>If you have already account</p>
            <Button onClick={() => navigate("/login")}>Login</Button>
        </div>

    </>
  )
}

export default Register

