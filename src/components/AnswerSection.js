import { QUIZ } from 'constants';
import React from 'react';
import styled from 'styled-components';
import Button from 'components/Button';

const AnswerSection = ({current, onAnswer}) => {
  return (
    <AnswerWrapper>
      {QUIZ[current].answer.map((answer, index) => (
        <Button key={index} onClick={() => onAnswer(answer.isCorrect)}>
          {answer.text}
        </Button>
      ))}
    </AnswerWrapper>
  );
};

const AnswerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 8px;
`;

export default AnswerSection;