import Container from "components/Container";
import Spinner from "components/Spinner";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Loading = ({totalScore}) => {
  const [title, setTitle] = useState("결과 분석 중");
  const navigate = useNavigate();

  // 결과 분석 중이라는 텍스트 끝에 .이 7초마다 한개 씩 찍힘.
  useEffect(() => {
    const id = setTimeout(() => {
      setTitle(title => title + ".");
    }, 700);
    return () => clearTimeout(id);
  }, [title]);

  useEffect(() => {
    setTimeout(() => navigate(`/result`), 2700);
  }, [navigate]);
  return (
    <Container>
      <Title>{title}</Title>
      <Spinner />
    </Container>
  );
};

const Title = styled.h1`
  font-size: 32px;
  font-weight: 700;
  margin: 8px;
  margin-bottom: 96px;
  text-align: center;
`;

export default Loading;