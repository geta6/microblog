import React, { memo } from 'react';
import { Container, Col, Logo, Row } from './style';
import { decorate } from '../../utils/decorate';

export const NavComponent = () => {
  return (
    <Container>
      <Col>
        <Logo>Microblog</Logo>
        <Row>Menu1</Row>
        <Row>Menu2</Row>
        <Row>Menu3</Row>
      </Col>
    </Container>
  );
};

export const Nav = decorate(NavComponent, [memo]);
