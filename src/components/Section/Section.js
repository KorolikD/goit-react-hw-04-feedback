import React from 'react';
import { SectionTitle, Wraper } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <Wraper>
      {title && <SectionTitle>{title}</SectionTitle>}
      {children}
    </Wraper>
  );
};
