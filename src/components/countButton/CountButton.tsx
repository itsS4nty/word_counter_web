import React, { useContext } from 'react';
import MainContext from '../../context/main';

const _CountButton = () => {
    const main = useContext(MainContext)!;
    const handleOnClick = () => {
        main.word_count_sdk.setFile("/books/dracula.txt");
        main.word_count_sdk.addWord('awakened');
        main.word_count_sdk.setWords(['morris']);
        main.word_count_sdk.findWords();
    }
	return (
		<div>
			_CountButton
			<button onClick={() => handleOnClick()}>Test context</button>
		</div>  
	);
};

const CountButtonMemo = React.memo(_CountButton);

const CountButton = () => {
	return <CountButtonMemo />;
};

export default CountButton;
