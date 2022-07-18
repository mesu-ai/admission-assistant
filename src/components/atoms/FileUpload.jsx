/* eslint-disable jsx-a11y/label-has-associated-control */
import { useRef, useState } from 'react';
import { UploadIcon } from '../../assets/svgs';

const FileUpload = ({ title = '' }) => {
	const [dragActive, setDragActive] = useState(false);
	const [selectedFile, setSelectedFile] = useState(null);

	const handleFile = (files) => {
		console.log(files[0].name);
	};

	// ref
	const inputRef = useRef(null);

	// handle drag events
	const handleDrag = (e) => {
		e.preventDefault();
		e.stopPropagation();
		if (e.type === 'dragenter' || e.type === 'dragover') {
			setDragActive(true);
		} else if (e.type === 'dragleave') {
			setDragActive(false);
		}
	};

	// triggers when file is dropped
	const handleDrop = (e) => {
		e.preventDefault();
		e.stopPropagation();
		setDragActive(false);
		if (e.dataTransfer.files && e.dataTransfer.files[0]) {
			setSelectedFile(e.dataTransfer.files);
			handleFile(e.dataTransfer.files);
		}
	};

	// triggers when file is selected with click
	const handleChange = (e) => {
		e.preventDefault();
		if (e.target.files && e.target.files[0]) {
			handleFile(e.target.files);
			setSelectedFile(e.target.files);
		}
	};

	// triggers the input when the button is clicked
	return (
		<div
			className="max-w-xl relative"
			onDragEnter={handleDrag}
			onDragLeave={handleDrag}
			onDragOver={handleDrag}
			onDrop={handleDrop}
		>
			<label
				className={`flex items-center   px-4 transition bg-white border-2  border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none ${
					dragActive ? 'border-2 border-gray-400 h-24' : ' border-2 border-gray-300 h-20'
				} `}
			>
				{selectedFile?.length ? (
					<div className=" w-full text-center">
						<span className="font-medium text-gray-600 ">{selectedFile[0].name}</span>
					</div>
				) : (
					<div className=" w-full text-center">
						<UploadIcon className="mx-auto" width={24} height={24} />

						<span className="font-medium text-gray-600 ">{title}</span>
					</div>
				)}

				<input onChange={handleChange} type="file" ref={inputRef} name="file_upload" className="hidden" />
			</label>
		</div>
	);
};

export default FileUpload;
