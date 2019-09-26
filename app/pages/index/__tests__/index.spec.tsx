import React from 'react';
import renderer from 'react-test-renderer';
import { IndexPage } from '..';

describe('IndexPage', () => {
  test('snap shot', () => {
    const component = renderer.create(<IndexPage />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
