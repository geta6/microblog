import React from 'react';
import renderer from 'react-test-renderer';
import { SelectComponent } from '..';

describe('SelectComponent', () => {
  test('snap shot', () => {
    const component = renderer.create(<SelectComponent />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
