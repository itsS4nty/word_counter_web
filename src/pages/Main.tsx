import React from 'react'
import styled from 'styled-components';
import CountButton from '../components/countButton/CountButton';
import Progess from '../components/progress/Progress';
import Words from '../components/words/Words';

const Container = styled.div`
    height: 100vh;
    width: 100%;
    background: linear-gradient(0deg, #FFFFFF 0%, #E0EAEE 98%);
`;

const ComponentsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 24px;
    width: 100%;
    height: 40%;
`;

const Main = () => {
  return (
    <Container>
        <ComponentsContainer>
            <Words />
            <Progess />
            <CountButton />
        </ComponentsContainer>
    </Container>
  )
}

export default Main;