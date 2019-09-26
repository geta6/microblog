import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0 20px;
  height: 64px;
  background-color: rgba(0, 0, 0, 0.05);
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1);
`;

export const Col = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 640px;
  height: 100%;
`;

export const Logo = styled.div`
  padding-right: 20px;
  font-size: 1.2em;
  font-weight: bold;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  padding: 0 10px;
  height: 100%;

  & + & {
    margin-left: 1em;
  }

  &:hover {
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.1);
  }
`;
