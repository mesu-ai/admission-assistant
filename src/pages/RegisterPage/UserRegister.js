import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';



const UserRegister = () => {

    const initialValues = {
        firstName: '',
        lastName: '',
        email: '',
        password: ''

    }

    const validationSchema = Yup.object({
        firstName: Yup.string()
            .max(15, 'Must be 15 characters or less')
            .required('Required'),
        lastName: Yup.string()
            .max(20, 'Must be 20 characters or less')
            .required('Required'),
        email: Yup.string().email('Invalid email address').required('Required'),
        password:Yup.string().min(6, 'Password at least 6 Charecter').max(10, 'Password not more than 10 Charecter').required('Required')
    });

    const onSubmit = (values,onSubmitProps) => {
        console.log('values', formik.values);
        console.log(onSubmitProps);
        // onSubmitProps.setSubmitting(false);
        onSubmitProps.resetForm();
    }


    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit,

    });

    return (
        <div className='my-4  flex justify-center  items-center'>

            <div className='w-1/2 bg-slate-300 drop-shadow-lg'>
                <p className='text-black pt-5 text-3xl font-bold'>Register Page</p>
                <form onSubmit={formik.handleSubmit} className='p-10 space-y-4  '>

                    <div className='grid md:grid-cols-2 gap-4'>
                        <div className=''>
                            <label className='block text-start' htmlFor="firstName">First Name</label>
                            <input
                                className='w-full px-2 py-1 rounded-lg'
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
                            <input className='w-full px-2 py-1 rounded-lg' id="lastName" type="text" {...formik.getFieldProps('lastName')} />
                            {formik.touched.lastName && formik.errors.lastName ? (
                                <div className='text-start text-red-600'>{formik.errors.lastName}</div>
                            ) : null}
                        </div>

                    </div>

                    <div>

                        <label className='block text-start' htmlFor="email">Email Address</label>
                        <input className='w-full px-2 py-1 rounded-lg' id="email" type="email" {...formik.getFieldProps('email')} />
                        {formik.touched.email && formik.errors.email ? (
                            <div className='text-start text-red-600'>{formik.errors.email}</div>
                        ) : null}
                    </div>
                    <div>

                        <label className='block text-start' htmlFor="password">PassWord</label>
                        <input className='w-full px-2 py-1 rounded-lg' id="password" type="password" {...formik.getFieldProps('password')} />
                        {formik.touched.password && formik.errors.password ? (
                            <div className='text-start text-red-600'>{formik.errors.password}</div>
                        ) : null}
                    </div>

                    {/* disabled={!formik.isValid || formik.isSubmitting} */}
                    <button  className='bg-green-600 py-2 px-4 rounded-md text-white' type="submit">Submit</button>
                </form>



            </div>
        </div>
    );
};

export default UserRegister;