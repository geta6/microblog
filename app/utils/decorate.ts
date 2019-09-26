import { ComponentType, Ref } from 'react';

type Connector = (ComposedComponent: ComponentType<any>) => ComponentType<any>;

export const decorate = <Props = {}>(Component: ComponentType<Props>, connectors: Connector[]) => {
  for (const connector of connectors) {
    Component = connector(Component);
  }
  return Component as ComponentType<Props & { ref?: Ref<any> }>;
};
