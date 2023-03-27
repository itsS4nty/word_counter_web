import React, { useContext, useEffect, useState } from 'react';
import MainContext from '../../context/main';
import { IWordCounterSDKListeners } from 'word_counter_sdk_lib/dist/interfaces/IWordCounterSDKListeners';

const _Progress = () => {
    const main = useContext(MainContext)!;
    const [lengths, setLengths] = useState<number[]>([]);

    useEffect(() => {
        const listener = new class implements IWordCounterSDKListeners {
            onWordFound(wordsFound: number): void {
                console.log(wordsFound)
                setLengths(lengths => [...lengths, wordsFound])
            }
        }();
        main.word_count_sdk.subscribeToEvents(listener);
        return () => main.word_count_sdk.unsubscribeToEvents(listener);
    }, [main]);

	return <div>_Progress { lengths.reduce((acumulado, actual) => acumulado + actual, 0) }</div>;
};

const ProgressMemo = React.memo(_Progress);

const Progess = () => {
	return <ProgressMemo />;
};

export default Progess;
