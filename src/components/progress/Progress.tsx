import React, { useContext, useEffect } from 'react';
import MainContext from '../../context/main';
import { WordCounterSDKListeners } from '../../services/word_counter_sdk';

const _Progress = () => {
    const main = useContext(MainContext)!;

    useEffect(() => {
        const listener = new class implements WordCounterSDKListeners {
            onWordFound(): void {
                console.log('Funciona mi listener bb :\')');
            }
        }();
        main.word_count_sdk.subscribeToEvents(listener);
        return () => main.word_count_sdk.unsubscribeToEvents(listener);
    }, [main]);

	return <div>_Progress</div>;
};

const ProgressMemo = React.memo(_Progress);

const Progess = () => {
	return <ProgressMemo />;
};

export default Progess;
