import React, { memo } from 'react';
import { NextPage } from 'next';
import { Container, Contents } from './style';
import { decorate } from '../../utils/decorate';

export const IndexPage: NextPage = () => {
  return (
    <Container>
      <Contents>
        <p>水馬赤いな。ア、イ、ウ、エ、オ。</p>
        <p>浮藻に子蝦もおよいでる。</p>
        <p>柿の木、栗の木。カ、キ、ク、ケ、コ。</p>
        <p>啄木鳥こつこつ、枯れけやき。</p>
      </Contents>
    </Container>
  );
};

export default decorate(IndexPage, [memo]);
