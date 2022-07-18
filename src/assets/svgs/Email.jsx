/* eslint-disable react/require-default-props */
import PropTypes from 'prop-types';

const Email = ({ height = 16, width = 17, className = '' }) => {
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
				d="M12.95 5.79565L9.75088 8.37136C9.14547 8.84601 8.2968 8.84601 7.69139 8.37136L4.46484 5.79565"
				stroke="#23262F"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M5.1659 1.625H12.2368C13.2564 1.63644 14.2268 2.06745 14.922 2.81765C15.6172 3.56786 15.9766 4.57177 15.9165 5.59559V10.4915C15.9766 11.5153 15.6172 12.5192 14.922 13.2694C14.2268 14.0196 13.2564 14.4506 12.2368 14.4621H5.1659C2.97597 14.4621 1.5 12.6805 1.5 10.4915V5.59559C1.5 3.40659 2.97597 1.625 5.1659 1.625Z"
				stroke="#23262F"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

Email.propTypes = {
	height: PropTypes.number,
	width: PropTypes.number,
	className: PropTypes.string,
};

export default Email;
