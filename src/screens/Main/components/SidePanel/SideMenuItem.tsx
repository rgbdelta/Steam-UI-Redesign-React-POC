import styled from '@emotion/styled';
import React from 'react';
import { Heading3 } from '../../../../components/ui-kit/Typography';

export interface ISideMenuItemProps {
  icon: JSX.Element;
  text: string;
}

export const SidePanelMenuItem = (props: ISideMenuItemProps) => {
  const Container = styled.div`
    display: flex;
    flex-direction: row;
    padding: 15px 0;
  `;
  const IconContainer = styled.div`
    flex: 1 1 0;
  `;
  const TextContainer = styled.div`
    flex: 2 2 0;
  `;

  return (
    <Container>
      <IconContainer>
        <Heading3 intent="inverted">{props.icon}</Heading3>
      </IconContainer>
      <TextContainer>
        <Heading3 intent="inverted">{props.text}</Heading3>
      </TextContainer>
    </Container>
  );
};
