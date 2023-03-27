import React, { useCallback, useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { IWordCounterSDKListeners } from 'word_counter_sdk_lib/dist/interfaces/IWordCounterSDKListeners';
import CountButton from '../components/countButton/CountButton';
import Progess from '../components/progress/Progress';
import SelectBook from '../components/select/SelectBook';
import Words from '../components/words/Words';
import MainContext from '../context/main';
import { View } from '../enums/view';

const Container = styled.div`
	height: 100vh;
	width: 100%;
	background: linear-gradient(0deg, #ffffff 0%, #e0eaee 98%);
`;

const Title = styled.h1`
	font-size: 48px;
	font-weight: 600;
	color: #333;
	text-align: center;
	text-transform: uppercase;
	letter-spacing: 4px;
	padding-top: 32px;
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

const FooterContainer = styled.div`
	display: flex;
	gap: 12px;
`;

const Main = () => {
	const main = useContext(MainContext)!;
	const [view, setView] = useState<View>(View.NORMAL);

	useEffect(() => {
		let listener = new (class implements IWordCounterSDKListeners {
			onStart(): void {
				setView(View.COUNTING);
			}
			onWordFound(wordsFound: number): void {}
		})();
		main.word_count_sdk.subscribeToEvents(listener);
		return () => main.word_count_sdk.subscribeToEvents(listener);
	}, [main]);

	const renderView = useCallback(() => {
		switch (view) {
			case View.NORMAL:
				return (
					<>
						<Words />
						<FooterContainer>
							<SelectBook />
							<CountButton />
						</FooterContainer>
					</>
				);
			case View.COUNTING:
				return <Progess changeView={setView} />;
		}
	}, [view]);

	return (
		<Container>
            <Title>Word Counter</Title>
			<ComponentsContainer>{renderView()}</ComponentsContainer>
		</Container>
	);
};

export default Main;
