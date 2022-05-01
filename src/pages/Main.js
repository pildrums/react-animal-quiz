import Container from 'components/Container';
import React from 'react';
import styled from 'styled-components';
import cover from 'assets/images/img0.png';
import Button from 'components/Button';

const Main = () => {
  return (
    <Container>
      <Title>애니멀 퀴즈 온 더 블록</Title>
      <SubTitle>여러분은 동물에 대해 얼마나 알고 있나요?</SubTitle>
      <StyledImage src={cover} alt="cover" />
      <Text>
        10문제를 통해 알아보는 얼마나 동물을 많이 알고 있는지 문제를 한번
        풀어볼까요?
      </Text>
      <Button to="/quiz">시작</Button>
    </Container>
  );
};

const Title = styled.h1`
  font-size: 40px;
  font-weight: 700;
  margin-bottom: 8px;
  text-align: center;
  color: ${props => props.theme.primaryColor100};
`;

const SubTitle = styled.h1`
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 24px;
  text-align: center;
  color: ${props => props.theme.gray80};
`;

const StyledImage = styled.img`
  border-radius: 16px;
  opacity: 80%;
  margin-bottom: 16px;
  max-width: 100%;
  display: block;
`;

const Text = styled.p`
  font-size: 16px;
  margin-bottom: 24px;
`

export default Main;