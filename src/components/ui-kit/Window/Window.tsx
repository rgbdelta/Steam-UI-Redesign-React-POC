import styled from '@emotion/styled';
import React from 'react';
import { colors } from '../Colors';

interface IProps {
  children: JSX.Element;
  sidePanel: () => JSX.Element;
}
const Container = styled.div`
  border-radius: 15px;
  max-width: 600px;
  backdrop-filter: blur(40px) contrast(95%);
  display: flex;
  overflow: hidden;
  box-shadow: 1px 8px 19px 6px #00000073;
`;
const SidePanel = styled.div`
  padding: 30px;
`;
const Content = styled.div`
  padding: 10px;
  background-color: ${colors.backgroundDefault};
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
