import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';



const UserRegister = () => {


    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
        },
        validationSchema: Yup.object({
            firstName: Yup.string()
                .max(15, 'Must be 15 characters or less')
                .required('Required'),
            lastName: Yup.string()
                .max(20, 'Must be 20 characters or less')
                .required('Required'),
            email: Yup.string().email('Invalid email address').required('Required'),
        }),
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <div className='my-4  flex justify-center  items-center'>
            
            <div className='w-1/2 bg-slate-300 drop-shadow-lg'>
            <p className='text-black pt-5 text-3xl font-bold'>Register Page</p>
            <form onSubmit={formik.handleSubmit} className='p-10 space-y-4  '>

                <div className=''>
                    <label className='block text-start' htmlFor="firstName">First Name</label>
                    <input
                        className='w-full py-1 rounded-lg'
                        id="firstName"
                        type="text"
                        {...formik.getFieldProps('firstName')}
                    />
                    {formik.touched.firstName && formik.errors.firstName ? (
                        <div className='text-start text-red-600'>{formik.errors.firstName}</div>
                    ) : null}

                </div>


                <div>
                    <label className='block text-start' htmlFor="lastName">Last Name</label>
                    <input className='w-full py-1 rounded-lg' id="lastName" type="text" {...formik.getFieldProps('lastName')} />
                    {formik.touched.lastName && formik.errors.lastName ? (
                        <div className='text-start text-red-600'>{formik.errors.lastName}</div>
                    ) : null}
                </div>

                <div>

                    <label className='block text-start' htmlFor="email">Email Address</label>
                    <input className='w-full py-1 rounded-lg' id="email" type="email" {...formik.getFieldProps('email')} />
                    {formik.touched.email && formik.errors.email ? (
                        <div className='text-start text-red-600'>{formik.errors.email}</div>
                    ) : null}
                </div>

                <button className='bg-green-600 py-2 px-4 rounded-md text-white' type="submit">Submit</button>
            </form>



        </div>
        </div>
    );
};

export default UserRegister;