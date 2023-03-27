import React, { useCallback, useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { IWordCounterSDKListeners } from 'word_counter_sdk_lib/dist/interfaces/IWordCounterSDKListeners';
import CountButton from '../components/countButton/CountButton';
import Progess from '../components/progress/Progress';
import Words from '../components/words/Words';
import MainContext from '../context/main';
import { View } from '../enums/view';

const Container = styled.div`
	height: 100vh;
	width: 100%;
	background: linear-gradient(0deg, #ffffff 0%, #e0eaee 98%);
`;

const ComponentsContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 24px;
	width: 100%;
	height: 60%;
`;

const Main = () => {
    const main = useContext(MainContext)!;
    const [view, setView] = useState<View>(View.NORMAL);

    useEffect(() => {
        let listener = new class implements IWordCounterSDKListeners {
            onStart(): void {
                setView(View.COUNTING);
            }
            onWordFound(wordsFound: number): void {
                
            }
        }();
        main.word_count_sdk.subscribeToEvents(listener);
        return () => main.word_count_sdk.subscribeToEvents(listener);
    }, [main]);

    const renderView = useCallback(() => {
        switch(view) {
            case View.NORMAL:
                return (
                    <>
                        <Words />
                        <CountButton />
                    </>
                )
            case View.COUNTING:
                return <Progess changeView={setView} />
        }
    }, [view])

	return (
		<Container>
			<ComponentsContainer>
                { renderView() }
			</ComponentsContainer>
		</Container>
	);
};

export default Main;
