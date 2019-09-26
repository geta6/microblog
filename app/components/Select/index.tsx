import React, { memo, useState } from 'react';
import { Container, Contents } from './style';
import { decorate } from '../../utils/decorate';

export const SelectComponent = () => {
  const [color, setColor] = useState<string>();
  const handlePink = () => setColor('pink');
  const handleCyan = () => setColor('cyan');
  return (
    <Container style={{ backgroundColor: color }}>
      <Contents onClick={handlePink}>PINK</Contents>
      <Contents onClick={handleCyan}>CYAN</Contents>
    </Container>
  );
};

export const Select = decorate(SelectComponent, [memo]);
