import { QUIZ } from 'constants';
import React from 'react';
import styled from 'styled-components';

const QuestionSection = ({current}) => {
  return (
    <QuestionWrapper>
      <PageLabel>
        <span>{QUIZ[current].id}</span>/{QUIZ.length}
      </PageLabel>
      <img src={QUIZ[current].img} alt="" />
      <QuestionTitle>{QUIZ[current].question}</QuestionTitle>
    </QuestionWrapper>
  );
};

const QuestionWrapper = styled.div`
  margin-bottom: 16px;
  img {
    width: 200px;
    height: 200px;
  }
`;

const PageLabel = styled.h1`
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 8px;
`;

const QuestionTitle = styled.div`
  font-size: 20px;
  margin-bottom: 8px;
`;

export default QuestionSection;