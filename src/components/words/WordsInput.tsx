import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import MainContext from '../../context/main';

const Container = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`;

const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    position: relative;
`;

const Label = styled.label`
    font-size: 12px;
    color: gray;
    position: absolute;
    top: -38px;
    margin: 8px;
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

const AddBtn = styled.div`
    background-color: green;
    width: fit-content;
    height: 100%;
    padding: 0 12px;
    border-radius: 8px;
    color: white;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const WordsInput = () => {
    const main = useContext(MainContext)!;
    const [inputValue, setInputValue] = useState<string>('');
    const handleOnClick = () => {
        if(!inputValue.trim()) {
            alert('Pon palabras');
            return;
        }
        main.word_count_sdk.setWords(inputValue.split(/\s|,/));
        setInputValue('');
    }
	return (
        <Container>
            <InputContainer>
                <Label htmlFor='word_input'>Add words one by one or separated by space or comma</Label>
                <Input type='text' id='word_input' value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
            </InputContainer>
            <AddBtn onClick={handleOnClick}>Add</AddBtn>
        </Container>
    );
};

export default WordsInput;
