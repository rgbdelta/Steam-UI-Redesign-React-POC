import styled from '@emotion/styled';
import React from 'react';
import { RiSettings3Line } from 'react-icons/ri';
import { Heading2 } from '../../../../components/ui-kit/Typography';
import { NavigationBar } from './NavigationBar';

const ScrollContainer = styled.div`
  padding: 30px;
  overflow-y: scroll;
`;

export const Content = () => {
  return (
    <div>
      <NavigationBar />
      <ScrollContainer>
        <Heading2 intent="muted">
          Recent <RiSettings3Line />
        </Heading2>
      </ScrollContainer>
    </div>
  );
};
