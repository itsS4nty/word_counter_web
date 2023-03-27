import React, { useContext, useEffect, useState } from 'react';
import MainContext from '../../context/main';
import { IWordCounterSDKListeners } from 'word_counter_sdk_lib/dist/interfaces/IWordCounterSDKListeners';
import styled, { keyframes } from 'styled-components';
import { View } from '../../enums/view';
import TickSVG from '../svg/TickSVG';

const Container = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 12px;
`;

const InfoContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 12px;
`;

const Text = styled.span<{ isLoading: boolean }>`
	font-size: 36px;
	color: #333;

	${(props) =>
		!props.isLoading && `
            .words_found {
                color: #00804d;
            }
    `}
`;

const rotate = keyframes`
    to {
        transform: rotate(360deg);
    }
`;

const Spinner = styled.div`
	border: 4px solid rgba(0, 0, 0, 0.1);
	border-left-color: #09f;
	border-radius: 50%;
	width: 32px;
	height: 32px;
	animation: ${rotate} 1s linear infinite;
`;

const TickContainer = styled.div`
	height: 24px;
	width: 24px;
	padding: 8px;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 50%;
	background-color: #00ff7f;
`;

const GoBack = styled.span`
	font-family: 'Courier New', Courier, monospace;
	font-size: 20px;
	cursor: pointer;

	:before {
		content: '<-';
		margin-right: 8px;
	}
`;

type _ProgressProps = {
	changeView: (view: View) => void;
};

const _Progress = (props: _ProgressProps) => {
	const main = useContext(MainContext)!;
	const [lengths, setLengths] = useState<number>(0);
	const [loading, setLoading] = useState<boolean>(true);

	useEffect(() => {
		const listener = new (class implements IWordCounterSDKListeners {
			onWordFound(wordsFound: number): void {
				setLengths((lengths) => lengths + wordsFound);
			}
			onFinish(): void {
				setLoading(false);
			}
		})();
		main.word_count_sdk.subscribeToEvents(listener);
		return () => main.word_count_sdk.unsubscribeToEvents(listener);
	}, [main]);

	const reset = () => {
		setLengths(0);
		setLoading(false);
        main.word_count_sdk.reset();
		props.changeView(View.NORMAL);
	};

	return (
		<Container>
			<InfoContainer>
				<Text isLoading={loading}>
					<span className='words_found'>{lengths}</span> words found!
				</Text>
				{loading ? (
					<Spinner />
				) : (
					<TickContainer>
						<TickSVG />
					</TickContainer>
				)}
			</InfoContainer>
			{!loading && <GoBack onClick={reset}>Go back</GoBack>}
		</Container>
	);
};

const ProgressMemo = React.memo(_Progress);

type ProgressProps = {
	changeView: (view: View) => void;
};

const Progess = (props: ProgressProps) => {
	return <ProgressMemo {...props} />;
};

export default Progess;
