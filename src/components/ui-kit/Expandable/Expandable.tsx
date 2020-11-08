import styled from '@emotion/styled';
import React, { useState } from 'react';
import { AiOutlineMinus } from 'react-icons/ai';
import { colors } from '../constants/colors';
import { Paragraph, TypographyIntent } from '../Typography';

interface IProps {
  title: string;
  items: string[];
  intent?: TypographyIntent;
}

const TitleBar = styled.div`
  background-image: linear-gradient(
    to right,
    ${colors.backgroundPrimary},
    ${colors.backgroundTransparent}
  );
  padding: 6px 8px;
  border-radius: 5px;
  cursor: pointer;
`;

const TitleBarIconContainer = styled.span`
  padding: 0px 5px;
`;

const ExpandableItem = styled.div`
  padding: 5px 0px 5px 25px;
`;

export const Expandable = (props: IProps) => {
  const [isExpanded, setExpanded] = useState(true);

  return (
    <div>
      <TitleBar onClick={() => setExpanded(!isExpanded)}>
        <Paragraph intent="inverted">
          <TitleBarIconContainer>
            <AiOutlineMinus />
          </TitleBarIconContainer>
          {props.title} ({props.items.length})
        </Paragraph>
      </TitleBar>
      {isExpanded &&
        props.items.map((item, index) => (
          <ExpandableItem key={index}>
            <Paragraph intent={props.intent}>{item}</Paragraph>
          </ExpandableItem>
        ))}
    </div>
  );
};
