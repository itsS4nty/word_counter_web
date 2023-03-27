import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { IWordCounterSDKListeners } from 'word_counter_sdk_lib/dist/interfaces/IWordCounterSDKListeners';
import MainContext from '../../context/main';
import Word from './Word';
import WordsInput from './WordsInput';

const Container = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 16px;
    height: 30%;
`;

const WordsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    max-height: 350px;
    width: 300px;
    overflow: auto;
    padding: 20px;
`;

const Words = () => {
    const main = useContext(MainContext)!;
	const [words, setWords] = useState<string[]>([]);

    useEffect(() => {
        const listener = new class implements IWordCounterSDKListeners {
            onAddWord(word: string[]): void {
                setWords(word);
            }
            onWordFound(wordsFound: number): void {
                
            }
        }();
        main.word_count_sdk.subscribeToEvents(listener);
        return () => main.word_count_sdk.unsubscribeToEvents(listener);
    }, [main]);

    const handleOnClickClose = (word: string) => {
        main.word_count_sdk.deleteWord(word);
    }

	return (
		<Container>
			<WordsInput />
            <WordsContainer>
                { words.length > 0 && words.map((word, index) => <Word key={index} text={word} onClose={() => handleOnClickClose(word)} />)}
            </WordsContainer>
		</Container>
	);
};

export default Words;
