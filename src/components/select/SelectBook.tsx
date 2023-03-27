import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import MainContext from '../../context/main';
import { Files } from '../../enums/files';

const Container = styled.div`
	display: flex;
	gap: 12px;
`;

const Select = styled.select`
	font-size: 16px;
	border: none;
	border-radius: 5px;
	padding: 8px;
	background-color: #f0f0f0;
	color: #333;
	box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
	width: 256px;
	cursor: pointer;

	&:focus {
		outline: none;
		background-color: #fff;
	}

	option {
		font-size: 16px;
		background-color: #f0f0f0;
		color: #333;
		border: none;
		cursor: pointer;
	}
`;

const Input = styled.input`
	border: none;
	border-radius: 10px;
	padding: 8px;
	font-size: 16px;
	background-color: #f0f0f0;
	color: #333;
	box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
	width: 256px;

	&:focus {
		outline: none;
		background-color: #fff;
	}
`;

type File = {
	name: string;
	url: string;
};

const SelectBook = () => {
	const main = useContext(MainContext)!;
	const [files] = useState<File[]>([
		{ name: 'Dracula', url: Files.DRACULA },
		{ name: 'Lorem Ipsum', url: Files.LOREM },
		// { name: 'Other', url: Files.OTHER },
	]);
	const [selectedFile, setSelectedFile] = useState<Files>(Files.DRACULA);
	const [url, setUrl] = useState<string>(Files.DRACULA);

	const handleOnChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setSelectedFile(e.target.value as Files);
		setUrl(e.target.value);
	};

	const handleOnChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		setUrl(e.target.value);
	};

    useEffect(() => {
        main.word_count_sdk.setFile(url);
    }, [main, url])

	return (
		<Container>
			<Select value={selectedFile} onChange={handleOnChange}>
				{files.map((file, index) => (
					<option key={index} value={file.url}>{file.name}</option>
				))}
			</Select>
			{/* 
                NOTE:
                Uncomment the following code if you want to read a book from a custom URL.
                You will have to uncomment the line where the file type "Files.OTHERS" is too.
                However, keep in mind that CORS issues might arise depending on the server you are attacking.
                Therefore, it is better to stick with the provided books in the select element.
            */}
			{/* {selectedFile === Files.OTHER && (
				<Input
					type='text'
					id='word_input'
					value={url}
					onChange={handleOnChangeInput}
                    placeholder='Enter a txt URL file'
				/>
			)} */}
		</Container>
	);
};

export default SelectBook;
