/* eslint-disable react/require-default-props */
import PropTypes from 'prop-types';

const Chat = ({ height = 22, width = 22, className = '' }) => {
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
				fillRule="evenodd"
				clipRule="evenodd"
				d="M18.0714 18.0699C15.0152 21.1263 10.4898 21.7867 6.78642 20.074C6.23971 19.8539 5.79148 19.676 5.36537 19.676C4.17849 19.683 2.70117 20.8339 1.93336 20.067C1.16555 19.2991 2.31726 17.8206 2.31726 16.6266C2.31726 16.2004 2.14642 15.7602 1.92632 15.2124C0.212831 11.5096 0.874109 6.98269 3.93026 3.92721C7.8316 0.0244319 14.17 0.0244322 18.0714 3.9262C21.9797 7.83501 21.9727 14.1681 18.0714 18.0699Z"
				stroke="#353945"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M14.9389 11.4131H14.9479"
				stroke="#353945"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path d="M10.931 11.4131H10.94" stroke="#353945" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
			<path
				d="M6.92128 11.4131H6.93028"
				stroke="#353945"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

Chat.propTypes = {
	height: PropTypes.number,
	width: PropTypes.number,
	className: PropTypes.string,
};

export default Chat;
