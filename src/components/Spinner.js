import { useContext } from "react";
import styled, { ThemeContext } from "styled-components";
import GridLoader from "react-spinners/GridLoader";

// react-spinners 설치
// https://github.com/davidhu2000/react-spinners

const Spinner = () => {
  // 우리가 정해놓은 테마 컬러를 사용하기 위해 useContext안에 ThemeContext(styled-components)사용
  const themeContext = useContext(ThemeContext);
  const color = themeContext.primaryColor100;
  return (
    <FlexWrapper>
      <GridLoader size="40" color={color} />
    </FlexWrapper>
  );
};

const FlexWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Spinner;