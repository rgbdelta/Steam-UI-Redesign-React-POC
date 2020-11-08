import styled from '@emotion/styled';
import React from 'react';
import { colors } from '../Constants/Colors';

interface IProps {
  children: JSX.Element;
  sidePanel: () => JSX.Element;
}
const Container = styled.div`
  border-radius: 15px;
  backdrop-filter: blur(40px) contrast(90%) brightness(90%);
  display: flex;
  overflow: hidden;
  box-shadow: 0px 3px 18px 5px #00000087;
  height: 100%;
  width: 100%;
`;
const SidePanel = styled.div`
  width: 250px;
  padding: 30px;
  overflow-y: scroll;
  overflow-x: hidden;
`;
const Content = styled.div`
  background-color: ${colors.backgroundDefault};
  flex: 1 1;
`;

// TODO: overflow clip?
export const Window = (props: IProps) => {
  return (
    <Container>
      <SidePanel>{props.sidePanel()}</SidePanel>
      <Content>{props.children}</Content>
    </Container>
  );
};
