import React, { useContext } from 'react';
import styled from 'styled-components';
import MainContext from '../../context/main';

const Button = styled.button`
    background-color: #0077c2;
    color: #fff;
    border-radius: 5px;
    padding: 10px 15px;
    font-size: 16px;
    font-weight: bold;
    border: none;
    cursor: pointer;
    transition: background-color 0.2s ease-in-out;
`;

const _CountButton = () => {
	const main = useContext(MainContext)!;
	const handleOnClick = () => {
		main.word_count_sdk.setFile('/books/dracula.txt');
		main.word_count_sdk.findWords();
	};
	return <Button onClick={() => handleOnClick()}>Count!</Button>;
};

const CountButtonMemo = React.memo(_CountButton);

const CountButton = () => {
	return <CountButtonMemo />;
};

export default CountButton;
