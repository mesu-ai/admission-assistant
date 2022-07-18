/* eslint-disable react/no-array-index-key */
import { memo, useCallback, useState } from 'react';
import SingleInput from './SingleInput';

export const OTPInputComponent = (props) => {
	const { length, isNumberInput, autoFocus, disabled, onChangeOTP, inputClassName, inputStyle } = props;

	const [activeInput, setActiveInput] = useState(0);
	const [otpValues, setOTPValues] = useState(Array(length).fill(''));

	// Helper to return OTP from inputs
	const handleOtpChange = useCallback(
		(otp) => {
			const otpValue = otp.join('');
			onChangeOTP(otpValue);
		},
		[onChangeOTP]
	);

	// Helper to return value with the right type: 'text' or 'number'
	const getRightValue = useCallback(
		(str) => {
			const changedValue = str;

			if (!isNumberInput || !changedValue) {
				return changedValue;
			}

			return Number(changedValue) >= 0 ? changedValue : '';
		},
		[isNumberInput]
	);

	// Change OTP value at focussing input
	const changeCodeAtFocus = useCallback(
		(str) => {
			const updatedOTPValues = [...otpValues];
			updatedOTPValues[activeInput] = str[0] || '';
			setOTPValues(updatedOTPValues);
			handleOtpChange(updatedOTPValues);
		},
		[activeInput, handleOtpChange, otpValues]
	);

	// Focus `inputIndex` input
	const focusInput = useCallback(
		(inputIndex) => {
			const selectedIndex = Math.max(Math.min(length - 1, inputIndex), 0);
			setActiveInput(selectedIndex);
		},
		[length]
	);

	const focusPrevInput = useCallback(() => {
		focusInput(activeInput - 1);
	}, [activeInput, focusInput]);

	const focusNextInput = useCallback(() => {
		focusInput(activeInput + 1);
	}, [activeInput, focusInput]);

	// Handle onFocus input
	const handleOnFocus = useCallback(
		(index) => () => {
			focusInput(index);
		},
		[focusInput]
	);

	// Handle onChange value for each input
	const handleOnChange = useCallback(
		(e) => {
			const val = getRightValue(e.currentTarget.value);
			if (!val) {
				e.preventDefault();
				return;
			}
			changeCodeAtFocus(val);
			focusNextInput();
		},
		[changeCodeAtFocus, focusNextInput, getRightValue]
	);

	// Handle onBlur input
	const onBlur = useCallback(() => {
		setActiveInput(-1);
	}, []);

	// Handle onKeyDown input
	const handleOnKeyDown = useCallback(
		(e) => {
			const pressedKey = e.key;

			switch (pressedKey) {
				case 'Backspace':
				case 'Delete': {
					e.preventDefault();
					if (otpValues[activeInput]) {
						changeCodeAtFocus('');
					} else {
						focusPrevInput();
					}
					break;
				}
				case 'ArrowLeft': {
					e.preventDefault();
					focusPrevInput();
					break;
				}
				case 'ArrowRight': {
					e.preventDefault();
					focusNextInput();
					break;
				}
				default: {
					if (pressedKey.match(/^[^a-zA-Z0-9]$/)) {
						e.preventDefault();
					}

					break;
				}
			}
		},
		[activeInput, changeCodeAtFocus, focusNextInput, focusPrevInput, otpValues]
	);

	const handleOnPaste = useCallback(
		(e) => {
			e.preventDefault();
			const pastedData = e.clipboardData
				.getData('text/plain')
				.trim()
				.slice(0, length - activeInput)
				.split('');
			if (pastedData) {
				let nextFocusIndex = 0;
				const updatedOTPValues = [...otpValues];
				updatedOTPValues.forEach((val, index) => {
					if (index >= activeInput) {
						const changedValue = getRightValue(pastedData.shift() || val);
						if (changedValue) {
							updatedOTPValues[index] = changedValue;
							nextFocusIndex = index;
						}
					}
				});
				setOTPValues(updatedOTPValues);
				setActiveInput(Math.min(nextFocusIndex + 1, length - 1));
			}
		},
		[activeInput, getRightValue, length, otpValues]
	);

	return (
		<div>
			{Array(length)
				.fill('')
				.map((_, index) => (
					<SingleInput
						key={`SingleInput-${index}`}
						type={isNumberInput ? 'number' : 'text'}
						focus={activeInput === index}
						value={otpValues && otpValues[index]}
						autoFocus={autoFocus}
						onFocus={handleOnFocus(index)}
						onChange={handleOnChange}
						onKeyDown={handleOnKeyDown}
						onBlur={onBlur}
						onPaste={handleOnPaste}
						style={inputStyle}
						className={inputClassName}
						disabled={disabled}
					/>
				))}
		</div>
	);
};

const OTPInput = memo(OTPInputComponent);
export default OTPInput;