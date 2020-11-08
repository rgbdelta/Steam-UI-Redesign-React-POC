import React from 'react';
import { Window } from '../../components/ui-kit/Window/Window';
import { SidePanel } from './components/SidePanel/SidePanel';

const App = () => {
  return (
    <Window sidePanel={SidePanel}>
      <Content />
    </Window>
  );
};

const Content = () => {
  return <div>Main Content</div>;
};

export default App;
