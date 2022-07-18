import * as Yup from 'yup';

export const validationSchema = Yup.object({
	email: Yup.string().email('Invalid email address').required('Enter your email'),
	password: Yup.string()
		.required('Enter your password')
		.matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,16}$/, 'Invalid password'),
});
