import styled from '@emotion/styled';
import React from 'react';
import { CgClose, CgMaximize, CgMinimize } from 'react-icons/cg';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { colors } from '../../../../components/ui-kit/constants/colors';
import { Heading2 } from '../../../../components/ui-kit/Typography';

const Container = styled.div`
  display: flex;
  padding: 10px;
  background-color: ${colors.backgroundSecondary};
`;

const NavigationOptionsContainer = styled.div`
  display: flex;

  div {
    padding: 10px;
  }
`;
const CreditsSummaryContainer = styled.div`
  display: flex;
  flex: 1 1;

  div {
    padding: 10px;
  }
`;
const WindowOptionsContainer = styled.div`
  display: flex;

  div {
    padding: 10px;
  }
`;

export const NavigationBar = () => {
  return (
    <Container>
      <NavigationOptionsContainer>
        <Heading2 intent="inverted">
          <IoIosArrowBack />
        </Heading2>
        <Heading2 intent="inverted">
          <IoIosArrowForward />
        </Heading2>
      </NavigationOptionsContainer>

      <CreditsSummaryContainer>
        <Heading2 intent="inverted">Credits</Heading2>
      </CreditsSummaryContainer>

      <WindowOptionsContainer>
        <Heading2 intent="inverted">
          <CgMinimize />
        </Heading2>
        <Heading2 intent="inverted">
          <CgMaximize />
        </Heading2>
        <Heading2 intent="inverted">
          <CgClose />
        </Heading2>
      </WindowOptionsContainer>
    </Container>
  );
};
