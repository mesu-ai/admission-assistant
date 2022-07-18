/* eslint-disable react/require-default-props */
import PropTypes from 'prop-types';

const Phone = ({ height = 18, width = 18, className = '' }) => {
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
				d="M1.24275 2.6544C1.47999 2.26159 2.78712 0.832824 3.71991 0.875956C3.99875 0.899063 4.24523 1.06774 4.4455 1.26338C4.90535 1.71242 6.22172 3.41076 6.29644 3.76814C6.47822 4.64466 5.43375 5.14992 5.7534 6.03337C6.56834 8.02748 7.97253 9.4316 9.96751 10.2457C10.8502 10.5654 11.3555 9.52094 12.2321 9.70348C12.5887 9.7782 14.2879 11.0945 14.737 11.5543C14.9318 11.7538 15.1013 12.0011 15.1244 12.2799C15.1591 13.2619 13.6417 14.5875 13.3459 14.7569C12.648 15.256 11.7376 15.2476 10.6276 14.7315C7.5304 13.4429 2.58069 8.58666 1.26817 5.37252C0.765956 4.26879 0.731295 3.35222 1.24275 2.6544Z"
				stroke="#23262F"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

Phone.propTypes = {
	height: PropTypes.number,
	width: PropTypes.number,
	className: PropTypes.string,
};

export default Phone;
