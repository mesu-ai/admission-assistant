import * as Yup from 'yup';

export const validationSchema = Yup.object({
	password: Yup.string()
		.required('Enter your password')
		.matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,16}$/, 'Invalid password'),
	confirm_password: Yup.string()
		.oneOf([Yup.ref('password'), null], 'Passwords not match')
		.required('Confirm your password'),
});
