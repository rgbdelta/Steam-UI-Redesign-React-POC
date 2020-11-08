import React from 'react';
import { Window } from '../../components/ui-kit/Window/Window';
import { Content } from './components/Content/Content';
import { SidePanel } from './components/SidePanel/SidePanel';

const Main = () => {
  return (
    <Window sidePanel={SidePanel}>
      <Content />
    </Window>
  );
};

export default Main;
