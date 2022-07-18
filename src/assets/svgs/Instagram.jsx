/* eslint-disable react/require-default-props */
import PropTypes from 'prop-types';

const Instagram = ({ height = 18, width = 18, className = '', fill = '#000000' }) => {
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
				d="M11.9502 0H5.43193C2.43242 0 0 2.43242 0 5.43193V11.9502C0 14.9498 2.43242 17.3822 5.43193 17.3822H11.9502C14.9498 17.3822 17.3822 14.9498 17.3822 11.9502V5.43193C17.3822 2.43242 14.9498 0 11.9502 0ZM15.7526 11.9502C15.7526 14.047 14.047 15.7526 11.9502 15.7526H5.43193C3.33521 15.7526 1.62958 14.047 1.62958 11.9502V5.43193C1.62958 3.33521 3.33521 1.62958 5.43193 1.62958H11.9502C14.047 1.62958 15.7526 3.33521 15.7526 5.43193V11.9502Z"
				fill={fill}
			/>
			<path
				d="M8.69125 4.3457C6.29142 4.3457 4.3457 6.29142 4.3457 8.69125C4.3457 11.0911 6.29142 13.0368 8.69125 13.0368C11.0911 13.0368 13.0368 11.0911 13.0368 8.69125C13.0368 6.29142 11.0911 4.3457 8.69125 4.3457ZM8.69125 11.4072C7.19421 11.4072 5.97528 10.1883 5.97528 8.69125C5.97528 7.19312 7.19421 5.97528 8.69125 5.97528C10.1883 5.97528 11.4072 7.19312 11.4072 8.69125C11.4072 10.1883 10.1883 11.4072 8.69125 11.4072Z"
				fill={fill}
			/>
			<path
				d="M13.3622 4.59949C13.682 4.59949 13.9413 4.34024 13.9413 4.02045C13.9413 3.70065 13.682 3.44141 13.3622 3.44141C13.0424 3.44141 12.7832 3.70065 12.7832 4.02045C12.7832 4.34024 13.0424 4.59949 13.3622 4.59949Z"
				fill={fill}
			/>
		</svg>
	);
};

Instagram.propTypes = {
	height: PropTypes.number,
	width: PropTypes.number,
	className: PropTypes.string,
};

export default Instagram;
