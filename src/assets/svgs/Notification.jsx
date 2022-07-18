/* eslint-disable react/require-default-props */
import PropTypes from 'prop-types';

const Notification = ({ height = 24, width = 24, className = '' }) => {
	return (
		<svg
			width={height}
			height={width}
			viewBox={`0 0 ${height} ${width}`}
			className={className}
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				id="Stroke 1"
				fillRule="evenodd"
				clipRule="evenodd"
				d="M12 17.8476C17.6392 17.8476 20.2481 17.1242 20.5 14.2205C20.5 11.3188 18.6812 11.5054 18.6812 7.94511C18.6812 5.16414 16.0452 2 12 2C7.95477 2 5.31885 5.16414 5.31885 7.94511C5.31885 11.5054 3.5 11.3188 3.5 14.2205C3.75295 17.1352 6.36177 17.8476 12 17.8476Z"
				stroke="#353945"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				id="Stroke 3"
				d="M14.3889 20.8572C13.0247 22.3719 10.8967 22.3899 9.51953 20.8572"
				stroke="#353945"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

Notification.propTypes = {
	height: PropTypes.number,
	width: PropTypes.number,
	className: PropTypes.string,
};

export default Notification;
