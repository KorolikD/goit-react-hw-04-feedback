import styled from 'styled-components';
import { theme } from 'styles';

export const Wraper = styled.section`
  padding-top: ${theme.spacing(5)};
  padding-bottom: ${theme.spacing(5)};
`;

export const SectionTitle = styled.h2`
  margin-bottom: ${theme.spacing(10)};

  font-weight: 700;
  font-size: 36px;
  line-height: 1.17;
  text-align: center;

  color: ${theme.colors.dark};
`;
