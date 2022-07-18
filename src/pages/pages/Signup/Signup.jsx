/* eslint-disable jsx-a11y/label-has-associated-control */
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { EmailIcon, EyeIcon, LocationIcon, LockIcon, PhoneIcon, UserIcon } from '../../assets/svgs';
import FileUpload from '../../components/atoms/FileUpload';
import { validationSchema } from './validation/validationSchema';

const SignUp = () => {
	const { t } = useTranslation();
	const [passwordShow, setPasswordShown] = useState(false);
	const [confirm_passwordShow, setConfirmpPssword] = useState(false);

	const initialValues = {
		full_name: '',
		id_no: '',
		mobile_number: '',
		email: '',
		nationality: '',
		country: '',
		password: '',
		confirm_password: '',
		agree: false,
	};

	const onSubmit = (values) => {
		console.log(values);
	};
	return (
		<div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
			<div className="max-w-md w-full space-y-8 mx-auto md:p-10 p-4 sm:p-5 bg-white  border-mercury border-2 rounded-lg">
				<div>
					<h2 className=" text-center text-4xl font-bold text-gray-900">{t('Join')} C2C</h2>
				</div>
				<Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
					<Form>
						<div className="space-y-px">
							<div className="pb-4 ">
								<div className="relative ">
									<div className="form-icon-left">
										<UserIcon />
									</div>
									<Field
										name="full_name"
										type="text"
										className=" outline-0 form-control px-3"
										placeholder={t('Full Name')}
									/>
								</div>
								<ErrorMessage className="text-sm mt-3 text-red-600" name="full_name" component="span" />
							</div>
							<div className="pb-4">
								<div className="relative">
									<div className="form-icon-left">
										<UserIcon />
									</div>
									<Field name="id_no" type="text" className="outline-0 form-control px-3 " placeholder={t('ID No')} />
								</div>
								<ErrorMessage className="text-sm mt-3 text-red-600" name="id_no" component="span" />
							</div>
							<div className="pb-4">
								<div className="relative">
									<div className="form-icon-left">
										<PhoneIcon />
									</div>
									<Field
										name="mobile_number"
										type="text"
										className="outline-0 form-control px-3"
										placeholder={t('Mobile Number')}
									/>
								</div>
								<ErrorMessage className="text-sm mt-3 text-red-600" name="mobile_number" component="span" />
							</div>
							<div className="pb-4">
								<div className="relative">
									<div className="form-icon-left">
										<EmailIcon />
									</div>
									<Field
										name="email"
										type="text"
										className="outline-0 form-control px-3"
										placeholder={t('Email address')}
									/>
								</div>
								<ErrorMessage className="text-sm mt-3 text-red-600" name="email" component="span" />
							</div>
							<div className="pb-4">
								<div className="relative">
									<div className="form-icon-left">
										<EmailIcon />
									</div>
									<Field
										name="nationality"
										type="text"
										className="outline-0 form-control px-3"
										placeholder={t('Nationality')}
									/>
								</div>
								<ErrorMessage className="text-sm mt-3 text-red-600" name="nationality" component="span" />
							</div>
							<div className="pb-4">
								<div className="relative">
									<div className="form-icon-left">
										<LocationIcon />
									</div>
									<Field
										name="country"
										type="text"
										className="outline-0 form-control px-3"
										placeholder={t('Country of Residence')}
									/>
								</div>
								<ErrorMessage className="text-sm mt-3 text-red-600" name="country" component="span" />
							</div>
							<div className="pb-4">
								<div className="relative">
									<div className="form-icon-left">
										<LockIcon />
									</div>
									<button type="button" className="form-icon-right " onClick={() => setPasswordShown(!passwordShow)}>
										<EyeIcon className="cursor-pointer js-password-label" />
									</button>
									<Field
										name="password"
										type={passwordShow ? 'text' : 'password'}
										className="outline-0 form-control px-3"
										placeholder={t('Password')}
									/>
								</div>
								<ErrorMessage className="text-sm mt-3 text-red-600" name="password" component="span" />
							</div>
							<div className="pb-4">
								<div className="relative">
									<div className="form-icon-left">
										<LockIcon />
									</div>
									<button
										type="button"
										className="form-icon-right "
										onClick={() => setConfirmpPssword(!confirm_passwordShow)}
									>
										<EyeIcon className="cursor-pointer js-password-label" />
									</button>
									<Field
										name="confirm_password"
										type={confirm_passwordShow ? 'text' : 'password'}
										className="outline-0 form-control px-3 js-password "
										placeholder={t('Confirm Password')}
										id="password"
									/>
								</div>
								<ErrorMessage className="text-sm mt-3 text-red-600" name="confirm_password" component="span" />
							</div>
							<div className="pb-8">
								<FileUpload title={t('Upload ID Copy (docs)')} />
							</div>
						</div>

						<div className="pb-4">
							<div className="flex items-center">
								<Field
									name="agree"
									type="checkbox"
									className="h-4 w-4 text-gray-600 enabled:hover:border-gray-400 focus:ring-gray-500 border-gray-300 rounded"
								/>
								<label className="ltr:ml-2 font-normal  rtl:mr-2 block text-sm text-darkblue">
									{t('By joining I agree to receive emails from')} C2C
								</label>
							</div>
							<ErrorMessage className="text-sm text-red-600" name="agree" component="div" />
						</div>

						<div className="text-center">
							<button
								type="submit"
								className="group relative w-full flex justify-center mb-3 py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-darkblue hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 "
							>
								{t('Join')}
							</button>
							<span className="text-sm ">
								{t('Already have an account?')}
								<Link className="font-bold ltr:ml-1 rtl:mr-1" to="/">
									{t('Log in')}
								</Link>
							</span>
						</div>
					</Form>
				</Formik>
			</div>
		</div>
	);
};

export default SignUp;
