import AnswerSection from 'components/AnswerSection';
import Container from 'components/Container';
import QuestionSection from 'components/QuestionSection';
import { QUIZ } from 'constants';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Quiz = ({ setScore }) => {
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();

  const onAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore((score) => score + 1);
    }

    if (current === QUIZ.length - 1) {
      navigate('/loading');
    } else {
      setCurrent((current) => current + 1);
    }
  };
  return (
    <Container>
      <QuestionSection current={current} />
      <AnswerSection current={current} onAnswer={onAnswer} />
    </Container>
  );
};

export default Quiz;
