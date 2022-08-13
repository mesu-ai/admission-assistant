/* eslint-disable jsx-a11y/label-has-associated-control */

import { Form, Formik } from 'formik';
import { useTranslation } from 'react-i18next';
import * as Yup from 'yup';
import OTPInput from '../../components/atoms/OtpInput';

const Otp = () => {
	const { t } = useTranslation();
	const initialValues = {
		otp: '',
	};

	const validationSchema = Yup.object({
		otp: Yup.string().required('Enter OTP here'),
	});

	const onSubmit = (values) => {
		console.log(values);
	};
	return (
		<div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
			<div className="max-w-md w-full space-y-8 md:p-10 p-4 sm:p-5  border-mercury border-2 rounded-lg">
				<div className="text-center">
					<h2 className="mb-3  text-5xl font-bold text-gray-900">{t('Enter OTP')}</h2>
					<p className="mt-3 text-gray-500 sm:mt-5   sm:mx-auto md:mt-5 text-sm lg:mx-0">
						{t('Please enter the 4 digit security code we just sent you at')}
						<span className="text-primary">713-444-xxxx</span>
					</p>
				</div>
				<Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
					<Form>
						<div className="">
							<OTPInput
								autoFocus
								isNumberInput
								length={4}
								className="flex flex-row flex-wrap justify-center items-center space-x-4"
								inputClassName="w-16 h-16 otp mx-3 mb-4 box-sizing rounded-lg hover:shadow-lg   hover:bg-white bg-gray-100 hover:shadow-gray-500/50  p-3 text-center outline-none appearance-none"
								onChangeOTP={(otp) => console.log('Number OTP: ', otp)}
							/>
						</div>

						<div className="text-right">
							<span className=" text-primary text-sm">{t('Resend in 40 Sec')}</span>
							<button
								type="submit"
								className="w-full mt-2 py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-action hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 "
							>
								{t('Submit')}
							</button>
						</div>
					</Form>
				</Formik>
			</div>
		</div>
	);
};

export default Otp;
