import Button from 'components/Button';
import Container from 'components/Container';
import ResultSection from 'components/ResultSection';
import SocialButton from 'components/SocialButton';
import React from 'react';

// Button 컴포넌트에 onClick 이벤트는
// 점수를 0점으로 초기화하고 메인페이지로 넘어가는 로직.

// ResultSection에는 계산한 점수를 totalScore로 props 전달.
const Result = ({setScore, totalScore}) => {
  return (
    <Container>
      <ResultSection totalScore={totalScore} />
      <Button onClick={() => setScore(0)} to="/">
        테스트 다시하기
      </Button>
      <SocialButton />
    </Container>
  );
};

export default Result;