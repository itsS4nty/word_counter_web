import React, { useContext, useEffect, useState } from 'react';
import { IWordCounterSDKListeners } from 'word_counter_sdk_lib/dist/interfaces/IWordCounterSDKListeners';
import MainContext from '../../context/main';

const Word = () => {
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

	return (
		<div>
			{words.length > 0 && words.map((word) => <p>{word}</p>)}
		</div>
	);
};

export default Word;
