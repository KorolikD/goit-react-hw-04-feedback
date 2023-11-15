import styled from 'styled-components';
import { theme } from 'styles';

export const Button = styled.button`
  width: 100px;
  padding: ${theme.spacing(2)};

  background-color: ${theme.colors.white};
  border-radius: ${theme.radii.md};
  box-shadow: ${theme.shadows.small};

  &:hover,
  :focus {
    background-color: ${theme.colors.accent};
    transition: ${theme.animation.cubicBezier};
  }
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: center;
  gap: ${theme.spacing(2)};
`;
