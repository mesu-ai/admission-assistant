import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { ChatIcon, ClosebarIcon, MenubarIcon, NotificationIcon, SearchIcon } from '../../assets/svgs';
import Logo from '../../assets/svgs/Logo';
import LangChange from '../../components/atoms/LangChange';
import classNames from '../../utils/classes';

const navigation = [
	{ name: 'Dashboard', href: '#' },
	{ name: 'Service Request', href: '#' },
];

const profile = [
	{ name: 'Profile', href: '#' },
	{ name: 'Orders', href: '#' },
	{ name: 'My Service', href: '#' },
	{ name: 'Favorite', href: '#' },
	{ name: 'Account Statement', href: '#' },
	{ name: 'Settings', href: '#' },
	{ name: 'Sign out', href: '#' },
];

const PrimaryNav = () => {
	const { t } = useTranslation();
	const [open, setOpen] = useState(false);
	const [show, setShow] = useState(false);
	const profileRef = useRef(null);
	const auth = false;

	// useEffect(() => {
	// 	document.body.lang = i18n.language;
	// 	if (i18n.language === 'en') {
	// 		document.body.dir = 'ltr';
	// 	} else {
	// 		document.body.dir = 'rtl';
	// 	}
	// }, [i18n, t]);

	useEffect(() => {
		const handleShowprofileMenu = (event) => {
			if (profileRef && !profileRef?.current?.contains(event.target)) {
				setShow(false);
			}
		};
		if (show) window.addEventListener('click', handleShowprofileMenu);

		return () => window.removeEventListener('click', handleShowprofileMenu);
	}, [show]);

	return (
		<nav className="min-w-full pt-1">
			<div className="relative flex items-center justify-between h-16">
				<div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
					<button
						type="button"
						onClick={() => setOpen(!open)}
						className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
					>
						<span className="sr-only">Open main menu</span>
						{open ? (
							<ClosebarIcon className="h-6 w-6" aria-hidden="true" />
						) : (
							<MenubarIcon className="h-6 w-6" aria-hidden="true" />
						)}
					</button>
				</div>

				<div className="flex items-center justify-center  sm:justify-start">
					<div className="col-span-1 sm:block hidden">
						<Logo className="w-14 h-14" />
					</div>

					<div className="hidden sm:block sm:mx-6">
						<div className="flex flex-row justify-center items-center space-x-4">
							{auth &&
								navigation.map((item) => (
									<Link key={item.name} to={item.href}>
										<p className="text-slategray text-sm md:text-base rounded-md py-2 px-3 font-semibold hover:bg-gray-700 hover:text-white ">
											{`${item?.name}`}
										</p>
									</Link>
								))}
							<LangChange />
						</div>
					</div>
				</div>

				<div className="absolute inset-y-0 right-0 flex items-center  sm:static sm:inset-auto space-x-6 rtl:space-x-reverse ">
					{!auth ? (
						<>
							<div className="hidden sm:flex items-center  border-2 border-mercury rounded-lg py-1.5 px-2.5">
								<input
									type="search"
									name=""
									className="text-sm font-medium	outline-0 border-0"
									placeholder={t('Find Services')}
								/>
								<SearchIcon className="w-5 h-5" />
							</div>

							<Link to="/sign-in" className="text-gray-300 px-8 py-2 rounded-lg text-sm font-medium">
								{t('Log in')}
							</Link>
							<Link
								to="/sign-up"
								className="bg-darkblue text-white px-8 py-3 rounded-lg text-sm font-medium"
								aria-current="page"
							>
								{t('Join')}
							</Link>
						</>
					) : (
						<>
							<button
								type="button"
								className=" p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
							>
								<ChatIcon className="h-6 w-6" aria-hidden="true" />
							</button>

							<button
								type="button"
								className="  p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
							>
								<span className="sr-only">View notifications</span>

								<NotificationIcon className="h-6 w-6" aria-hidden="true" />
							</button>

							<button
								type="button"
								className="hidden sm:block   py-1 px-2  rounded-full text-slategray  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white font-semibold text-sm md:text-base "
							>
								{t('Switch to Buyer')}
							</button>

							{/* Profile dropdown */}
							<div className="relative">
								<div>
									<button
										ref={profileRef}
										onClick={() => setShow(!show)}
										type="button"
										className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
										aria-expanded="false"
										aria-haspopup="true"
									>
										<span className="sr-only">Open user menu</span>
										<img
											className="h-8 w-8 rounded-full"
											src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
											alt=""
										/>
									</button>
								</div>

								{show && (
									<div
										className="origin-top-right absolute right-0 rtl:left-0 rtl:right-auto mt-2 w-36 sm:w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none space-y-2"
										aria-orientation="vertical"
										tabIndex="-1"
									>
										{profile.map((item) => (
											<ul
												key={item.name}
												className={classNames(
													item.name === 'Profile' || item.name === 'Account Statement' ? 'divide-y divide-solid' : '',
													'px-3 space-y-2'
												)}
											>
												<Link key={item.name} to={item.href} onClick={() => setShow(!show)}>
													<li
														className={classNames(
															item?.name === 'Sign out' ? 'text-red-600' : '',
															'block text-base px-1 py-2 text-gray-600 hover:bg-gray-100 z-10'
														)}
														tabIndex="-1"
													>
														{t(`${item?.name}`)}
													</li>
												</Link>

												<li />
											</ul>
										))}
									</div>
								)}
							</div>
						</>
					)}
				</div>
			</div>

			{open && (
				<ul className="sm:hidden">
					<div className="px-2 pt-2 pb-3 space-y-2">
						{auth &&
							navigation.map((item) => (
								<Link key={item.name} to={item.href}>
									<li
										key={item.name}
										className="block text-center text-slategray text-base px-3 py-2 rounded-md font-semibold hover:bg-gray-700 hover:text-white "
									>
										{item.name}
									</li>
								</Link>
							))}

						{!auth && (
							<div className="sm:hidden flex justify-center items-center  border-2 border-mercury rounded-lg py-1.5 px-2.5 mx-10  mb-5">
								<input
									type="search"
									name=""
									id=""
									className="text-sm font-medium	outline-0 border-0 w-full"
									placeholder={t('Find Services')}
								/>
								<SearchIcon className="w-5 h-5" />
							</div>
						)}

						<div className="flex items-center justify-center space-x-3 rtl:space-x-reverse mx-6 pt-3">
							<div className="px-2">
								<LangChange />
							</div>
							<div>
								<button
									type="button"
									className="  py-1 px-2  rounded-full text-slategray  focus:outline-none ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white font-semibold text-base"
								>
									{t('Switch to Buyer')}
								</button>
							</div>
						</div>
					</div>
				</ul>
			)}
		</nav>
	);
};

export default PrimaryNav;
