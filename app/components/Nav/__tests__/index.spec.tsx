import React from 'react';
import renderer from 'react-test-renderer';
import { NavComponent } from '..';

describe('NavComponent', () => {
  test('snap shot', () => {
    const component = renderer.create(<NavComponent />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
