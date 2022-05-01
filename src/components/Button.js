import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Button = ({to, onClick, children}) => {
  return (
    to ? (
      <StyledLink to={to}>
        <StyledButton onClick={onClick}>{children}</StyledButton>
      </StyledLink>
    ) : (
      <StyledButton onClick={onClick}>{children}</StyledButton>
    )
  );
};

const StyledLink = styled(Link)`
  width: 100%;
`;

const StyledButton = styled.button`
  font-size: ${props => props.fontSize === 'big' ? '32px' : '16px'};
  color: #fff;
  background: ${props => props.theme.primaryColor100};
  border-radius: 5px;
  border: 0;
  height: 56px;
  padding: 4px;
  margin: 4px;
  cursor: pointer;
  width: 100%;
  outline: none;
  font-weight: 700;
  &:hover {
    background: ${props => props.theme.primaryColor80};
  }
`;

export default Button;