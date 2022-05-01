import styled from 'styled-components';

const ResultSection = ({ totalScore }) => {
  return (
    <>
      <SectionTitle>당신의 점수는?</SectionTitle>
      <ResultTitle>{totalScore}</ResultTitle>
    </>
  );
};

const SectionTitle = styled.h1`
  font-size: 32px;
  font-weight: 700;
  margin-top: 0;
  margin-bottom: 8px;
  text-align: center;
`;

const ResultTitle = styled.p`
  font-size: 24px;
  margin-bottom: 56px;
  text-align: center;
`;

export default ResultSection;
