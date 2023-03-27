import React from 'react';
import styled from 'styled-components';
import Word from './Word';
import WordsInput from './WordsInput';

const Container = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 16px;
`;

const Words = () => {
	return (
		<Container>
			<WordsInput />
			<Word />
		</Container>
	);
};

export default Words;
