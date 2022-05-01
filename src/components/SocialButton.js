import styled from 'styled-components';
import {
  FacebookIcon,
  FacebookShareButton,
  TwitterShareButton,
  TwitterIcon,
} from 'react-share';
import { CopyToClipboard } from 'react-copy-to-clipboard';

// react-copy-to-clipboard 설치(클립보드 복사 기능)
// facebooksharebutton과 tweetersharebutton 안에 url 입력해야 작동.
// 카카오는 api를 따로 설정해서 넣어야 함. (구글링해서 자세히 알아보면 좋음)

const SocialButton = () => {
  const currentUrl = window.location.href;
  return (
    <FlexContainer>
      <Title>나의 결과 공유하기</Title>
      <GridContainer>
        <FacebookShareButton url={currentUrl}>
          <FacebookIcon size={48} round={true} borderRadius={24} />
        </FacebookShareButton>
        <TwitterShareButton url={currentUrl}>
          <TwitterIcon size={48} round={true} borderRadius={24} />
        </TwitterShareButton>
        <CopyToClipboard text={currentUrl}>
          <URLShareButton>URL</URLShareButton>
        </CopyToClipboard>
      </GridContainer>
    </FlexContainer>
  );
};

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.div`
  font-size: 16px;
  text-align: center;
  margin-bottom: 8px;
  font-weight: 700;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 48px);
  grid-column-gap: 8px;
  justify-content: center;
  align-items: center;
`;

const URLShareButton = styled.button`
  width: 48px;
  height: 48px;
  color: #fff;
  border-radius: 24px;
  border: 0px;
  font-weight: 800;
  font-size: 18px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.primaryColor100};
`;

export default SocialButton;
