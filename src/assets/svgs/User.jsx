/* eslint-disable react/require-default-props */
import PropTypes from 'prop-types';

const User = ({ height = 22, width = 22, className = '' }) => {
	return (
		<svg
			width={width}
			height={height}
			viewBox={`0 0 ${width} ${height}`}
			className={className}
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M8.98918 11.5098C6.08847 11.5098 3.61133 11.9483 3.61133 13.7048C3.61133 15.4612 6.07276 15.9155 8.98918 15.9155C11.8899 15.9155 14.3663 15.4762 14.3663 13.7205C14.3663 11.9648 11.9056 11.5098 8.98918 11.5098Z"
				stroke="#353945"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M8.99013 9.0049C10.8937 9.0049 12.4366 7.46133 12.4366 5.55776C12.4366 3.65419 10.8937 2.11133 8.99013 2.11133C7.08656 2.11133 5.54299 3.65419 5.54299 5.55776C5.53656 7.4549 7.06942 8.99847 8.96585 9.0049H8.99013Z"
				stroke="#353945"
				strokeWidth="1.42857"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

User.propTypes = {
	height: PropTypes.number,
	width: PropTypes.number,
	className: PropTypes.string,
};

export default User;
