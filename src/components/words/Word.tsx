import React from 'react';
import styled from 'styled-components';
//@ts-ignore
import { ReactComponent as CloseSVG } from '../../assets/icons/close.svg';

const Tag = styled.div`
	background-color: #f0f0f0;
	border-radius: 20px;
	color: #333;
	font-size: 14px;
	font-weight: 500;
	padding: 4px 12px;
	display: inline-block;
	box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
	cursor: pointer;
	position: relative;
`;

const CloseButton = styled.span`
	position: absolute;
	right: -4px;
	top: -4px;
	width: 16px;
	height: 16px;
    font-size: 12px;
	border-radius: 50%;
	background-color: #ffffff;
	color: #333;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;

	&:hover {
		background-color: #ff6666;
		color: #fff;
	}

    svg {
        height: 10px;
        width: 10px;
    }
`;

type WordProps = {
	text: string;
	onClose: () => void;
};

const Word = (props: WordProps) => {
	return (
		<Tag>
			{props.text}
			<CloseButton onClick={props.onClose}><CloseSVG /></CloseButton>
		</Tag>
	);
};

export default Word;
