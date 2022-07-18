import * as Yup from 'yup';

export const validationSchema = Yup.object({
	full_name: Yup.string().required('Enter your Name'),
	id_no: Yup.number().required('Enter your identity num').min(8, 'Invalid Id').max(15, 'Invalid Id'),
	mobile_number: Yup.number().required('Enter your mobile num').min(8, 'Invalid Num').max(15, 'Invalid Num'),
	email: Yup.string().email('Invalid email address').required('Enter your email'),
	nationality: Yup.string().required('Enter your nationality'),
	country: Yup.string().required('Enter your country name'),
	password: Yup.string()
		.required('Enter your password')
		.matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,16}$/, 'Invalid password'),
	confirm_password: Yup.string()
		.oneOf([Yup.ref('password'), null], 'Passwords not match')
		.required('Confirm your password'),
	agree: Yup.boolean().oneOf([true], 'You must accept the terms and conditions'),
});
