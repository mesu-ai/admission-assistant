import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { AppleStore, FacebookIcon, InstagramIcon, LinkedinIcon, PlayStore, TwitterIcon, YouTubeIcon } from '../../assets/svgs';
import Logo from '../../assets/svgs/Logo';
import LangChange from '../../components/atoms/LangChange';

import menus from '../../routes/footerRoutes';

const Footer = () => {
	const { t } = useTranslation();

	return (
		<footer className="">
			<div className="container mx-auto px-4 sm:px-0" >
				<div className="grid sm:grid-cols-12 gap-8 py-8 md:py-12 ">
					<div className="sm:col-span-6 md:col-span-3 flex flex-col justify-center items-start  justify-items-center mx-auto md:mx-0">
						<Link to="/" className="mx-auto md:mx-0">
							<Logo className="h-20 w-20 mb-2" />
						</Link>

						<p className="text-base w-40 text-gray-400 mb-4">
							Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
							industry&apos;s.
						</p>
					</div>

					{menus.map((item) => {
						return (
							<div
								className="sm:col-span-6 md:col-span-3 lg:col-span-3 mx-auto text-center md:text-start"
								key={item.titile}
							>
								<div>
									<p className="text-gray-800 text-lg font-semibold mb-2">{item.titile}</p>
									<ul className="text-base">
										{item.subMenu.map((menu) => {
											return (
												<li className="mb-2" key={menu.titile}>
													<Link
														to="#"
														className="w-40 text-gray-400 hover:text-gray-900 transition duration-150 ease-in-out"
													>
														{menu.titile}
													</Link>
												</li>
											);
										})}
									</ul>
								</div>
							</div>
						);
					})}

					<div className="sm:col-span-6 md:col-span-3 lg:col-span-3 md:flex flex-col items-end ">
						<div className="text-center md:text-start">
							<p className="text-gray-800 text-lg font-semibold mb-2 ">{t('Mobile app')}</p>
							<Link to="/">
								<PlayStore className="mx-auto mb-4  md:ltr:ml-auto md:rtl:mr-auto" />
							</Link>
							<Link to="/">
								<AppleStore className="mx-auto md:ltr:ml-auto md:rtl:mr-auto" />
							</Link>
						</div>
					</div>
				</div>
			</div>

			<div className="border border-gray-200" >
				<div className="container mx-auto px-4 sm:px-0  flex flex-col md:flex-row justify-between py-6 gap-6">
					<div className="sm:col-span-6 md:col-span-3 col-span-12 lg:col-span-6">
						<div className="flex flex-col md:flex-row justify-center items-center gap-2">
							<p className="text-sm text-gray-600">{t('Copyright © 2021 Admission Assistance. All rights reserved.')}</p>
							<div className="ltr:ml-2 rtl:mr-2 border border-slate-300 hover:border-slate-400 rounded">
								<LangChange />
							</div>
						</div>
					</div>

					<div className="sm:col-span-6 col-span-12 md:col-span-3 lg:col-span-6">
						<div className="flex items-center md:justify-end justify-center">
							<span className="text-sm text-gray-600  rtl:ml-4 ltr:mr-4">{t('Follow us')}</span>
							<ul className="flex">
								<Link to="/" className="rtl:ml-4 ltr:mr-4">
									<FacebookIcon />
								</Link>
								<Link to="/" className="rtl:ml-4 ltr:mr-4">
									<LinkedinIcon />
								</Link>
								<Link to="/" className="rtl:ml-4 ltr:mr-4">
									<TwitterIcon />
								</Link>
								<Link to="/" className="rtl:ml-4 ltr:mr-4">
									<YouTubeIcon width={25} height={17.38} />
								</Link>
								<Link to="/" className="">
									<InstagramIcon />
								</Link>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
