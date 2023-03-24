import React, { useContext } from 'react';
import MainContext from '../../context/main';

const _CountButton = () => {
    const main = useContext(MainContext)!;
	return (
		<div>
			_CountButton
			<button onClick={() => main.word_count_sdk.findWords()}>Test context</button>
		</div>  
	);
};

const CountButtonMemo = React.memo(_CountButton);

const CountButton = () => {
	return <CountButtonMemo />;
};

export default CountButton;
